import useReveal from '../hooks/useReveal'

const EDU = [
  {
    icon: '🎓',
    degree: 'Bachelor of Computer Science',
    school: 'Pandit Deendayal Energy University',
    location: 'Gandhinagar, Gujarat',
    period: '2021 – 2024',
    cpi: '8.94',
    tags: ['React', 'Node.js', 'DBMS', 'Data Structures', 'Web Technologies'],
    color: '#a78bfa',
    colorDim: 'rgba(167,139,250,0.1)',
    colorBorder: 'rgba(167,139,250,0.25)',
  },
  {
    icon: '📜',
    degree: 'Diploma in Computer Engineering',
    school: 'V.P.M.P. Polytechnic (GTU)',
    location: 'Gandhinagar, Gujarat',
    period: '2018 – 2021',
    cpi: '9.96',
    tags: ['Programming Fundamentals', 'Computer Architecture', 'Engineering Principles'],
    color: '#38bdf8',
    colorDim: 'rgba(56,189,248,0.1)',
    colorBorder: 'rgba(56,189,248,0.25)',
  },
]

function EduCard({ e, delay }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal d${delay}`} style={{
      background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 'var(--r-lg)', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      transition: 'border-color .25s, transform .25s var(--ease), box-shadow .25s',
    }}
      onMouseEnter={x => {
        x.currentTarget.style.borderColor = e.color
        x.currentTarget.style.transform = 'translateY(-4px)'
        x.currentTarget.style.boxShadow = `0 12px 32px ${e.colorDim}`
      }}
      onMouseLeave={x => {
        x.currentTarget.style.borderColor = 'var(--border)'
        x.currentTarget.style.transform = 'translateY(0)'
        x.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${e.color}, transparent)`, flexShrink: 0 }} />

      <div style={{ padding: '1.4rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>

        {/* Icon row + CPI badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '1.5rem' }}>{e.icon}</span>
          {/* Compact CPI pill */}
          <div style={{
            display: 'flex', alignItems: 'baseline', gap: 3,
            background: e.colorDim, border: `1px solid ${e.colorBorder}`,
            borderRadius: 8, padding: '4px 10px',
          }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '1rem', fontWeight: 700, color: e.color, lineHeight: 1 }}>{e.cpi}</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.58rem', color: e.color, opacity: .65, textTransform: 'uppercase', letterSpacing: '.06em' }}>/ 10</span>
          </div>
        </div>

        {/* Degree info */}
        <div>
          <h3 style={{ fontSize: '1rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '.3rem' }}>{e.degree}</h3>
          <p style={{ fontFamily: 'var(--mono)', fontSize: '.7rem', color: 'var(--accent)', marginBottom: '.35rem' }}>{e.school}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '.45rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '.62rem', color: 'var(--text3)' }}>{e.location}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--text3)', flexShrink: 0 }} />
            <span style={{
              fontFamily: 'var(--mono)', fontSize: '.62rem',
              padding: '2px 8px', borderRadius: 100,
              background: e.colorDim, color: e.color, border: `1px solid ${e.colorBorder}`,
            }}>{e.period}</span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', marginTop: 'auto', paddingTop: '.25rem' }}>
          {e.tags.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--mono)', fontSize: '.62rem',
              padding: '.2rem .55rem', borderRadius: 5,
              background: 'var(--bg3)', color: 'var(--text2)',
              border: '1px solid var(--border)',
            }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  const hRef = useReveal()
  return (
    <section id="education" className="section" style={{ background: 'var(--bg2)' }}>
      <div className="container">
        <div ref={hRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="tag">// education</p>
          <h2 className="h2">Academic background.</h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.25rem',
          maxWidth: 720,
        }}>
          {EDU.map((e, i) => <EduCard key={i} e={e} delay={i + 1} />)}
        </div>
      </div>
    </section>
  )
}
