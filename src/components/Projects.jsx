import useScrollReveal from '../hooks/useScrollReveal'

function Projects() {
    const [ref, isVisible] = useScrollReveal()

    const projects = [
        {
            title: 'DevJourney',
            description: 'A full stack job application tracker with AI-powered skill-gap analysis. Paste any job posting and get an instant fit score, matched/missing skills, and honest advice via Groq/Llama integration. Currently being containerized with Docker and Kubernetes for cloud deployment.',
            tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Groq AI', 'Docker'],
            live: null,
            github: 'https://github.com/vincentevangelista529/devjourney',
            status: 'In Progress'
        },
        {
            title: 'CSE Reviewer App',
            description: 'A full stack Civil Service Exam reviewer with role-based JWT authentication, an Admin panel with regex-based question importer, and a PostgreSQL database. Deployed on Vercel and Render.',
            tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
            live: 'https://cse-reviewer-forzel.vercel.app',
            github: 'https://github.com/vincentevangelista529',
            status: 'Live'
        },
        {
            title: 'Game Review App',
            description: 'A full stack game review platform integrating the RAWG Video Games API. Features SQL JOINs across multiple tables and client-side routing with React Router.',
            tech: ['React', 'Node.js', 'Express', 'SQLite', 'RAWG API'],
            live: null,
            github: 'https://github.com/vincentevangelista529',
            status: 'GitHub'
        },
        {
            title: 'Study EXP Tracker',
            description: 'A gamification app where studying earns experience points across three tracks: Developer, Gamer, and Anime. Features JWT auth, bcrypt, leveling system, and EXP progress bars.',
            tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
            live: null,
            github: 'https://github.com/vincentevangelista529/study-tracker-backend',
            status: 'Completed'
        },
        {
            title: 'Trash to Charge',
            description: 'Capstone project: a hardware system using Arduino (C++) that converts plastic bottle deposits into mobile charging time. Includes a web dashboard for monitoring and data analytics.',
            tech: ['Arduino', 'C++', 'PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
            live: null,
            github: null,
            status: 'Capstone'
        },
    ]

    const statusColors = {
        'Live': '#00ffff',
        'GitHub': '#a0a0a0',
        'In Progress': '#ffaa00',
        'Completed': '#00ff88',
        'Capstone': '#aa00ff'
    }

    return (
        <section id="projects" ref={ref} style={{
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
            <div style={{ maxWidth: '900px', width: '100%' }}>

                <p style={{
                    color: '#00ffff',
                    fontSize: '14px',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginBottom: '15px'
                }}>
                    Projects
                </p>

                <h2 style={{
                    fontSize: '36px',
                    color: '#ffffff',
                    marginBottom: '10px'
                }}>
                    Quest Log
                </h2>

                <p style={{
                    color: '#a0a0a0',
                    marginBottom: '40px',
                    fontSize: '15px'
                }}>
                    Projects I've built on my journey so far.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '20px'
                }}>
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            style={{
                                padding: '25px',
                                border: '1px solid rgba(0, 255, 255, 0.2)',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(0, 255, 255, 0.03)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                opacity: isVisible ? 1 : 0,
                                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s, opacity 0.7s ease',
                                transitionDelay: isVisible ? `${i * 0.08}s` : '0s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#00ffff'
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 255, 255, 0.15)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'rgba(0, 255, 255, 0.2)'
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h3 style={{ color: '#ffffff', fontSize: '17px' }}>
                                    {project.title}
                                </h3>
                                <span style={{
                                    fontSize: '11px',
                                    padding: '3px 10px',
                                    borderRadius: '20px',
                                    border: '1px solid ' + statusColors[project.status],
                                    color: statusColors[project.status],
                                    letterSpacing: '1px'
                                }}>
                                    {project.status}
                                </span>
                            </div>

                            <p style={{ color: '#a0a0a0', fontSize: '14px', lineHeight: 1.7 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {project.tech.map(t => (
                                    <span
                                        key={t}
                                        style={{
                                            fontSize: '11px',
                                            padding: '3px 10px',
                                            borderRadius: '20px',
                                            backgroundColor: 'rgba(0, 255, 255, 0.1)',
                                            color: '#00ffff',
                                            letterSpacing: '1px'
                                        }}
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div style={{ display: 'flex', gap: '15px', marginTop: 'auto' }}>
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: '#00ffff',
                                            fontSize: '13px',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid #00ffff',
                                            paddingBottom: '2px'
                                        }}
                                    >
                                        Live Demo(but free database server expired) ↗
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        style={{
                                            color: '#a0a0a0',
                                            fontSize: '13px',
                                            textDecoration: 'none',
                                            borderBottom: '1px solid #a0a0a0',
                                            paddingBottom: '2px'
                                        }}
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Projects