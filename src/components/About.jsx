function About() {
  return (
    <section id="about" style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 40px',
      borderTop: '1px solid rgba(0, 255, 255, 0.1)',
    }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>

        <p style={{
          color: '#00ffff',
          fontSize: '14px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '15px'
        }}>
          About Me
        </p>

        <h2 style={{
          fontSize: '36px',
          color: '#ffffff',
          marginBottom: '30px'
        }}>
          Who am I?
        </h2>

        <p style={{
          fontSize: '17px',
          color: '#a0a0a0',
          lineHeight: 2,
          marginBottom: '30px'
        }}>
          Hey! I'm Vincent, a fresh IT graduate from City of Malabon University 
          who taught himself web development from scratch. I build full stack web 
          apps using React, Node.js, and PostgreSQL — and yes, I do most of my 
          best coding while listening to music. When I'm not coding I'm gaming, 
          watching anime, or preparing for the Civil Service Exam with friends. 
          I'm currently on my first quest — landing my first dev job. 
        </p>

        {/* Quick Info */}
        <div style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          marginTop: '20px'
        }}>
          {[
            { label: 'Degree', value: 'BSIT — City of Malabon University' },
            { label: 'Graduated', value: '2026' },
            { label: 'Location', value: 'Malabon City, Metro Manila' },
            { label: 'Status', value: '🟢 Open to Work' },
          ].map(item => (
            <div key={item.label}>
              <p style={{ color: '#00ffff', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '5px' }}>
                {item.label}
              </p>
              <p style={{ color: '#ffffff', fontSize: '15px' }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About