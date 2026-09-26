import { useLang, waLink } from '../lib/i18n'
import { PageHero } from '../components/PageHero'
import { Button } from '../components/Button'
import { Eyebrow, Reveal, Hexagon, WhatsAppIcon, FacebookIcon } from '../components/ui'

export function Contacto() {
  const { t } = useLang()

  const info = [
    { label: t.contact.email, value: 'epoxicoslai@gmail.com', href: 'mailto:epoxicoslai@gmail.com' },
    { label: t.contact.facebook, value: 'Epoxicos LAI', href: 'https://facebook.com', external: true, icon: true },
    { label: t.contact.coverage, value: t.contact.coverageVal },
  ]

  return (
    <>
      <PageHero title={t.contact.h1} subtitle={t.contact.sub} />

      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-20 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          {/* Featured WhatsApp card */}
          <Reveal className="hex-bg flex flex-col gap-6 p-9 sm:p-12 rounded-[4px]" style={{ background: 'var(--charcoal)' }}>
            <Hexagon size={64}>
              <WhatsAppIcon size={28} color="var(--gold)" />
            </Hexagon>
            <Eyebrow onDark>{t.contact.cardEyebrow}</Eyebrow>
            <h2 className="h2 text-[var(--epoxy-white)]">{t.contact.cardTitle}</h2>
            <p className="font-mono text-3xl text-[var(--gold)] tracking-wide">{t.contact.cardNumber}</p>
            <Button variant="primary" href={waLink(t.wa.generic)} external className="w-full sm:w-fit">
              <WhatsAppIcon size={20} /> {t.contact.cardBtn}
            </Button>
          </Reveal>

          {/* Prep list */}
          <Reveal delay={80} className="flex flex-col gap-5 p-9 bg-white border rounded-[4px]" style={{ borderColor: 'var(--border-gray)' }}>
            <h3 className="h3 text-[var(--charcoal)]">{t.contact.prepTitle}</h3>
            <ul className="flex flex-col gap-4">
              {t.contact.prep.map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="font-mono text-sm text-[var(--gold-dark)]">0{i + 1}</span>
                  <span className="h-px w-5" style={{ background: 'var(--gold)' }} />
                  <span className="text-[var(--charcoal)]">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Secondary info */}
      <section style={{ background: 'var(--strip)' }} className="hex-bg">
        <div className="shell py-16">
          <Reveal><Eyebrow onDark>{t.contact.infoTitle}</Eyebrow></Reveal>
          <div className="grid gap-5 sm:grid-cols-3 mt-8">
            {info.map((c, i) => {
              const Inner = (
                <div className="flex flex-col gap-2 h-full p-6 bg-[var(--graphite)] border rounded-[4px] transition-colors duration-300 hover:border-[var(--gold)]"
                  style={{ borderColor: 'rgba(226,222,214,0.12)' }}
                >
                  <span className="eyebrow text-[var(--gold)]">{c.label}</span>
                  <span className="flex items-center gap-2 text-[var(--epoxy-white)] leading-snug">
                    {c.icon && <FacebookIcon size={18} />}
                    {c.value}
                  </span>
                </div>
              )
              return (
                <Reveal key={i} delay={i * 60} className="h-full">
                  {c.href ? (
                    <a href={c.href} {...(c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="block h-full">
                      {Inner}
                    </a>
                  ) : (
                    Inner
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
