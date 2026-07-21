import { useState } from 'react'
import photo from '../assets/resume_photo.png'

function Hero() {
    const [isFlipped, setIsFlipped] = useState(false)
    const [heroLoaded, setHeroLoaded] = useState(false)

    useState(() => {
        setTimeout(() => setHeroLoaded(true), 100)
    }, [])

    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 40px',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden',
        }}>

            {/* Floating glow blobs in background */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,255,255,0.15), transparent 70%)',
                animation: 'floatBlob 8s ease-in-out infinite',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute',
                bottom: '15%',
                right: '15%',
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0,255,255,0.1), transparent 70%)',
                animation: 'floatBlob 10s ease-in-out infinite reverse',
                pointerEvents: 'none',
            }} />

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '60px',
                maxWidth: '1000px',
                width: '100%',
                opacity: heroLoaded ? 1 : 0,
                transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease, transform 0.8s ease',
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
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,255,255,0.4)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
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
                                textDecoration: 'none',
                                display: 'inline-block',
                                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-3px)'
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,255,255,0.25)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            GitHub
                        </a>
                    </div>
                </div>

                {/* Right - Flip Card Photo */}
                <div
                    style={{
                        flex: '0 0 280px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        perspective: '1000px',
                    }}
                    onMouseEnter={() => setIsFlipped(true)}
                    onMouseLeave={() => setIsFlipped(false)}
                >
                    <div style={{
                        width: '250px',
                        height: '250px',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                        transition: 'transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1)',
                        cursor: 'pointer',
                        animation: 'pulseGlow 4s ease-in-out infinite',
                        borderRadius: '50%',
                    }}>
                        {/* Front - Photo */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '3px solid #00ffff',
                            overflow: 'hidden',
                            backfaceVisibility: 'hidden',
                        }}>
                            <img
                                src={photo}
                                alt="Vincent Evangelista"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>

                        {/* Back - Stat Card */}
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            border: '3px solid #00ffff',
                            backgroundColor: '#0a0a0f',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '20px',
                            textAlign: 'center',
                        }}>
                            <p style={{ color: '#00ffff', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                Class
                            </p>
                            <p style={{ color: '#ffffff', fontSize: '13px', marginBottom: '14px', fontWeight: 'bold' }}>
                                Full Stack Developer
                            </p>
                            <p style={{ color: '#00ffff', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                Level
                            </p>
                            <p style={{ color: '#ffffff', fontSize: '13px', marginBottom: '14px', fontWeight: 'bold' }}>
                                Fresh Grad — 2026
                            </p>
                            <p style={{ color: '#00ffff', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '8px' }}>
                                Main Quest
                            </p>
                            <p style={{ color: '#ffffff', fontSize: '13px', fontWeight: 'bold' }}>
                                First Dev Job
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero