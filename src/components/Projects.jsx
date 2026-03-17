import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    id: 1, emoji:'👥', year:'2025',
    grad:'linear-gradient(135deg,#0d0d1f 0%,#c84b2f 100%)',
    title:'devTinder',
    tag:'Developer Networking Platform',
    desc:'Real-time developer networking platform — profile browsing, connection requests, 1:1 live chat via Socket.io, and secure JWT + cookie auth.',
    tech:['React','Node.js','MongoDB','Express','Socket.io','JWT'],
    cats:['all','fullstack','react','node'],
    live: null, github:null,
  },
  {
    id:2, emoji:'🎬', year:'2025',
    grad:'linear-gradient(135deg,#141414 0%,#e50914 100%)',
    title:'NetflixGPT',
    tag:'AI Movie Streaming Clone',
    desc:'Netflix-like app with TMDB API for live movie data and Google Gemini AI for personalised genre recommendations. Firebase auth + Redux state.',
    tech:['React','Redux Toolkit','Firebase','Gemini AI','TMDB API'],
    cats:['all','fullstack','react'],
    live: 'https://netflix-gpt-lyart-ten.vercel.app/', github:'https://github.com/VaibhaviMistri/Netflix-GPT',
  },
  {
    id:3, emoji:'🍔', year:'2025',
    grad:'linear-gradient(135deg,#ff6b35 0%,#f7931e 100%)',
    title:'Swiggy Clone',
    tag:'Food Ordering Web App',
    desc:'Swiggy-like food delivery app, live restaurant listings via Swiggy APIs, cart management, and Razorpay payment gateway integration.',
    tech:['React','Redux Toolkit','Firebase','Razorpay','Swiggy API'],
    cats:['all','fullstack','react'],
    live: null, github:'https://github.com/VaibhaviMistri/Swiggy-clone',
  },
  {
    id: 4, emoji:'👩🏻‍⚕️', year:'2024',
    grad:'linear-gradient(135deg,#063d2e 0%,#10b981 100%)',
    title:'Stretch & Smile',
    tag:'Freelance · In-Home Physiotherapy · Canada 🇨🇦',
    desc:'Production website for an Ottawa-based in-home physiotherapy clinic. Responsive, fast, and live serving real clients in Canada. Private codebase.',
    tech:['HTML','CSS','JavaScript','Responsive Design'],
    cats:['all','freelance'],
    live:'https://stretchandsmile.ca', github:null,
    isLive:true, badge:'🌍 Live in Production',
  },
  {
    id: 5, emoji:'👨🏼‍💻', year:'2024',
    grad:'linear-gradient(135deg,#0f1f3d 0%,#2563eb 100%)',
    title:'Employee Management System',
    tag:'Internship Project · WPG Technologies',
    desc:'Full-stack EMS with shift tracking, break monitoring, and task scheduling. Google OAuth 2.0 authentication for secure access.',
    tech:['Node.js','HTML','CSS','Google OAuth 2.0'],
    cats:['all','fullstack','node'],
    live:null, github: null,
  },
]

const FILTERS = [
  {k:'all',l:'All Projects'},
  {k:'fullstack',l:'Full Stack'},
  {k:'react',l:'React'},
  {k:'node',l:'Node.js'},
  {k:'freelance',l:'Freelance'},
]

