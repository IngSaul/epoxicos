import { useState } from 'react'
import { useLang } from '../lib/i18n'
import { SERVICES } from '../lib/data'
import { PageHero } from '../components/PageHero'
import { ServiceCard } from '../components/ServiceCard'
import { ServiceModal } from '../components/ServiceModal'
import { Reveal } from '../components/ui'

export function Soluciones() {
  const { t } = useLang()
  const [modal, setModal] = useState<number | null>(null)

  return (
    <>
      <PageHero eyebrow={t.solutions.eyebrow} title={t.solutions.h1} subtitle={t.solutions.intro} />
      <section style={{ background: 'var(--epoxy-white)' }}>
        <div className="shell py-20">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-mono text-sm text-[var(--gold-dark)]">{t.solutions.count}</span>
            <span className="h-px flex-1" style={{ background: 'var(--border-gray)' }} />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={(i % 3) * 80}>
                <ServiceCard service={s} onOpen={() => setModal(i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <ServiceModal service={modal === null ? null : SERVICES[modal]} onClose={() => setModal(null)} />
    </>
  )
}
