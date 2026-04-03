export default function Contact({ t }) {
  return (
    <>
      <div className="divider" />
      <section id="contact" style={{
        background: 'var(--bg2)',
        borderTop: '0.5px solid var(--border)',
        borderBottom: '0.5px solid var(--border)',
        padding: '40px 24px',
      }}>
        <div style={{
          maxWidth: 760, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 20,
        }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>
              {t.contact.heading}
            </h3>
            <p style={{ fontSize: 13, color: 'var(--text2)' }}>
              {t.contact.sub}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { label: t.contact.line,     href: 'https://line.me/ti/p/iIs1_HBp6C' },
              { label: t.contact.facebook, href: 'https://www.facebook.com/phetklao.champarath.2024/' },
              { label: t.contact.phone,    href: 'tel:0808026677' },
            ].map(btn => (
              <a key={btn.label} href={btn.href} target="_blank" rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '8px 16px', borderRadius: 8,
                  border: '0.5px solid var(--border2)',
                  fontSize: 13, color: 'var(--text)',
                  background: 'var(--bg)',
                  transition: 'background 0.15s',
                }}
                onMouseOver={e => e.currentTarget.style.background='var(--bg3)'}
                onMouseOut={e  => e.currentTarget.style.background='var(--bg)'}>
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ padding: '16px 24px', maxWidth: 760, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: 'var(--text3)' }}>{t.footer.copy}</span>
        <a href="/admin" style={{ fontSize: 11, color: 'var(--text3)', opacity: 0.3 }}
          onMouseOver={e => e.currentTarget.style.opacity='1'}
          onMouseOut={e  => e.currentTarget.style.opacity='0.3'}>
          {t.footer.admin}
        </a>
      </footer>
    </>
  )
}