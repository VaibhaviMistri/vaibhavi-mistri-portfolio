import { useState, useEffect } from 'react'
import { useTheme } from '../App'

const LINKS = ['About','Skills','Projects','Experience','Contact']

export default function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' })
    setOpen(false)
    document.body.style.overflow = ''
  }

  const toggleMenu = () => {
    setOpen(o => { document.body.style.overflow = !o ? 'hidden' : ''; return !o })
  }

  return (
    <>
      <header style={{
        position:'fixed', top:0, left:0, right:0, zIndex:900,
        padding: scrolled ? '.7rem 0' : '1.1rem 0',
        background: scrolled ? 'var(--bg)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition:'all .35s var(--ease)',
      }}>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

          {/* Logo */}
          <button onClick={()=>go('hero')} style={{
            background:'none', border:'none', padding:0,
            fontSize:'1.35rem', fontWeight:800, letterSpacing:'-.04em',
            color:'var(--text)', zIndex:1001,
          }}>
            VM<span style={{color:'var(--accent)'}}>.</span>
          </button>

          {/* Desktop nav */}
          <nav style={{display:'flex', gap:'2rem'}} className="nav-desktop">
            {LINKS.map(l=>(
              <button key={l} onClick={()=>go(l)} style={{
                background:'none', border:'none', padding:'0 .2rem',
                fontSize:'.88rem', fontWeight:500, color:'var(--text2)',
                transition:'color .2s', position:'relative',
              }}
                onMouseEnter={e=>{e.currentTarget.style.color='var(--text)'}}
                onMouseLeave={e=>{e.currentTarget.style.color='var(--text2)'}}
              >{l}</button>
            ))}
          </nav>

          {/* Right controls */}
          <div style={{display:'flex',alignItems:'center',gap:'.6rem', zIndex:1001}}>
            <button onClick={toggle} style={{
              background:'var(--card)', border:'1px solid var(--border2)',
              borderRadius:'var(--r)', padding:'.42rem .7rem',
              fontSize:'1rem', color:'var(--text)',
              transition:'all .2s',
            }}
              onMouseEnter={e=>e.currentTarget.style.borderColor='var(--accent)'}
              onMouseLeave={e=>e.currentTarget.style.borderColor='var(--border2)'}
            >{theme==='dark'?'☀':'☾'}</button>

            {/* Hamburger */}
            <button onClick={toggleMenu} className="nav-ham" style={{
              background:'none', border:'none', padding:'4px',
              display:'none', flexDirection:'column', gap:'5px',
            }}>
              {[0,1,2].map(i=>(
                <span key={i} style={{
                  display:'block', width:22, height:2,
                  background:'var(--text)', borderRadius:2,
                  transition:'all .3s var(--ease)',
                  transform: open
                    ? i===0?'translateY(7px) rotate(45deg)'
                    : i===1?'scaleX(0)'
                    : 'translateY(-7px) rotate(-45deg)'
                    : 'none',
                  opacity: open&&i===1 ? 0 : 1,
                }}/>
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div style={{
        position:'fixed', inset:0, zIndex:800,
        background:'var(--bg)',
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center', gap:'2rem',
        opacity: open?1:0,
        pointerEvents: open?'all':'none',
        transition:'opacity .3s var(--ease)',
      }}>
        {LINKS.map(l=>(
          <button key={l} onClick={()=>go(l)} style={{
            background:'none', border:'none',
            fontSize:'2rem', fontWeight:800,
            color:'var(--text)', letterSpacing:'-.03em',
          }}>{l}</button>
        ))}
        <a href="/Vaibhavi_Mistri_Resume.pdf" download style={{
          marginTop:'1rem', fontFamily:'var(--mono)',
          fontSize:'.85rem', color:'var(--accent)',
          background:'rgba(var(--accent-rgb),.1)',
          border:'1px solid rgba(var(--accent-rgb),.25)',
          borderRadius:'var(--r)', padding:'.6rem 1.4rem',
        }}>↓ Resume</a>
      </div>

      <style>{`
        @media(max-width:768px){
          .nav-desktop{display:none!important}
          .nav-ham{display:flex!important}
        }
      `}</style>
    </>
  )
}