function Card({p}) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal" style={{
      background:'var(--card)', border:'1px solid var(--border)',
      borderRadius:'var(--r-lg)', overflow:'hidden',
      display:'flex', flexDirection:'column',
      transition:'transform .3s var(--ease),box-shadow .3s,border-color .3s',
    }}
      onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='var(--shadow)';e.currentTarget.style.borderColor='rgba(var(--accent-rgb),.35)'}}
      onMouseLeave={e=>{e.currentTarget.style.transform='translateY(0)';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='var(--border)'}}
    >
      {/* Thumb */}
      <div style={{height:180,background:p.grad,display:'flex',alignItems:'center',justifyContent:'center',position:'relative',flexShrink:0}}>
        <span style={{fontSize:'3.5rem'}}>{p.emoji}</span>
        <span style={{
          position:'absolute',top:'.85rem',right:'.85rem',
          fontFamily:'var(--mono)',fontSize:'.62rem',
          color:'rgba(255,255,255,.55)',background:'rgba(0,0,0,.35)',
          padding:'.18rem .5rem',borderRadius:4,
        }}>{p.year}</span>
        {p.badge && (
          <span style={{
            position:'absolute',bottom:'.85rem',left:'.85rem',
            fontFamily:'var(--mono)',fontSize:'.62rem',
            color:'#4ade80',background:'rgba(0,0,0,.5)',
            padding:'.18rem .6rem',borderRadius:4,
            border:'1px solid rgba(74,222,128,.3)',
          }}>{p.badge}</span>
        )}
      </div>

      {/* Body */}
      <div style={{padding:'1.5rem',display:'flex',flexDirection:'column',flex:1}}>
        <h3 style={{fontSize:'1.1rem',fontWeight:700,marginBottom:'.2rem'}}>{p.title}</h3>
        <p style={{fontFamily:'var(--mono)',fontSize:'.68rem',color:'var(--accent)',marginBottom:'.75rem'}}>{p.tag}</p>
        <p style={{fontSize:'.875rem',color:'var(--text2)',lineHeight:1.7,fontWeight:300,marginBottom:'1rem',flex:1}}>{p.desc}</p>
        <div style={{display:'flex',flexWrap:'wrap',gap:'.4rem',marginBottom:'1.1rem'}}>
          {p.tech.map(t=>(
            <span key={t} style={{
              fontFamily:'var(--mono)',fontSize:'.63rem',
              padding:'.2rem .55rem',borderRadius:5,
              background:'rgba(var(--accent-rgb),.1)',
              color:'var(--accent)',
              border:'1px solid rgba(var(--accent-rgb),.2)',
            }}>{t}</span>
          ))}
        </div>
        <div style={{display:'flex',gap:'.65rem',flexWrap:'wrap'}}>
          {p.live && (
            <a href={p.live} target="_blank" rel="noreferrer" style={pLink}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.color='#fff'}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='var(--border2)';e.currentTarget.style.color='var(--text)'}}
            >↗ Live Demo</a>
          )}
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer" style={{...pLink,color:'var(--text2)'}}
              onMouseEnter={e=>{e.currentTarget.style.background='var(--bg3)';e.currentTarget.style.color='var(--text)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--text2)'}}
            >⌥ GitHub</a>
          )}
          {!p.github && (
            <span style={{...pLink,color:'var(--text3)',cursor:'default',borderStyle:'dashed'}}>Private Repo</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active,setActive] = useState('all')
  const hRef = useReveal()
  const fRef = useReveal()
  const visible = PROJECTS.filter(p=>p.cats.includes(active))

  return (
    <section id="projects" className="section" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div ref={hRef} className="reveal" style={{marginBottom:'2rem'}}>
          <p className="tag">// projects</p>
          <h2 className="h2">Things I've built.</h2>
        </div>

        {/* Filter bar */}
        <div ref={fRef} className="reveal d1" style={{
          display:'flex', gap:'.5rem', flexWrap:'wrap', marginBottom:'2.5rem',
        }}>
          {FILTERS.map(f=>(
            <button key={f.k} onClick={()=>setActive(f.k)} style={{
              fontFamily:'var(--mono)', fontSize:'.73rem',
              padding:'.42rem 1rem', borderRadius:100,
              border:`1px solid ${active===f.k?'var(--accent)':'var(--border2)'}`,
              background: active===f.k?'var(--accent)':'transparent',
              color: active===f.k?'#fff':'var(--text2)',
              transition:'all .2s', cursor:'pointer',
            }}>{f.l}</button>
          ))}
        </div>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fill,minmax(min(100%,320px),1fr))',
          gap:'1.4rem',
        }}>
          {visible.map(p=><Card key={p.id} p={p}/>)}
        </div>
      </div>
    </section>
  )
}

const pLink = {
  fontSize:'.8rem', fontWeight:600,
  padding:'.4rem .9rem', borderRadius:6,
  border:'1px solid var(--border2)',
  color:'var(--text)', transition:'all .2s',
  display:'inline-block',
}
