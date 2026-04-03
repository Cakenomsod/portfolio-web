const skills = ['React','Python','Firebase','ESP32','Premiere Pro','Photoshop','Nomad Sculpt','Line Bot']

export default function Hero({ t }) {
  return (
    <section style={{ padding: '64px 24px 48px', maxWidth: 760, margin: '0 auto' }}>

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: 'var(--bg2)',
        border: '0.5px solid var(--border)',
        borderRadius: 999, padding: '4px 12px',
        fontSize: 12, color: 'var(--text2)',
        marginBottom: 20,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: '#1D9E75', display: 'inline-block',
        }} />
        {t.hero.badge}
      </div>

      <h1 style={{ fontSize: 36, fontWeight: 500, lineHeight: 1.25, marginBottom: 8 }}>
        {t.hero.greeting}{' '}
        <span style={{ color: 'var(--blue)' }}>{t.hero.name}</span>
      </h1>

      <p style={{
        fontSize: 15, color: 'var(--text2)',
        lineHeight: 1.7, marginBottom: 28,
        maxWidth: 480,
      }}>
        {t.hero.sub}
      </p>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
        <a href="#contact">
          <button className="btn-primary">{t.hero.cta_hire}</button>
        </a>
        <a href="#portfolio">
          <button className="btn-secondary">{t.hero.cta_work}</button>
        </a>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map(s => (
          <span key={s} style={{
            fontSize: 12, padding: '4px 12px',
            borderRadius: 999,
            border: '0.5px solid var(--border)',
            color: 'var(--text2)',
          }}>
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}