import { useLang, waLink } from '../lib/i18n'
import { SPECS } from '../lib/data'
import { PageHero } from '../components/PageHero'
import { ChemicalFinder } from '../components/ChemicalFinder'
import { Button } from '../components/Button'
import { Eyebrow, Reveal, WhatsAppIcon } from '../components/ui'

export function Especificaciones() {
  const { lang, t } = useLang()
  const dataSheetMsg =
    lang === 'es'
      ? 'Hola, necesito la ficha técnica completa del sistema epóxico autonivelante.'
      : 'Hello, I need the full data sheet for the self-leveling epoxy system.'

  return (
    <>
      <PageHero title={t.specs.h1} subtitle={t.specs.sub} />

      {/* PERFORMANCE TABLE */}
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-20">
          <Reveal className="flex flex-col gap-4 mb-10">
            <Eyebrow>{t.specs.tableEyebrow}</Eyebrow>
            <h2 className="h2 text-[var(--charcoal)]">{t.specs.tableTitle}</h2>
          </Reveal>
          <Reveal className="overflow-x-auto border rounded-[4px]" style={{ borderColor: 'var(--border-gray)' }}>
            <table className="w-full border-collapse min-w-[560px]">
              <thead>
                <tr style={{ background: 'var(--charcoal)' }} className="text-left">
                  <th className="p-4 eyebrow text-[var(--gold)]">{t.specs.property}</th>
                  <th className="p-4 eyebrow text-[var(--gold)]">{t.specs.standard}</th>
                  <th className="p-4 eyebrow text-[var(--gold)]">{t.specs.value}</th>
                </tr>
              </thead>
              <tbody>
                {SPECS.map((s, i) => (
                  <tr key={i} style={{ background: i % 2 ? 'white' : 'var(--epoxy-white)', borderTop: '1px solid var(--border-gray)' }}>
                    <td className="p-4 font-head font-semibold uppercase tracking-wide text-[var(--charcoal)] text-[1.05rem]">{s.property[lang]}</td>
                    <td className="p-4 font-mono text-sm text-[var(--concrete)]">{s.standard}</td>
                    <td className="p-4 font-mono text-sm text-[var(--charcoal)]">{s.value[lang]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* CHEMICAL FINDER */}
      <section className="hex-bg" style={{ background: 'var(--strip)' }}>
        <div className="shell py-20">
          <Reveal className="flex flex-col gap-4 mb-10 max-w-2xl">
            <Eyebrow onDark>{t.specs.finderEyebrow}</Eyebrow>
            <h2 className="h2 text-[var(--epoxy-white)]">{t.specs.finderTitle}</h2>
            <p className="text-[var(--concrete)] leading-relaxed">{t.specs.finderSub}</p>
          </Reveal>
          <div className="bg-[var(--epoxy-white)] p-6 sm:p-8 rounded-[4px]">
            <ChemicalFinder />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--charcoal)' }}>
        <div className="shell py-20 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <h2 className="h2 text-[var(--epoxy-white)] max-w-xl">{t.specs.ctaTitle}</h2>
          <Button variant="primary" href={waLink(dataSheetMsg)} external>
            <WhatsAppIcon size={20} /> {t.specs.ctaBtn}
          </Button>
        </div>
      </section>
    </>
  )
}
