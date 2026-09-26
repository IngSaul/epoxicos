import { useState } from 'react'
import { useLang, waLink } from '../lib/i18n'
import { IMG, SERVICES } from '../lib/data'
import type { Route } from '../App'
import { Button } from '../components/Button'
import { Eyebrow, Hexagon, Reveal, StatCounter, WhatsAppIcon, ArrowRight } from '../components/ui'
import { ClientStrip } from '../components/ClientStrip'
import { ServiceCard } from '../components/ServiceCard'
import { ServiceModal } from '../components/ServiceModal'

export function Home({ navigate }: { navigate: (r: Route) => void }) {
  const { t } = useLang()
  const [modal, setModal] = useState<number | null>(null)
  const preview = [SERVICES[0], SERVICES[2], SERVICES[7]]

  return (
    <>
      {/* HERO */}
      <section className="relative hex-bg min-h-[100svh] flex items-center" style={{ background: 'var(--charcoal)' }}>
        {/* right image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2">
          <img src={IMG.heroFloor} alt={t.home.heroAlt} className="w-full h-full object-cover" style={{ background: 'var(--graphite)' }} />
          {/* scrim */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, var(--charcoal) 0%, rgba(20,20,20,0.85) 30%, rgba(20,20,20,0.25) 70%, rgba(20,20,20,0.55) 100%)' }} />
          <div className="absolute inset-0 lg:hidden" style={{ background: 'rgba(20,20,20,0.55)' }} />
        </div>

        <div className="shell relative z-10 w-full">
          <div className="max-w-2xl flex flex-col gap-7 pt-28 pb-16">
            <Reveal><Eyebrow onDark>{t.home.eyebrow}</Eyebrow></Reveal>
            <Reveal delay={80}>
              <h1 className="h1 text-[var(--epoxy-white)]" style={{ fontSize: 'clamp(2.5rem, 6.4vw, 5.75rem)' }}>
                {t.home.h1}
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-[var(--concrete)] text-lg leading-relaxed max-w-xl">{t.home.sub}</p>
            </Reveal>
            <Reveal delay={240}>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href={waLink(t.wa.generic)} external>
                  <WhatsAppIcon size={20} /> {t.home.ctaQuote}
                </Button>
                <Button variant="outline-dark" onClick={() => navigate('soluciones')}>
                  {t.home.ctaSolutions}
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <ClientStrip />

      {/* SOLUTIONS PREVIEW */}
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <Reveal className="flex flex-col gap-4">
              <Eyebrow>{t.home.solEyebrow}</Eyebrow>
              <h2 className="h2 text-[var(--charcoal)] max-w-xl">{t.home.solTitle}</h2>
            </Reveal>
            <Reveal delay={80}>
              <button
                type="button"
                onClick={() => navigate('soluciones')}
                className="inline-flex items-center gap-2 font-head font-semibold uppercase tracking-wide text-[var(--gold-dark)] hover:gap-3 transition-all"
              >
                {t.home.solAll} <ArrowRight size={18} />
              </button>
            </Reveal>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {preview.map((s, i) => (
              <Reveal key={s.id} delay={i * 80}>
                <ServiceCard service={s} onOpen={() => setModal(SERVICES.indexOf(s))} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KEY DATA */}
      <section className="hex-bg" style={{ background: 'var(--charcoal)' }}>
        <div className="shell py-24">
          <Reveal className="flex flex-col gap-4 mb-14">
            <Eyebrow onDark>{t.home.dataEyebrow}</Eyebrow>
            <h2 className="h2 text-[var(--epoxy-white)]">{t.home.dataTitle}</h2>
          </Reveal>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <StatCounter value={s.value} unit={s.unit} label={s.label} text={(s as { text?: string }).text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LAI */}
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-24">
          <Reveal className="flex flex-col gap-4 mb-12">
            <Eyebrow>{t.home.whyEyebrow}</Eyebrow>
            <h2 className="h2 text-[var(--charcoal)]">{t.home.whyTitle}</h2>
          </Reveal>
          <div className="grid gap-10 md:grid-cols-3">
            {t.home.why.map((w, i) => (
              <Reveal key={i} delay={i * 80} className="flex flex-col gap-4">
                <Hexagon size={52}>
                  <span className="font-mono text-sm">0{i + 1}</span>
                </Hexagon>
                <h3 className="h3 text-[var(--charcoal)]">{w.t}</h3>
                <span className="h-px w-10" style={{ background: 'var(--gold)' }} />
                <p className="text-[var(--concrete)] leading-relaxed">{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="shell py-20 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <Reveal className="flex flex-col gap-4 max-w-2xl">
            <h2 className="h2 text-[var(--epoxy-white)]">{t.home.ctaBandTitle}</h2>
            <p className="text-[var(--concrete)] text-lg">{t.home.ctaBandText}</p>
          </Reveal>
          <Reveal delay={80}>
            <Button variant="primary" onClick={() => navigate('especificaciones')}>
              {t.home.ctaBandBtn} <ArrowRight size={18} />
            </Button>
          </Reveal>
        </div>
      </section>

      <ServiceModal service={modal === null ? null : SERVICES[modal]} onClose={() => setModal(null)} />
    </>
  )
}
