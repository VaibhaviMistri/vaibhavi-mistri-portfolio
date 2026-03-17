import useReveal from '../hooks/useReveal'

const WORK = [
  {
    date: '2026',
    badge: 'Freelance 🇨🇦',
    bc: '#4ade80',
    role: 'Freelance Web Developer',
    company: 'Remote · Ahmedabad · India',
    desc: 'Delivered stretchandsmile.ca. A a production website for an in-home physiotherapy clinic. Responsive, fast, and serving real clients. Private codebase.',
    link: 'https://stretchandsmile.ca',
    linkLabel: '↗ stretchandsmile.ca',
  },
  {
    date: 'Aug 2024 – Feb 2025',
    badge: 'Work',
    bc: '#f97316',
    role: 'Technical Support Engineer',
    company: 'WPG Consulting Pvt. Ltd. · Ahmedabad',
    desc: 'Diagnosed and resolved technical issues, collaborated with engineering teams, and developed a deep understanding of software systems from the customer perspective.',
  },
  {
    date: 'Feb 2024 – July 2024',
    badge: 'Internship',
    bc: '#60a5fa',
    role: 'Software Developer Intern',
    company: 'WPG Technologies Pvt. Ltd. · Ahmedabad',
    desc: 'Built a production Employee Management System with shift tracking, break monitoring, task scheduling, and Google OAuth 2.0 authentication. Stack: Node.js, HTML, CSS.',
  },
]

function WorkItem({ e, i, isLast }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal d${(i % 4) + 1} exp-item`}>

      <div className="exp-date">{e.date}</div>

      <div className="exp-spine">
        <div className="exp-dot" style={{
          border: `2px solid ${e.bc}`,
          boxShadow: `0 0 14px ${e.bc}50`,
        }} />
        {!isLast && <div className="exp-line" />}
      </div>

      <div className="exp-card"
        onMouseEnter={x => {
          x.currentTarget.style.borderLeftColor = e.bc
          x.currentTarget.style.transform = 'translateX(5px)'
        }}
        onMouseLeave={x => {
          x.currentTarget.style.borderLeftColor = 'var(--border2)'
          x.currentTarget.style.transform = 'translateX(0)'
        }}
      >
        <span className="exp-date-mobile">{e.date}</span>
        <span className="exp-badge" style={{ background: `${e.bc}18`, color: e.bc }}>{e.badge}</span>
        <h3 className="exp-role">{e.role}</h3>
        <p className="exp-company">{e.company}</p>
        <p className="exp-desc">{e.desc}</p>
        {e.link && (
          <a href={e.link} target="_blank" rel="noreferrer" className="exp-link"
            onMouseEnter={x => x.currentTarget.style.opacity = '.65'}
            onMouseLeave={x => x.currentTarget.style.opacity = '1'}
          >{e.linkLabel}</a>
        )}
      </div>

      <style>{`
        .exp-item {
          display: grid;
          grid-template-columns: 130px 28px 1fr;
          column-gap: 1.25rem;
          padding-bottom: 2.5rem;
          align-items: start;
        }
        .exp-date {
          grid-column: 1; grid-row: 1;
          text-align: right; padding-top: 4px;
          font-family: var(--mono); font-size: .67rem;
          color: var(--text3); line-height: 1.5;
        }
        .exp-spine {
          grid-column: 2; grid-row: 1 / span 2;
          display: flex; flex-direction: column; align-items: center;
        }
        .exp-dot {
          width: 14px; height: 14px; border-radius: 50%;
          background: var(--bg2); flex-shrink: 0;
          margin-top: 3px; position: relative; z-index: 1;
          transition: background .2s;
        }
        .exp-line {
          flex: 1; width: 1px;
          background: var(--border);
          margin-top: 6px; min-height: 40px;
        }
        .exp-card {
          grid-column: 3; grid-row: 1;
          background: var(--card);
          border: 1px solid var(--border);
          border-left: 3px solid var(--border2);
          border-radius: var(--r);
          padding: 1.15rem 1.4rem;
          transition: border-left-color .2s, transform .22s var(--ease);
        }
        .exp-date-mobile { display: none; }
        .exp-badge {
          font-family: var(--mono); font-size: .62rem;
          padding: .18rem .6rem; border-radius: 4px;
          display: inline-block; margin-bottom: .55rem; font-weight: 500;
        }
        .exp-role  { font-size: 1rem; font-weight: 700; margin-bottom: .2rem; }
        .exp-company {
          font-family: var(--mono); font-size: .7rem;
          color: var(--accent); margin-bottom: .6rem;
        }
        .exp-desc  { font-size: .875rem; color: var(--text2); line-height: 1.65; font-weight: 300; }
        .exp-link  {
          display: inline-flex; align-items: center; gap: .3rem;
          font-family: var(--mono); font-size: .7rem;
          color: #4ade80; margin-top: .55rem; transition: opacity .2s;
        }

        @media (max-width: 600px) {
          .exp-item  { grid-template-columns: 28px 1fr; column-gap: 1rem; }
          .exp-date  { display: none; }
          .exp-spine { grid-column: 1; }
          .exp-card  { grid-column: 2; }
          .exp-date-mobile {
            display: block; font-family: var(--mono);
            font-size: .62rem; color: var(--text3); margin-bottom: .4rem;
          }
        }
        @media (min-width: 601px) and (max-width: 860px) {
          .exp-item { grid-template-columns: 90px 28px 1fr; column-gap: 1rem; }
          .exp-date { font-size: .62rem; }
        }
      `}</style>
    </div>
  )
}

export default function Experience() {
  const hRef = useReveal()
  return (
    <section id="experience" className="section">
      <div className="container">
        <div ref={hRef} className="reveal" style={{ marginBottom: '3.5rem' }}>
          <p className="tag">// work experience</p>
          <h2 className="h2">Where I've worked.</h2>
        </div>
        <div style={{ maxWidth: 780 }}>
          {WORK.map((e, i) => (
            <WorkItem key={i} e={e} i={i} isLast={i === WORK.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
