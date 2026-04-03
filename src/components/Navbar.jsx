export default function Navbar({ t, lang, setLang }) {
  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '14px 24px',
      borderBottom: '0.5px solid var(--border)',
      background: 'var(--bg)',
      position: 'sticky', top: 0, zIndex: 50,
    }}>
      <span style={{ fontSize: 15, fontWeight: 500 }}>Phetklao</span>

      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <a href="#services" style={{ fontSize: 13, color: 'var(--text2)' }}
          onMouseOver={e => e.target.style.color='var(--text)'}
          onMouseOut={e  => e.target.style.color='var(--text2)'}>
          {t.nav.services}
        </a>
        <a href="#portfolio" style={{ fontSize: 13, color: 'var(--text2)' }}
          onMouseOver={e => e.target.style.color='var(--text)'}
          onMouseOut={e  => e.target.style.color='var(--text2)'}>
          {t.nav.portfolio}
        </a>
        <a href="#contact" style={{ fontSize: 13, color: 'var(--text2)' }}
          onMouseOver={e => e.target.style.color='var(--text)'}
          onMouseOut={e  => e.target.style.color='var(--text2)'}>
          {t.nav.contact}
        </a>

        <div style={{
          display: 'flex',
          background: 'var(--bg2)',
          borderRadius: 8,
          padding: 2,
          border: '0.5px solid var(--border)',
        }}>
          {['th','en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              fontSize: 12, padding: '4px 10px', borderRadius: 6,
              border: lang === l ? '0.5px solid var(--border2)' : 'none',
              background: lang === l ? 'var(--bg)' : 'transparent',
              color: lang === l ? 'var(--text)' : 'var(--text2)',
              fontWeight: lang === l ? 500 : 400,
              transition: 'all 0.15s',
            }}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}