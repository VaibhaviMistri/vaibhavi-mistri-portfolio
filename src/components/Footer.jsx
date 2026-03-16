export default function Footer() {
  return (
    <footer style={{
      background:'var(--bg)', borderTop:'1px solid var(--border)',
      padding:'2.5rem 0',
    }}>
      <div className="container" style={{
        display:'flex', flexDirection:'column',
        alignItems:'center', gap:'.5rem', textAlign:'center',
      }}>
        <span style={{fontSize:'1.35rem',fontWeight:800,letterSpacing:'-.04em'}}>
          VM<span style={{color:'var(--accent)'}}>.</span>
        </span>
        <p style={{fontSize:'.88rem',color:'var(--text2)'}}>
          Vaibhavi Mistri · Full-Stack MERN Developer · Ahmedabad
        </p>
      </div>
    </footer>
  )
}
