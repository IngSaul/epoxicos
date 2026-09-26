import type { CSSProperties, ReactNode } from 'react'
import { useReveal, useCountUp } from '../lib/hooks'
import { useLang } from '../lib/i18n'

/* --- Hexagon (logo motif / icon frame) ----------------------- */
export function Hexagon({
  size = 56,
  children,
  className = '',
}: {
  size?: number
  children?: ReactNode
  className?: string
}) {
  return (
    <span
      className={`relative inline-grid place-items-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 56 64" width={size} height={size} className="absolute inset-0" aria-hidden="true">
        <path
          d="M28 2 52 16v32L28 62 4 48V16z"
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
        />
      </svg>
      <span className="relative z-10 font-mono text-[var(--gold)]">{children}</span>
    </span>
  )
}

/* --- Logo (placeholder slot) --------------------------------- */
export function Logo({ onDark = true }: { onDark?: boolean }) {
  const { t } = useLang()
  const nameColor = 'var(--gold)'
  const tagColor = onDark ? 'var(--concrete)' : '#6f6c66'
  return (
    <span className="flex items-center gap-3" aria-label={t.logoAlt}>
      <Hexagon size={44}>
        <span className="text-[0.7rem] font-medium tracking-wider">LI</span>
      </Hexagon>
      <span className="flex flex-col leading-none">
        <span className="font-head font-bold uppercase tracking-wide text-[1.35rem]" style={{ color: nameColor }}>
          Epóxicos LAI
        </span>
        <span className="font-mono uppercase text-[0.56rem] tracking-[0.22em] mt-1" style={{ color: tagColor }}>
          {t.brand.tagline}
        </span>
      </span>
    </span>
  )
}

/* --- Reveal wrapper ------------------------------------------ */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  style,
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
  style?: CSSProperties
}) {
  const ref = useReveal<HTMLElement>()
  return (
    // @ts-expect-error polymorphic tag
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms`, ...style }}>
      {children}
    </Tag>
  )
}

/* --- Eyebrow ------------------------------------------------- */
export function Eyebrow({ children, onDark = false }: { children: ReactNode; onDark?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-px w-8" style={{ background: 'var(--gold)' }} />
      <span className="eyebrow" style={{ color: onDark ? 'var(--gold)' : 'var(--gold-dark)' }}>
        {children}
      </span>
    </div>
  )
}

/* --- Stat counter -------------------------------------------- */
export function StatCounter({
  value,
  unit,
  label,
  text,
}: {
  value: number
  unit: string
  label: string
  text?: string
}) {
  const { ref, value: n } = useCountUp(value)
  return (
    <div className="flex flex-col gap-3">
      <Hexagon size={44}>
        <span className="text-[0.62rem] tracking-wider">{unit || '✓'}</span>
      </Hexagon>
      <div className="flex items-baseline gap-2 font-mono">
        <span ref={ref} className="text-[2.6rem] leading-none font-medium text-[var(--epoxy-white)]">
          {text ?? n.toLocaleString('es-MX')}
        </span>
        {unit && !text && <span className="text-[1.1rem] text-[var(--gold)]">{unit}</span>}
      </div>
      <span className="h-px w-10" style={{ background: 'var(--gold)', opacity: 0.5 }} />
      <p className="font-mono text-[0.8rem] text-[var(--concrete)] leading-relaxed max-w-[16rem]">{label}</p>
    </div>
  )
}

/* --- Icons --------------------------------------------------- */
export function WhatsAppIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color} aria-hidden="true">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.8-2.6-1.4-3.7-3.2-.3-.5.3-.5.8-1.5.1-.2 0-.3 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5 1.9.8 2.6.9 3.5.8.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2zm0 18.3c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z" />
    </svg>
  )
}

export function FacebookIcon({ size = 22 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

export function ArrowRight({ size = 18 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}
