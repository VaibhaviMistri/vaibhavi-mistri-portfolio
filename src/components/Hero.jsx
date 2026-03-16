import { useState, useEffect } from 'react'
import useReveal from '../hooks/useReveal'

const WORDS = ['Full-Stack Developer', 'React Engineer', 'MERN Developer', 'Problem Solver']

export default function Hero() {
  const [idx, setIdx] = useState(0)
  const [txt, setTxt] = useState('')
  const [del, setDel] = useState(false)
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()

  useEffect(() => {
    const w = WORDS[idx]
    let t
    if (!del && txt === w) { t = setTimeout(() => setDel(true), 2000) }
    else if (del && txt === '') { setDel(false); setIdx(i => (i + 1) % WORDS.length) }
    else { t = setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 45 : 85) }
    return () => clearTimeout(t)
  }, [txt, del, idx])

  const dl = () => {
    const a = document.createElement('a')
    a.href = '/Vaibhavi_Mistri_Resume.pdf'
    a.download = 'Vaibhavi_Mistri_Resume.pdf'
    a.click()
  }

  const STATS = [
    { n: '4+', l: 'Projects' },
    { n: '8.94', l: 'BSc CPI' },
    { n: '9.96', l: 'Diploma CPI' },
    { n: 'MERN', l: 'Stack' },
  ]

  return (
    <section id="hero" style={{
      minHeight: '100svh', display: 'flex', alignItems: 'center',
      padding: '6rem 0 4rem', position: 'relative', overflow: 'hidden',
    }}>

      {/* BG grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(var(--border) 1px,transparent 1px),linear-gradient(90deg,var(--border) 1px,transparent 1px)',
        backgroundSize: '56px 56px', zIndex: 0,
      }} />

      {/* Glow blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '-10%', right: '0%',
          width: 'clamp(300px,50vw,600px)', height: 'clamp(300px,50vw,600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(99,102,241,.14) 0%,transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite',
        }} />
        <div style={{
          position: 'absolute', bottom: '5%', left: '-5%',
          width: 'clamp(200px,35vw,400px)', height: 'clamp(200px,35vw,400px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle,rgba(249,115,22,.08) 0%,transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Badge */}
        <div ref={r1} className="d1" style={{
          display: 'inline-flex', alignItems: 'center', gap: '.6rem',
          fontFamily: 'var(--mono)', fontSize: '.72rem', color: 'var(--text2)',
          background: 'var(--card)', border: '1px solid var(--border2)',
          borderRadius: 100, padding: '.38rem 1rem', marginBottom: '2rem',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
          Open to work · Ahmedabad, India
        </div>

        {/* Name + typed */}
        <div ref={r2} className="d2" style={{ marginBottom: '1.75rem' }}>
          <h1 style={{
            fontSize: 'clamp(2.6rem,7vw,5.2rem)',
            fontWeight: 800, lineHeight: 1.05, letterSpacing: '-.04em',
          }}>
            Hi, I'm{' '}
            <span style={{
              background: 'linear-gradient(135deg,var(--accent),var(--accent2))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Vaibhavi Mistri</span>.
            <br />
            <span style={{
              WebkitTextStroke: '2px var(--accent)',
              color: 'transparent',
              fontSize: 'clamp(2rem,5.5vw,4.2rem)',
            }}>
              {txt}<span style={{ animation: 'blink 1s step-end infinite', WebkitTextFillColor: 'var(--accent)', WebkitTextStroke: 0 }}>|</span>
            </span>
          </h1>
        </div>

        {/* Description */}
        <p ref={r3} className="d3" style={{
          fontSize: 'clamp(.95rem,2vw,1.1rem)', color: 'var(--text2)',
          maxWidth: 520, marginBottom: '2.5rem', fontWeight: 300, lineHeight: 1.75,
        }}>
          Full-stack engineer building real-time apps with{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>React</strong>,{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Node.js</strong> &amp;{' '}
          <strong style={{ color: 'var(--text)', fontWeight: 600 }}>MongoDB</strong>.
          From developer networking platforms to AI-powered streaming apps — I ship things that work.
        </p>

        {/* CTAs */}
        <div ref={r4} className="d4" style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem',
        }}>
          <button className="btn btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            See My Work →
          </button>
          <button className="btn btn-outline" onClick={dl}>
            ↓ Download Resume
          </button>
        </div>

        {/* Stats */}
        <div ref={r5} className="d5" style={{
          display: 'flex', alignItems: 'center', gap: 'clamp(1rem,3vw,2.5rem)', flexWrap: 'wrap',
        }}>
          {STATS.map(({ n, l }, i) => (
            <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 'clamp(1rem,3vw,2.5rem)' }}>
              <div>
                <div style={{
                  fontSize: 'clamp(1.3rem,3vw,1.7rem)', fontWeight: 800,
                  color: 'var(--accent)', lineHeight: 1, letterSpacing: '-.03em',
                  fontFamily: 'var(--mono)',
                }}>{n}</div>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: '.62rem',
                  color: 'var(--text3)', textTransform: 'uppercase',
                  letterSpacing: '.12em', marginTop: '.2rem',
                }}>{l}</div>
              </div>
              {i < STATS.length - 1 && <div style={{ width: 1, height: 32, background: 'var(--border2)' }} />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
        fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--text3)',
        textTransform: 'uppercase', letterSpacing: '.15em',
      }}>
        <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom,var(--border2),transparent)', animation: 'slideDrop 1.8s ease-in-out infinite' }} />
        scroll
      </div>
    </section>
  )
}
