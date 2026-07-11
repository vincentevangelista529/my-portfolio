function Navbar() {
  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(10, 10, 15, 0.9)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(0, 255, 255, 0.2)',
      zIndex: 1000
    }}>
      
      <div style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#00ffff',
        letterSpacing: '2px'
      }}>
        VE<span style={{ color: '#ffffff' }}>.dev</span>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        {links.map(link => (
          <a
            key={link}
            href={'#' + link.toLowerCase()}
            style={{
              color: '#a0a0a0',
              fontSize: '14px',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = '#00ffff'}
            onMouseLeave={e => e.target.style.color = '#a0a0a0'}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar