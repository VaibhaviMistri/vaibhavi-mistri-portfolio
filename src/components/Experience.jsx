import useReveal from '../hooks/useReveal'

const EXP = [
  {
    date: '2026', badge: 'Freelance 🇨🇦', bc: '#4ade80',
    role: 'Freelance Web Developer',
    company: 'Remote · Ottawa, Canada',
    desc: 'Delivered stretchandsmile.ca — a production website for an in-home physiotherapy clinic. Responsive, fast, and serving real clients. Private codebase.',
    link: 'https://stretchandsmile.ca',
    linkLabel: '↗ stretchandsmile.ca',
  },
  {
    date: 'Aug 2024 – Feb 2025', badge: 'Work', bc: '#f97316',
    role: 'Technical Support Engineer',
    company: 'WPG Consulting Pvt. Ltd. · Ahmedabad',
    desc: 'Diagnosed and resolved technical issues, collaborated with engineering teams, and developed a deep understanding of software systems from the customer perspective.',
  },
  {
    date: '2024', badge: 'Internship', bc: '#60a5fa',
    role: 'Full-Stack Developer Intern',
    company: 'WPG Technologies Pvt. Ltd. · Ahmedabad',
    desc: 'Built a production Employee Management System with shift tracking, break monitoring, task scheduling, and Google OAuth 2.0 authentication. Stack: Node.js, HTML, CSS.',
  },
  {
    date: '2021 – 2024', badge: 'Education', bc: '#a78bfa',
    role: 'Bachelor of Computer Science',
    company: 'Pandit Deendayal Energy University · Gandhinagar',
    desc: 'CPI 8.94. Software development, data structures, web tech. Completed Namaste React and Namaste Node alongside the degree.',
  },
  {
    date: '2018 – 2021', badge: 'Education', bc: '#a78bfa',
    role: 'Diploma in Computer Engineering',
    company: 'V.P.M.P. Polytechnic (GTU) · Gandhinagar',
    desc: 'CPI 9.96. Strong foundation in computer fundamentals, programming, and engineering. Consistently top-performing student.',
  },
]

function Item({ e, i, isLast }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal d${(i % 4) + 1} tl-item`}>

      {/* ── LEFT: date (hidden on mobile) ── */}
      <div className="tl-date">{e.date}</div>

      {/* ── MIDDLE: dot + vertical line ── */}
      <div className="tl-spine">
        <div className="tl-dot" style={{
          border: `2px solid ${e.bc}`,
          boxShadow: `0 0 12px ${e.bc}40`,
        }} />
        {!isLast && <div className="tl-line" />}
      </div>

      {/* ── RIGHT: card ── */}
      <div className="tl-card"
        onMouseEnter={x => { x.currentTarget.style.borderColor = `${e.bc}55`; x.currentTarget.style.transform = 'translateX(4px)' }}
        onMouseLeave={x => { x.currentTarget.style.borderColor = 'var(--border)'; x.currentTarget.style.transform = 'translateX(0)' }}
      >
        {/* Mobile-only date pill */}
        <span className="tl-date-mobile">{e.date}</span>

        <span className="tl-badge" style={{ background: `${e.bc}18`, color: e.bc }}>
          {e.badge}
        </span>
        <h3 className="tl-role">{e.role}</h3>
        <p className="tl-company">{e.company}</p>
        <p className="tl-desc">{e.desc}</p>
        {e.link && (
          <a
            href={e.link} target="_blank" rel="noreferrer"
            className="tl-link"
            onMouseEnter={x => x.currentTarget.style.opacity = '.65'}
            onMouseLeave={x => x.currentTarget.style.opacity = '1'}
          >{e.linkLabel}</a>
        )}
      </div>

      <style>{`
        /* ── TIMELINE ITEM ── */
        .tl-item {
          display: grid;
          grid-template-columns: 120px 28px 1fr;
          grid-template-rows: auto 1fr;
          column-gap: 1.25rem;
          padding-bottom: 2.5rem;
          align-items: start;
        }

        /* ── DATE (desktop) ── */
        .tl-date {
          grid-column: 1;
          grid-row: 1;
          text-align: right;
          padding-top: 3px;
          font-family: var(--mono);
          font-size: .67rem;
          color: var(--text3);
          line-height: 1.5;
        }

        /* ── SPINE (dot + line) ── */
        .tl-spine {
          grid-column: 2;
          grid-row: 1 / span 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tl-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--bg2);
          flex-shrink: 0;
          margin-top: 3px;
          position: relative;
          z-index: 1;
          transition: background .2s;
        }
        .tl-line {
          flex: 1;
          width: 1px;
          background: var(--border);
          margin-top: 6px;
          min-height: 40px;
        }

        /* ── CARD ── */
        .tl-card {
          grid-column: 3;
          grid-row: 1;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: var(--r);
          padding: 1.1rem 1.4rem;
          transition: border-color .2s, transform .2s;
        }
        .tl-date-mobile {
          display: none;
        }
        .tl-badge {
          font-family: var(--mono);
          font-size: .62rem;
          padding: .18rem .55rem;
          border-radius: 4px;
          display: inline-block;
          margin-bottom: .55rem;
        }
        .tl-role {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: .2rem;
        }
        .tl-company {
          font-family: var(--mono);
          font-size: .7rem;
          color: var(--accent);
          margin-bottom: .55rem;
        }
        .tl-desc {
          font-size: .875rem;
          color: var(--text2);
          line-height: 1.65;
          font-weight: 300;
        }
        .tl-link {
          display: inline-flex;
          align-items: center;
          gap: .3rem;
          font-family: var(--mono);
          font-size: .7rem;
          color: #4ade80;
          margin-top: .55rem;
          transition: opacity .2s;
        }

        /* ══════════════════════════════
           MOBILE — ≤ 600px
        ══════════════════════════════ */
        @media (max-width: 600px) {
          .tl-item {
            /* 2-col: spine | card  (date hidden) */
            grid-template-columns: 28px 1fr;
            column-gap: 1rem;
          }
          .tl-date {
            display: none;
          }
          .tl-spine {
            grid-column: 1;
          }
          .tl-card {
            grid-column: 2;
          }
          /* Show date inside the card on mobile */
          .tl-date-mobile {
            display: block;
            font-family: var(--mono);
            font-size: .62rem;
            color: var(--text3);
            margin-bottom: .4rem;
          }
        }

        /* ══════════════════════════════
           TABLET — 601–860px
        ══════════════════════════════ */
        @media (min-width: 601px) and (max-width: 860px) {
          .tl-item {
            grid-template-columns: 90px 28px 1fr;
            column-gap: 1rem;
          }
          .tl-date {
            font-size: .62rem;
          }
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
          <p className="tag">// experience & education</p>
          <h2 className="h2">My journey.</h2>
        </div>
        <div style={{ maxWidth: 800 }}>
          {EXP.map((e, i) => (
            <Item key={i} e={e} i={i} isLast={i === EXP.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
