import { useEffect, useState } from 'react'
import { LanguageProvider } from './lib/i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { WhatsAppFloat } from './components/WhatsAppFloat'
import { Home } from './pages/Home'
import { Soluciones } from './pages/Soluciones'
import { Especificaciones } from './pages/Especificaciones'
import { Proyectos } from './pages/Proyectos'
import { Contacto } from './pages/Contacto'

export type Route = 'inicio' | 'soluciones' | 'especificaciones' | 'proyectos' | 'contacto'
const ROUTES: Route[] = ['inicio', 'soluciones', 'especificaciones', 'proyectos', 'contacto']

function parseHash(): Route {
  const h = window.location.hash.replace('#', '') as Route
  return ROUTES.includes(h) ? h : 'inicio'
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash)

  const navigate = (r: Route) => {
    window.location.hash = r
    setRoute(r)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <LanguageProvider>
      <Header route={route} navigate={navigate} />
      <main>
        {route === 'inicio' && <Home navigate={navigate} />}
        {route === 'soluciones' && <Soluciones />}
        {route === 'especificaciones' && <Especificaciones />}
        {route === 'proyectos' && <Proyectos />}
        {route === 'contacto' && <Contacto />}
      </main>
      <Footer route={route} navigate={navigate} />
      <WhatsAppFloat />
    </LanguageProvider>
  )
}
