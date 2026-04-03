import { useState } from 'react'
import servicesData from '../data/services.json'

const categoryColor = {
  dev:   { bg: 'var(--blue-bg)',  dot: '#185FA5' },
  video: { bg: '#FAECE7',         dot: '#993C1D' },
  photo: { bg: 'var(--green-bg)', dot: '#3B6D11' },
  model: { bg: '#EEEDFE',         dot: '#534AB7' },
}

function Modal({ service, t, onClose }) {
  const color = categoryColor[service.category]
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 16 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: color.bg,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize: 18,
            }}>
              {service.icon}
            </div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 15 }}>
                {t.services[service.titleKey.split('.')[1]].title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)' }}>
                {t.services[service.titleKey.split('.')[1]].desc}
              </div>
            </div>
          </div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>

        <div style={{ height: '0.5px', background: 'var(--border)', marginBottom: 16 }} />

        <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--text3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 12 }}>
          {t.services.packages_title}
        </div>

        {service.packages.map((pkg, i) => {
          const sKey = service.titleKey.split('.')[1]
          const pKey = `pkg${i+1}`
          return (
            <div key={i} style={{
              padding: '12px 14px', borderRadius: 8,
              border: '0.5px solid var(--border)',
              marginBottom: 8,
              background: i === 1 ? 'var(--bg2)' : 'transparent',
            }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <div style={{ fontWeight: 500, fontSize: 14 }}>
                  {t.services[sKey][pKey].name}
                </div>
                <div style={{ fontWeight: 500, fontSize: 14 }}>
                  {pkg.price === 0 ? t.services.contact_cta : `฿${pkg.price.toLocaleString()}`}
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', marginTop: 2 }}>
                {t.services[sKey][pKey].desc}
              </div>
              <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>
                {pkg.days} {t.services.day}
              </div>
            </div>
          )
        })}

        <a href="#contact" onClick={onClose}>
          <button className="btn-primary" style={{ width:'100%', marginTop: 8, textAlign:'center' }}>
            {t.services.contact_cta}
          </button>
        </a>
      </div>
    </div>
  )
}

export default function Services({ t }) {
  const [selected, setSelected] = useState(null)

  return (
    <section id="services" style={{ padding: '48px 24px', maxWidth: 760, margin: '0 auto' }}>
      <div className="section-label">{t.sections.services}</div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))',
        gap: 10,
      }}>
        {servicesData.map(service => {
          const color = categoryColor[service.category]
          const sKey  = service.titleKey.split('.')[1]
          return (
            <div key={service.id}
              onClick={() => setSelected(service)}
              style={{
                background: 'var(--bg)',
                border: '0.5px solid var(--border)',
                borderRadius: 12, padding: 16,
                cursor: 'pointer',
                transition: 'border-color 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.borderColor='var(--border2)'}
              onMouseOut={e  => e.currentTarget.style.borderColor='var(--border)'}
            >
              <div style={{
                width: 32, height: 32, borderRadius: 8,
                background: color.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 12, fontSize: 15,
              }}>
                {service.icon}
              </div>
              <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 4 }}>
                {t.services[sKey].title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text2)', lineHeight: 1.5, marginBottom: 12 }}>
                {t.services[sKey].desc}
              </div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>
                ฿{service.startPrice.toLocaleString()}{' '}
                <span style={{ fontSize: 11, fontWeight: 400, color: 'var(--text3)' }}>
                  {t.services.from}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {selected && (
        <Modal service={selected} t={t} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}