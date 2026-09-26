import { useEffect } from 'react'
import { useLang } from '../lib/i18n'
import type { Project } from '../lib/data'

export function GalleryLightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: Project[]
  index: number | null
  onClose: () => void
  onNav: (dir: 1 | -1) => void
}) {
  const { lang, t } = useLang()

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNav(1)
      if (e.key === 'ArrowLeft') onNav(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, onClose, onNav])

  if (index === null) return null
  const item = items[index]

  const navBtn =
    'grid place-items-center w-12 h-12 rounded-full bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--charcoal)] text-white transition-colors text-2xl'

  return (
    <div className="fixed inset-0 z-[70] flex flex-col" style={{ background: 'rgba(20,20,20,0.95)' }} onClick={onClose} role="dialog" aria-modal="true">
      <div className="flex justify-end p-5">
        <button type="button" onClick={onClose} aria-label={t.projects.lightboxClose} className={navBtn}>
          ✕
        </button>
      </div>
      <div className="flex-1 flex items-center justify-center gap-3 sm:gap-6 px-3 pb-3" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => onNav(-1)} aria-label={t.projects.lightboxPrev} className={navBtn}>
          ‹
        </button>
        <figure className="flex flex-col items-center gap-4 max-w-[85vw]">
          <img
            src={item.image}
            alt={item.caption[lang]}
            className="max-h-[72vh] max-w-full object-contain rounded-[4px]"
          />
          <figcaption className="font-mono text-sm text-[var(--sand)] text-center">{item.caption[lang]}</figcaption>
        </figure>
        <button type="button" onClick={() => onNav(1)} aria-label={t.projects.lightboxNext} className={navBtn}>
          ›
        </button>
      </div>
    </div>
  )
}
