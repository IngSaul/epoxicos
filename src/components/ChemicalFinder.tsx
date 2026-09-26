import { useMemo, useState } from 'react'
import { useLang } from '../lib/i18n'
import { CHEMICALS, CHEM_CATS, type Cat, type Chem } from '../lib/data'

function Indicator({ ok, labels }: { ok: boolean; labels: { resists: string; not: string } }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[0.78rem] font-medium whitespace-nowrap"
      style={{ color: ok ? 'var(--green-text)' : 'var(--red-text)' }}
    >
      <span aria-hidden="true">{ok ? '✓' : '✕'}</span>
      {ok ? labels.resists : labels.not}
    </span>
  )
}

function ChemCard({ chem }: { chem: Chem }) {
  const { lang, t } = useLang()
  const labels = { resists: t.specs.resists, not: t.specs.notResists }
  const rows: [string, boolean][] = [
    [t.specs.rows.inmersion, chem.r[0]],
    [t.specs.rows.prolongado, chem.r[1]],
    [t.specs.rows.goteo, chem.r[2]],
  ]
  return (
    <div className="bg-white border p-5 flex flex-col gap-3" style={{ borderColor: 'var(--border-gray)', borderRadius: 4 }}>
      <h4 className="font-head font-semibold uppercase tracking-wide text-[1.05rem] text-[var(--charcoal)]">{chem[lang]}</h4>
      <div className="flex flex-col gap-2 pt-1" style={{ borderTop: '1px solid var(--border-gray)' }}>
        {rows.map(([label, ok]) => (
          <div key={label} className="flex items-center justify-between gap-3 text-sm">
            <span className="text-[var(--concrete)]">{label}</span>
            <Indicator ok={ok} labels={labels} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ChemicalFinder() {
  const { lang, t } = useLang()
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState<Cat | 'todos'>('todos')
  const [asTable, setAsTable] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    return CHEMICALS.filter((c) => {
      const matchCat = cat === 'todos' || c.cat === cat
      const matchQ = !q || c[lang].toLowerCase().includes(q) || c.es.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [query, cat, lang])

  const chip = (active: boolean) =>
    `font-mono text-xs uppercase tracking-wider px-3.5 py-2 rounded-[4px] border transition-colors duration-200 ${
      active ? 'text-[var(--charcoal)]' : 'text-[var(--concrete)] hover:text-[var(--gold-dark)]'
    }`

  return (
    <div className="flex flex-col gap-6">
      {/* controls */}
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-2">
          <span className="eyebrow text-[var(--gold-dark)]">{t.specs.search}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.specs.searchPlaceholder}
            className="w-full bg-white border px-4 py-3 rounded-[4px] font-body text-[var(--charcoal)] placeholder:text-[var(--concrete)] focus:border-[var(--gold)] outline-none transition-colors"
            style={{ borderColor: 'var(--border-gray)' }}
          />
        </label>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setCat('todos')}
            className={chip(cat === 'todos')}
            style={{ borderColor: cat === 'todos' ? 'var(--gold)' : 'var(--border-gray)', background: cat === 'todos' ? 'var(--sand)' : 'transparent' }}
          >
            {t.specs.allCats}
          </button>
          {CHEM_CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCat(c.id)}
              className={chip(cat === c.id)}
              style={{ borderColor: cat === c.id ? 'var(--gold)' : 'var(--border-gray)', background: cat === c.id ? 'var(--sand)' : 'transparent' }}
            >
              {lang === 'es' ? c.es : c.en}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3">
          <p className="font-mono text-xs text-[var(--concrete)]">{t.specs.conditions}</p>
          <button
            type="button"
            onClick={() => setAsTable((v) => !v)}
            className="font-head font-semibold uppercase tracking-wide text-sm text-[var(--gold-dark)] underline decoration-[var(--gold)] underline-offset-4"
          >
            {asTable ? t.specs.viewCards : t.specs.viewTable}
          </button>
        </div>
      </div>

      {/* results */}
      {results.length === 0 ? (
        <p className="py-12 text-center text-[var(--concrete)] font-mono">{t.specs.noResults}</p>
      ) : asTable ? (
        <div className="overflow-x-auto border rounded-[4px]" style={{ borderColor: 'var(--border-gray)' }}>
          <table className="w-full border-collapse text-sm min-w-[560px]">
            <thead>
              <tr style={{ background: 'var(--charcoal)' }} className="text-left">
                <th className="p-3 font-mono uppercase text-xs tracking-wider text-[var(--gold)]">{t.specs.substance}</th>
                <th className="p-3 font-mono uppercase text-xs tracking-wider text-[var(--gold)]">{t.specs.rows.inmersion}</th>
                <th className="p-3 font-mono uppercase text-xs tracking-wider text-[var(--gold)]">{t.specs.rows.prolongado}</th>
                <th className="p-3 font-mono uppercase text-xs tracking-wider text-[var(--gold)]">{t.specs.rows.goteo}</th>
              </tr>
            </thead>
            <tbody>
              {results.map((c, i) => (
                <tr key={c.es} style={{ background: i % 2 ? 'white' : 'var(--epoxy-white)' }}>
                  <td className="p-3 font-medium text-[var(--charcoal)]">{c[lang]}</td>
                  {c.r.map((ok, j) => (
                    <td key={j} className="p-3">
                      <Indicator ok={ok} labels={{ resists: t.specs.resists, not: t.specs.notResists }} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => (
            <ChemCard key={c.es} chem={c} />
          ))}
        </div>
      )}
    </div>
  )
}
