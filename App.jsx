import { useState } from 'react'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact  from './components/Contact'
import th from './i18n/th.json'
import en from './i18n/en.json'

const translations = { th, en }

export default function App() {
  const [lang, setLang] = useState('th')
  const t = translations[lang]

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t} />
        <div className="divider" />
        <Services t={t} />
        <div className="divider" />
        <Portfolio t={t} />
        <Contact t={t} />
      </main>
    </>
  )
}