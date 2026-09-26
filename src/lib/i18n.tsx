import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

/* Central UI-string dictionary. Structured content (services, chemicals,
   projects, specs) lives in data.ts with its own es/en fields. */
const es = {
    nav: {
      inicio: 'Inicio',
      soluciones: 'Soluciones',
      especificaciones: 'Especificaciones',
      proyectos: 'Proyectos',
      contacto: 'Contacto',
      cotizar: 'Cotizar',
    },
    brand: { tagline: 'Servicios Integrales' },
    logoAlt: 'Logotipo de Epóxicos LAI Servicios Integrales',
    wa: {
      float: 'Escríbanos por WhatsApp',
      generic: 'Hola, me interesa una cotización de piso epóxico.',
    },
    home: {
      eyebrow: 'Pisos y recubrimientos de grado sanitario',
      h1: 'Pisos epóxicos para plantas que no pueden fallar una auditoría',
      sub: 'Autonivelante, curva sanitaria y acabados para la industria farmacéutica, alimentaria y de manufactura.',
      ctaQuote: 'Solicitar cotización',
      ctaSolutions: 'Ver soluciones',
      heroAlt: 'Piso epóxico autonivelante con acabado espejo en una planta industrial',
      clients: 'Han confiado en nosotros',
      solEyebrow: 'Soluciones',
      solTitle: 'Un sistema para cada área',
      solAll: 'Ver los 8 sistemas',
      dataTitle: 'Desempeño verificable',
      dataEyebrow: 'Datos técnicos',
      whyEyebrow: 'Por qué LAI',
      whyTitle: 'Ingeniería, no promesas',
      why: [
        { t: 'Empresa 100 % mexicana', d: 'Fabricación y aplicación nacional, con respuesta directa y sin intermediarios.' },
        { t: 'Garantía por escrito', d: 'Un año contra defectos de aplicación y vida útil de 10 años con mantenimiento.' },
        { t: 'Color a elección del cliente', d: 'Acabado autonivelante o espejo en el tono que su especificación requiera.' },
      ],
      ctaBandTitle: '¿Su piso resiste lo que se derrama en su planta?',
      ctaBandText: 'Consulte más de 45 sustancias en nuestra tabla de resistencia química.',
      ctaBandBtn: 'Consultar tabla',
    },
    stats: [
      { value: 11000, suffix: '', prefix: '', unit: 'PSI', label: 'Resistencia a la compresión' },
      { value: 60, suffix: '', prefix: '', unit: '°C', label: 'Exposición continua' },
      { value: 10, suffix: '', prefix: '', unit: 'años', label: 'Vida útil con mantenimiento' },
      { value: 0, text: 'Autoext.', unit: '', label: 'Inflamabilidad ASTM D-35' },
    ],
    solutions: {
      eyebrow: 'Soluciones',
      h1: 'Soluciones',
      intro: 'Ocho sistemas epóxicos de grado sanitario e industrial. Cada área de su planta exige una respuesta distinta: seleccione el sistema y cotícelo directo por WhatsApp.',
      count: '8 sistemas',
      detail: 'Ver detalle',
      sector: 'Sector',
      quoteThis: 'Cotizar este sistema',
      gallery: 'Galería',
    },
    specs: {
      h1: 'Especificaciones técnicas',
      sub: 'Datos de desempeño del sistema epóxico autonivelante.',
      tableTitle: 'Tabla de desempeño',
      tableEyebrow: 'Ficha técnica',
      property: 'Propiedad',
      standard: 'Norma',
      value: 'Valor',
      finderEyebrow: 'Diferenciador',
      finderTitle: 'Resistencia química',
      finderSub: 'Busque una sustancia y confirme el comportamiento del sistema en tres condiciones de exposición.',
      search: 'Buscar sustancia',
      searchPlaceholder: 'p. ej. ácido cítrico, cerveza, sosa cáustica…',
      viewTable: 'Ver como tabla',
      viewCards: 'Ver como tarjetas',
      conditions: 'Resistencias químicas a 20 °C.',
      resists: 'Resiste',
      notResists: 'No resiste',
      noResults: 'No se encontraron sustancias con ese criterio.',
      rows: {
        inmersion: 'Inmersión permanente',
        prolongado: 'Escurrimiento prolongado',
        goteo: 'Escurrimiento temporal o goteo',
      },
      substance: 'Sustancia',
      ctaTitle: '¿Necesita la ficha técnica completa?',
      ctaBtn: 'Solicitar ficha por WhatsApp',
      allCats: 'Todas',
    },
    projects: {
      h1: 'Proyectos',
      sub: 'Instalaciones en plantas farmacéuticas, alimentarias, logísticas e industria pesada.',
      beforeAfter: 'Antes y después',
      beforeAfterSub: 'Deslice para comparar la superficie de concreto original contra el sistema epóxico terminado.',
      before: 'Antes',
      after: 'Después',
      dragHint: 'Arrastre para comparar',
      lightboxPrev: 'Anterior',
      lightboxNext: 'Siguiente',
      lightboxClose: 'Cerrar',
    },
    contact: {
      h1: 'Hablemos de su proyecto',
      sub: 'Cotizamos por WhatsApp de forma rápida y directa.',
      cardEyebrow: 'Canal directo',
      cardTitle: 'Escríbanos por WhatsApp',
      cardNumber: '712 178 5347',
      cardBtn: 'Iniciar conversación',
      prepTitle: 'Para agilizar su cotización, compártanos:',
      prep: ['Tipo de área', 'Metros cuadrados aproximados', 'Ciudad', 'Fotos del piso actual'],
      infoTitle: 'Otros canales',
      email: 'Correo',
      facebook: 'Facebook',
      coverage: 'Cobertura',
      coverageVal: 'Nacional — todo México',
    },
    footer: {
      identity: 'Identidad de marca',
      identityText: 'Pisos y recubrimientos epóxicos de grado sanitario e industrial. Empresa 100 % mexicana.',
      nav: 'Navegación',
      info: 'Información',
      follow: 'Síguenos',
      rights: '© 2026 Epóxicos LAI Servicios Integrales. Todos los derechos reservados.',
    },
}

