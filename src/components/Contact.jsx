function Contact() {
  return (
    <section id="contact" style={{
      minHeight: '50vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '80px 40px',
      borderTop: '1px solid rgba(0, 255, 255, 0.1)',
    }}>
      <div style={{ maxWidth: '800px', width: '100%', textAlign: 'center' }}>

        <p style={{
          color: '#00ffff',
          fontSize: '14px',
          letterSpacing: '3px',
          textTransform: 'uppercase',
          marginBottom: '15px'
        }}>
          Contact
        </p>

        <h2 style={{
          fontSize: '36px',
          color: '#ffffff',
          marginBottom: '15px'
        }}>
          Start a New Quest Together 
        </h2>

        <p style={{
          color: '#a0a0a0',
          fontSize: '16px',
          lineHeight: 1.8,
          marginBottom: '50px',
          maxWidth: '500px',
          margin: '0 auto 50px auto'
        }}>
          I'm currently open to work and actively looking for my first dev role.
          Feel free to reach out — let's build something together!
        </p>

        {/* Contact Links */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <a
            href="https://mail.google.com/mail/?view=cm&to=vincentevangelista529@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '14px 35px',
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
            Email Me 📧
          </a>

          <a
            href="https://github.com/vincentevangelista529"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '14px 35px',
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
            GitHub 💻
          </a>

          <a
            href="https://www.linkedin.com/in/vincent-evangelista-b55a263a2/"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: '14px 35px',
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
            LinkedIn 🔗
          </a>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: '1px solid rgba(0, 255, 255, 0.1)',
          paddingTop: '30px',
        }}>
          <p style={{ color: '#444', fontSize: '13px' }}>
            Built with React ⚛️ — Vincent Evangelista © 2026
          </p>
        </div>

      </div>
    </section>
  )
}

export default Contact