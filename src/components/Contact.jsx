import { useState } from 'react'
import useReveal from '../hooks/useReveal'

const SOCIALS = [
  {icon:'✉',label:'Email',   val:'vaibhavimistri11@gmail.com', href:'mailto:vaibhavimistri11@gmail.com'},
  {icon:'📱',label:'Phone',  val:'+91 9924437222',             href:'tel:+919924437222'},
  {icon:'in',label:'LinkedIn',val:'linkedin.com/in/vaibhavimistri', href:'https://linkedin.com/in/vaibhavimistri'},
  {icon:'⌥', label:'GitHub', val:'github.com/vaibhavimistri',  href:'https://github.com/vaibhavimistri'},
]

const INPUT = {
  width:'100%', fontFamily:'var(--font)', fontSize:'.92rem',
  padding:'.78rem 1rem', background:'var(--bg3)',
  border:'1px solid var(--border2)', borderRadius:'var(--r)',
  color:'var(--text)', outline:'none', transition:'border-color .2s',
}

export default function Contact() {
  const [f,setF] = useState({name:'',email:'',message:''})
  const [st,setSt] = useState(null)
  const r1=useReveal(), r2=useReveal()

  const ch = e => setF(x=>({...x,[e.target.name]:e.target.value}))
  const sub = e => {
    e.preventDefault()
    if(!f.name||!f.email||!f.message){setSt('err');return}
    const s=encodeURIComponent(`Portfolio Contact from ${f.name}`)
    const b=encodeURIComponent(`Name: ${f.name}\nEmail: ${f.email}\n\nMessage:\n${f.message}`)
    window.location.href=`mailto:vaibhavimistri11@gmail.com?subject=${s}&body=${b}`
    setSt('ok'); setF({name:'',email:'',message:''})
    setTimeout(()=>setSt(null),5000)
  }

  return (
    <section id="contact" className="section" style={{background:'var(--bg2)'}}>
      <div className="container">
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,320px),1fr))',
          gap:'clamp(2.5rem,5vw,5rem)', alignItems:'start',
        }}>

          {/* Left */}
          <div ref={r1} className="reveal">
            <p className="tag">// get in touch</p>
            <h2 className="h2" style={{marginBottom:'1rem'}}>
              Let's build<br/>
              <span style={{
                background:'linear-gradient(135deg,var(--accent),var(--accent2))',
                WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',
              }}>something great.</span>
            </h2>
            <p style={{color:'var(--text2)',fontSize:'.95rem',lineHeight:1.75,marginBottom:'2.5rem',fontWeight:300}}>
              I'm actively looking for full-stack / MERN developer roles.
              Open to startups, product companies, and freelance projects.
            </p>
            <div style={{display:'flex',flexDirection:'column',gap:'.75rem'}}>
              {SOCIALS.map(({icon,label,val,href})=>(
                <a key={label} href={href} target={href.startsWith('http')?'_blank':'_self'} rel="noreferrer"
                  style={{
                    display:'flex',alignItems:'center',gap:'1rem',
                    padding:'.9rem 1.1rem',background:'var(--card)',
                    border:'1px solid var(--border)',borderRadius:'var(--r)',
                    transition:'border-color .2s,transform .2s',
                  }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateX(4px)'}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateX(0)'}}
                >
                  <div style={{
                    width:36,height:36,borderRadius:8,flexShrink:0,
                    background:'rgba(var(--accent-rgb),.1)',color:'var(--accent)',
                    display:'flex',alignItems:'center',justifyContent:'center',
                    fontSize:'.9rem',fontWeight:700,
                  }}>{icon}</div>
                  <div>
                    <div style={{fontSize:'.85rem',fontWeight:600}}>{label}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'.65rem',color:'var(--text2)'}}>{val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div ref={r2} className="reveal d2">
            <form onSubmit={sub} style={{display:'flex',flexDirection:'column',gap:'1.1rem'}}>
              {[
                {id:'name',  label:'Your Name',     type:'text',  ph:'Jane Smith'},
                {id:'email', label:'Email Address', type:'email', ph:'jane@company.com'},
              ].map(({id,label,type,ph})=>(
                <div key={id}>
                  <label style={{display:'block',fontSize:'.8rem',fontWeight:600,color:'var(--text2)',marginBottom:'.4rem'}}>{label}</label>
                  <input type={type} name={id} placeholder={ph} value={f[id]} onChange={ch} required
                    style={INPUT}
                    onFocus={e=>e.target.style.borderColor='var(--accent)'}
                    onBlur={e=>e.target.style.borderColor='var(--border2)'}
                  />
                </div>
              ))}
              <div>
                <label style={{display:'block',fontSize:'.8rem',fontWeight:600,color:'var(--text2)',marginBottom:'.4rem'}}>Message</label>
                <textarea name="message" rows={5} placeholder="Tell me about the role or project..." value={f.message} onChange={ch} required
                  style={{...INPUT,resize:'none'}}
                  onFocus={e=>e.target.style.borderColor='var(--accent)'}
                  onBlur={e=>e.target.style.borderColor='var(--border2)'}
                />
              </div>

              {st==='ok' && <div style={{padding:'.75rem 1rem',background:'rgba(74,222,128,.1)',border:'1px solid rgba(74,222,128,.25)',borderRadius:'var(--r)',color:'#4ade80',fontSize:'.875rem'}}>✓ Email client opening — message ready to send!</div>}
              {st==='err' && <div style={{padding:'.75rem 1rem',background:'rgba(var(--accent-rgb),.1)',border:'1px solid rgba(var(--accent-rgb),.25)',borderRadius:'var(--r)',color:'var(--accent)',fontSize:'.875rem'}}>Please fill in all fields.</div>}

              <button type="submit" style={{
                background:'var(--accent)',color:'#fff',
                border:'2px solid var(--accent)',borderRadius:'var(--r)',
                padding:'.85rem',fontSize:'.95rem',fontWeight:600,
                transition:'all .25s var(--ease)',width:'100%',
              }}
                onMouseEnter={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='var(--accent)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='var(--accent)';e.currentTarget.style.color='#fff'}}
              >Send Message →</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
