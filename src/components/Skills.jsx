import useReveal from '../hooks/useReveal'

const CATS = [
  { icon:'⚛️', title:'Frontend', skills:[
    {n:'React',c:'#61dafb'},{n:'Redux Toolkit',c:'#764abc'},{n:'JavaScript ES6+',c:'#f7df1e'},
    {n:'Tailwind CSS',c:'#38bdf8'},{n:'HTML5',c:'#e34f26'},{n:'CSS3',c:'#264de4'},
  ]},
  { icon:'🟢', title:'Backend', skills:[
    {n:'Node.js',c:'#68b844'},{n:'Express.js',c:'#a0a0a0'},{n:'REST APIs',c:'#f97316'},
    {n:'JWT Auth',c:'#f97316'},{n:'Socket.io',c:'#25c2a0'},{n:'Google OAuth 2.0',c:'#4285f4'},
  ]},
  { icon:'🍃', title:'Database', skills:[
    {n:'MongoDB',c:'#00ed64'},{n:'Mongoose',c:'#880000'},{n:'MySQL',c:'#4479a1'},{n:'Firebase',c:'#ffca28'},
  ]},
  { icon:'🛠️', title:'Tools & APIs', skills:[
    {n:'Git & GitHub',c:'#f05032'},{n:'Razorpay',c:'#3395ff'},{n:'TMDB API',c:'#01b4e4'},
    {n:'Gemini AI',c:'#4285f4'},{n:'Postman',c:'#ff6c37'},{n:'Vite',c:'#646cff'},
  ]},
]

function Card({cat,delay}) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal d${delay}`} style={{
      background:'var(--card)', border:'1px solid var(--border)',
      borderRadius:'var(--r-lg)', padding:'1.75rem',
      transition:'border-color .25s,transform .25s',
    }}
      onMouseEnter={e=>{e.currentTarget.style.borderColor='var(--accent)';e.currentTarget.style.transform='translateY(-4px)'}}
      onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--border)';e.currentTarget.style.transform='translateY(0)'}}
    >
      <div style={{display:'flex',alignItems:'center',gap:'.75rem',marginBottom:'1.25rem'}}>
        <span style={{fontSize:'1.5rem'}}>{cat.icon}</span>
        <h3 style={{fontSize:'1rem',fontWeight:700}}>{cat.title}</h3>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'.45rem'}}>
        {cat.skills.map(({n,c})=>(
          <span key={n} style={{
            fontFamily:'var(--mono)', fontSize:'.68rem',
            padding:'.25rem .65rem', borderRadius:6,
            background:`${c}15`, color:c==='#a0a0a0'?'var(--text2)':c,
            border:`1px solid ${c}30`,
            transition:'opacity .2s',
          }}>{n}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const hRef = useReveal()
  return (
    <section id="skills" className="section">
      <div className="container">
        <div ref={hRef} className="reveal" style={{marginBottom:'3.5rem'}}>
          <p className="tag">// technologies</p>
          <h2 className="h2">What I work with.</h2>
        </div>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(min(100%,260px),1fr))',
          gap:'1.25rem',
        }}>
          {CATS.map((c,i)=><Card key={c.title} cat={c} delay={i+1}/>)}
        </div>
      </div>
    </section>
  )
}
