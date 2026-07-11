import photo from '../assets/resume_photo.png'

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 40px',
      paddingTop: '80px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        maxWidth: '1000px',
        width: '100%',
      }}>

        {/* Left - Text */}
        <div style={{ flex: 1 }}>
          <p style={{
            color: '#00ffff',
            fontSize: '14px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: '15px'
          }}>
            Hello, World!
          </p>

          <h1 style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '15px'
          }}>
            Vincent<br />
            <span style={{ color: '#00ffff' }}>Evangelista</span>
          </h1>

          <p style={{
            fontSize: '20px',
            color: '#a0a0a0',
            marginBottom: '10px',
            letterSpacing: '1px'
          }}>
            Full Stack Web Developer
          </p>

          <p style={{
            fontSize: '14px',
            color: '#00ffff',
            marginBottom: '30px',
            letterSpacing: '2px'
          }}>
             Level 1 Fresh Grad — Main Quest: First Dev Job
          </p>

          <p style={{
            fontSize: '16px',
            color: '#a0a0a0',
            lineHeight: 1.8,
            marginBottom: '40px',
            maxWidth: '500px'
          }}>
            Building full stack web apps with React, Node.js, and PostgreSQL.
            Currently grinding XP in the real world. 
          </p>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a
              href="#projects"
              style={{
                padding: '12px 30px',
                backgroundColor: '#00ffff',
                color: '#0a0a0f',
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              View Projects
            </a>
            <a
              href="https://github.com/vincentevangelista529"
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '12px 30px',
                backgroundColor: 'transparent',
                color: '#00ffff',
                border: '1px solid #00ffff',
                borderRadius: '5px',
                fontWeight: 'bold',
                fontSize: '14px',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right - Photo */}
        <div style={{
          flex: '0 0 280px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            border: '3px solid #00ffff',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
            overflow: 'hidden',
          }}>
            <img
              src={photo}
              alt="Vincent Evangelista"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero