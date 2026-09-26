import { useCallback, useEffect, useRef, useState } from 'react'
import { useLang } from '../lib/i18n'
import { IMG } from '../lib/data'

export function BeforeAfter() {
  const { t } = useLang()
  const [pos, setPos] = useState(50)
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ro = new ResizeObserver(([e]) => setWidth(e.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const p = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.max(0, Math.min(100, p)))
  }, [])

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[16/9] overflow-hidden select-none cursor-ew-resize rounded-[4px]"
      style={{ background: 'var(--border-gray)', touchAction: 'none' }}
      onPointerDown={(e) => {
        dragging.current = true
        ;(e.target as Element).setPointerCapture?.(e.pointerId)
        setFromClientX(e.clientX)
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* after (full) */}
      <img src={IMG.shinyFloor} alt={t.projects.after} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <span className="absolute bottom-3 right-3 font-mono text-xs uppercase tracking-wider px-2 py-1 rounded-[3px]" style={{ background: 'rgba(20,20,20,0.7)', color: 'var(--gold)' }}>
        {t.projects.after}
      </span>

      {/* before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={IMG.concreteRaw}
          alt={t.projects.before}
          className="absolute inset-0 h-full object-cover grayscale"
          style={{ width: width || '100%', maxWidth: 'none' }}
          draggable={false}
        />
        <span className="absolute bottom-3 left-3 font-mono text-xs uppercase tracking-wider px-2 py-1 rounded-[3px]" style={{ background: 'rgba(20,20,20,0.7)', color: 'var(--epoxy-white)' }}>
          {t.projects.before}
        </span>
      </div>

      {/* handle */}
      <div className="absolute top-0 bottom-0" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}>
        <div className="w-0.5 h-full" style={{ background: 'var(--gold)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-10 h-10 rounded-full font-mono text-sm" style={{ background: 'var(--gold)', color: 'var(--charcoal)' }}>
          ⇆
        </div>
      </div>

      <span className="absolute top-3 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] uppercase tracking-wider px-2 py-1 rounded-[3px] pointer-events-none" style={{ background: 'rgba(20,20,20,0.6)', color: 'var(--concrete)' }}>
        {t.projects.dragHint}
      </span>
    </div>
  )
}
