import { useMemo, useState } from 'react'
import { useLang, waLink } from '../lib/i18n'
import { PROJECTS, PROJ_CATS, type ProjCat } from '../lib/data'
import { PageHero } from '../components/PageHero'
import { GalleryLightbox } from '../components/GalleryLightbox'
import { BeforeAfter } from '../components/BeforeAfter'
import { ClientStrip } from '../components/ClientStrip'
import { Button } from '../components/Button'
import { Eyebrow, Reveal, WhatsAppIcon } from '../components/ui'

export function Proyectos() {
  const { lang, t } = useLang()
  const [cat, setCat] = useState<ProjCat | 'todos'>('todos')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = useMemo(() => PROJECTS.filter((p) => cat === 'todos' || p.cat === cat), [cat])

  const nav = (dir: 1 | -1) =>
    setLightbox((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length))

  return (
    <>
      <PageHero title={t.projects.h1} subtitle={t.projects.sub} />

      {/* GALLERY */}
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-16">
          <div className="flex flex-wrap gap-2 mb-10">
            {PROJ_CATS.map((c) => {
              const active = cat === c.id
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setCat(c.id)}
                  className="font-mono text-xs uppercase tracking-wider px-3.5 py-2 rounded-[4px] border transition-colors duration-200"
                  style={{
                    borderColor: active ? 'var(--gold)' : 'var(--border-gray)',
                    background: active ? 'var(--sand)' : 'transparent',
                    color: active ? 'var(--charcoal)' : 'var(--concrete)',
                  }}
                >
                  {lang === 'es' ? c.es : c.en}
                </button>
              )
            })}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {filtered.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setLightbox(i)}
                className="group relative block w-full mb-5 overflow-hidden rounded-[4px] break-inside-avoid text-left"
                style={{ background: 'var(--border-gray)' }}
                aria-label={p.caption[lang]}
              >
                <img
                  src={p.image}
                  alt={p.caption[lang]}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute inset-x-0 bottom-0 p-4 font-mono text-xs text-[var(--epoxy-white)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  style={{ background: 'linear-gradient(0deg, rgba(20,20,20,0.9), transparent)' }}
                >
                  {p.caption[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="hex-bg" style={{ background: 'var(--charcoal)' }}>
        <div className="shell py-20">
          <Reveal className="flex flex-col gap-4 mb-10 max-w-2xl">
            <Eyebrow onDark>{t.projects.beforeAfter}</Eyebrow>
            <h2 className="h2 text-[var(--epoxy-white)]">{t.projects.beforeAfter}</h2>
            <p className="text-[var(--concrete)] leading-relaxed">{t.projects.beforeAfterSub}</p>
          </Reveal>
          <Reveal>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      <ClientStrip />

      {/* CTA */}
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-20 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <h2 className="h2 text-[var(--charcoal)] max-w-xl">{t.home.ctaBandTitle}</h2>
          <Button variant="primary" href={waLink(t.wa.generic)} external>
            <WhatsAppIcon size={20} /> {t.home.ctaQuote}
          </Button>
        </div>
      </section>

      <GalleryLightbox items={filtered} index={lightbox} onClose={() => setLightbox(null)} onNav={nav} />
    </>
  )
}
