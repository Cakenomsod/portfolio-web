import portfolioData from '../data/portfolio.json'

export default function Portfolio({ t }) {
  return (
    <section id="portfolio" style={{ padding: '48px 24px', maxWidth: 760, margin: '0 auto' }}>
      <div className="section-label">{t.sections.portfolio}</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: 10,
      }}>
        {portfolioData.map(item => {
          const pKey = item.titleKey.split('.')[1]
          return (
            <div key={item.id} style={{
              background: 'var(--bg2)',
              border: '0.5px solid var(--border)',
              borderRadius: 12, padding: 16,
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 10 }}>
                <span style={{ fontWeight: 500, fontSize: 14 }}>
                  {t.portfolio[pKey].title}
                </span>
                <span className={`tag tag-${item.tagColor}`}>{item.tag}</span>
              </div>

              <p style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.6, marginBottom: 14 }}>
                {t.portfolio[pKey].desc}
              </p>

              <div style={{ display:'flex', gap: 10 }}>
                {item.demoUrl && (
                  <a href={item.demoUrl} target="_blank" rel="noreferrer"
                    style={{ fontSize: 12, color: 'var(--blue)', fontWeight: 500 }}>
                    {t.portfolio.demo} →
                  </a>
                )}
                <a href={item.githubUrl} target="_blank" rel="noreferrer"
                  style={{ fontSize: 12, color: 'var(--text2)' }}>
                  {t.portfolio.github} →
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}