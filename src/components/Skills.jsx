import useScrollReveal from '../hooks/useScrollReveal'

function Skills() {
    const [ref, isVisible] = useScrollReveal()

    const skills = [
        { name: 'JavaScript', level: 75 },
        { name: 'React.js', level: 70 },
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 70 },
        { name: 'PostgreSQL', level: 65 },
        { name: 'MySQL', level: 65 },
        { name: 'PHP', level: 60 },
        { name: 'HTML5 & CSS3', level: 80 },
        { name: 'Git & GitHub', level: 70 },
        { name: 'REST APIs', level: 70 },
        { name: 'JWT & bcrypt', level: 65 },
        { name: 'WordPress', level: 75 },
    ]

    return (
        <section id="skills" ref={ref} style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '80px 40px',
            borderTop: '1px solid rgba(0, 255, 255, 0.1)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}>
            <div style={{ maxWidth: '800px', width: '100%' }}>

                <p style={{
                    color: '#00ffff',
                    fontSize: '14px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '15px'
                }}>
                    Skills
                </p>

                <h2 style={{
                    fontSize: '36px',
                    color: '#ffffff',
                    marginBottom: '10px'
                }}>
                    Character Stats
                </h2>

                <p style={{
                    color: '#a0a0a0',
                    marginBottom: '40px',
                    fontSize: '15px'
                }}>
                    Current skill levels — still grinding!
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px'
                }}>
                    {skills.map(skill => (
                        <div key={skill.name}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginBottom: '6px'
                            }}>
                                <span style={{ color: '#ffffff', fontSize: '14px' }}>
                                    {skill.name}
                                </span>
                                <span style={{ color: '#00ffff', fontSize: '14px' }}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div style={{
                                backgroundColor: 'rgba(0, 255, 255, 0.1)',
                                borderRadius: '10px',
                                height: '8px',
                                width: '100%'
                            }}>
                                <div style={{
                                    backgroundColor: '#00ffff',
                                    height: '8px',
                                    borderRadius: '10px',
                                    width: isVisible ? skill.level + '%' : '0%',
                                    boxShadow: '0 0 8px rgba(0, 255, 255, 0.5)',
                                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                }} />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Skills