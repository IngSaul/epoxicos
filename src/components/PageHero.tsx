import { Eyebrow } from './ui'

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="hex-bg" style={{ background: 'var(--charcoal)' }}>
      <div className="shell pt-36 pb-16 flex flex-col gap-5 max-w-3xl">
        {eyebrow && <Eyebrow onDark>{eyebrow}</Eyebrow>}
        <h1 className="h1 text-[var(--epoxy-white)]">{title}</h1>
        {subtitle && <p className="text-[var(--concrete)] text-lg leading-relaxed max-w-2xl">{subtitle}</p>}
      </div>
    </section>
  )
}