const en: typeof es = {
    nav: {
      inicio: 'Home',
      soluciones: 'Solutions',
      especificaciones: 'Specifications',
      proyectos: 'Projects',
      contacto: 'Contact',
      cotizar: 'Get a quote',
    },
    brand: { tagline: 'Integrated Services' },
    logoAlt: 'Epóxicos LAI Servicios Integrales logo',
    wa: {
      float: 'Message us on WhatsApp',
      generic: 'Hello, I am interested in a quote for an epoxy floor.',
    },
    home: {
      eyebrow: 'Sanitary-grade floors and coatings',
      h1: 'Epoxy floors for plants that cannot fail an audit',
      sub: 'Self-leveling, sanitary coving and finishes for the pharmaceutical, food and manufacturing industries.',
      ctaQuote: 'Request a quote',
      ctaSolutions: 'View solutions',
      heroAlt: 'Self-leveling epoxy floor with a mirror finish in an industrial plant',
      clients: 'Trusted by',
      solEyebrow: 'Solutions',
      solTitle: 'A system for every area',
      solAll: 'View all 8 systems',
      dataTitle: 'Verifiable performance',
      dataEyebrow: 'Technical data',
      whyEyebrow: 'Why LAI',
      whyTitle: 'Engineering, not promises',
      why: [
        { t: '100 % Mexican company', d: 'National manufacturing and application, with direct response and no intermediaries.' },
        { t: 'Written warranty', d: 'One year against application defects and a 10-year service life with maintenance.' },
        { t: 'Client-chosen color', d: 'Self-leveling or mirror finish in whatever tone your specification requires.' },
      ],
      ctaBandTitle: 'Does your floor resist what spills in your plant?',
      ctaBandText: 'Check more than 45 substances in our chemical resistance table.',
      ctaBandBtn: 'Open the table',
    },
    stats: [
      { value: 11000, suffix: '', prefix: '', unit: 'PSI', label: 'Compressive strength' },
      { value: 60, suffix: '', prefix: '', unit: '°C', label: 'Continuous exposure' },
      { value: 10, suffix: '', prefix: '', unit: 'years', label: 'Service life with maintenance' },
      { value: 0, text: 'Self-ext.', unit: '', label: 'Flammability ASTM D-35' },
    ],
    solutions: {
      eyebrow: 'Solutions',
      h1: 'Solutions',
      intro: 'Eight sanitary and industrial-grade epoxy systems. Each area of your plant demands a different answer: pick the system and quote it directly on WhatsApp.',
      count: '8 systems',
      detail: 'View detail',
      sector: 'Sector',
      quoteThis: 'Quote this system',
      gallery: 'Gallery',
    },
    specs: {
      h1: 'Technical specifications',
      sub: 'Performance data for the self-leveling epoxy system.',
      tableTitle: 'Performance table',
      tableEyebrow: 'Data sheet',
      property: 'Property',
      standard: 'Standard',
      value: 'Value',
      finderEyebrow: 'Differentiator',
      finderTitle: 'Chemical resistance',
      finderSub: 'Search for a substance and confirm how the system behaves under three exposure conditions.',
      search: 'Search substance',
      searchPlaceholder: 'e.g. citric acid, beer, caustic soda…',
      viewTable: 'View as table',
      viewCards: 'View as cards',
      conditions: 'Chemical resistances at 20 °C.',
      resists: 'Resists',
      notResists: 'Does not resist',
      noResults: 'No substances found for that criteria.',
      rows: {
        inmersion: 'Permanent immersion',
        prolongado: 'Prolonged runoff',
        goteo: 'Temporary runoff or dripping',
      },
      substance: 'Substance',
      ctaTitle: 'Need the full data sheet?',
      ctaBtn: 'Request data sheet on WhatsApp',
      allCats: 'All',
    },
    projects: {
      h1: 'Projects',
      sub: 'Installations in pharmaceutical, food, logistics and heavy-industry plants.',
      beforeAfter: 'Before and after',
      beforeAfterSub: 'Slide to compare the original concrete surface against the finished epoxy system.',
      before: 'Before',
      after: 'After',
      dragHint: 'Drag to compare',
      lightboxPrev: 'Previous',
      lightboxNext: 'Next',
      lightboxClose: 'Close',
    },
    contact: {
      h1: 'Let’s talk about your project',
      sub: 'We quote over WhatsApp, fast and direct.',
      cardEyebrow: 'Direct channel',
      cardTitle: 'Message us on WhatsApp',
      cardNumber: '712 178 5347',
      cardBtn: 'Start a conversation',
      prepTitle: 'To speed up your quote, share with us:',
      prep: ['Type of area', 'Approximate square meters', 'City', 'Photos of the current floor'],
      infoTitle: 'Other channels',
      email: 'Email',
      facebook: 'Facebook',
      coverage: 'Coverage',
      coverageVal: 'Nationwide — all of Mexico',
    },
    footer: {
      identity: 'Brand identity',
      identityText: 'Sanitary and industrial-grade epoxy floors and coatings. A 100 % Mexican company.',
      nav: 'Navigation',
      info: 'Information',
      follow: 'Follow us',
      rights: '© 2026 Epóxicos LAI Servicios Integrales. All rights reserved.',
    },
}

export const translations = { es, en }

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: typeof es }
const LangContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'es'
    return (localStorage.getItem('lai-lang') as Lang) || 'es'
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('lai-lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}

/* WhatsApp helper — always new tab, prefilled localized message. */
export const WA_NUMBER = '527121785347'
export function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}
