import useReveal from '../hooks/useReveal'

const CARDS=[
  {i:'🎓',t:'BSc Computer Science',s:'PDEU · 2021–2024 · CPI 8.94'},
  {i:'📜',t:'Diploma Engineering',s:'VPMP · 2018–2021 · CPI 9.96'},
  {i:'📍',t:'Ahmedabad, India',s:'Open to remote & on-site'},
  {i:'🚀',t:'Namaste React + Node',s:'In-depth MERN specialization'},
]

export default function About() {
  const r1=useReveal(), r2=useReveal()
  return (
    <section id="about" className="section" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,340px),1fr))',
          gap:'clamp(2rem,5vw,5rem)', alignItems:'start',
        }}>

          {/* Left */}
          <div ref={r1} className="reveal d1">
            <p className="tag">// about me</p>
            <h2 className="h2" style={{marginBottom:'1.75rem'}}>
              More than<br/>just code.
            </h2>
            <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
              {[
                {l:'LinkedIn ↗',h:'https://linkedin.com/in/vaibhavimistri'},
                {l:'GitHub ↗',h:'https://github.com/vaibhavimistri'},
              ].map(({l,h})=>(
                <a key={l} href={h} target="_blank" rel="noreferrer" style={{
                  fontFamily:'var(--mono)', fontSize:'.8rem', color:'var(--accent)',
                  background:'rgba(var(--accent-rgb),.08)',
                  border:'1px solid rgba(var(--accent-rgb),.2)',
                  borderRadius:'var(--r)', padding:'.45rem 1rem',
                  transition:'all .2s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='#fff'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='rgba(var(--accent-rgb),.08)';e.currentTarget.style.color='var(--accent)'}}
                >{l}</a>
              ))}
            </div>
          </div>

          {/* Right */}
          <div ref={r2} className="reveal d2">
            <p style={{color:'var(--text2)',lineHeight:1.85,marginBottom:'1.2rem',fontWeight:300,fontSize:'1rem'}}>
              I'm a Full-Stack Developer from Ahmedabad with a Bachelor's in Computer Science from{' '}
              <strong style={{color:'var(--text)',fontWeight:600}}>Pandit Deendayal Energy University</strong>.
              I build end-to-end web apps, real-time platforms, AI-powered apps, and client websites delivered to production.
            </p>
            <p style={{color:'var(--text2)',lineHeight:1.85,marginBottom:'2rem',fontWeight:300,fontSize:'1rem'}}>
              I've completed deep-dive specializations in <strong style={{color:'var(--text)',fontWeight:600}}>Namaste React</strong> and{' '}
              <strong style={{color:'var(--text)',fontWeight:600}}>Namaste Node</strong>,
              and have shipped a live freelance project for a Canadian client. I care about clean code, thoughtful UX, and actually shipping.
            </p>
            <div style={{
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
              gap:'.75rem',
            }}>
              {CARDS.map(({i,t,s})=>(
                <div key={t} style={{
                  display:'flex', alignItems:'flex-start', gap:'.85rem',
                  padding:'1rem 1.1rem', background:'var(--card)',
                  border:'1px solid var(--border)', borderRadius:'var(--r)',
                  transition:'border-color .2s, transform .2s',
                }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateY(-2px)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)'}}
                >
                  <span style={{fontSize:'1.25rem',flexShrink:0}}>{i}</span>
                  <div>
                    <div style={{fontSize:'.85rem',fontWeight:600,marginBottom:'.15rem'}}>{t}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'.66rem',color:'var(--text2)'}}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
