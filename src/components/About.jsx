import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const highlights = [
    {
        icon: <FiCode size={24} />,
        title: 'Full Stack Development',
        description: 'Building production-ready web applications with React, Next.js, Node.js, and modern backend technologies.',
    },
    {
        icon: <FiDatabase size={24} />,
        title: 'Distributed Systems',
        description: 'Designing high-concurrency systems with Redis-based locking, atomic transactions, and scalable REST APIs.',
    },
    {
        icon: <FiTrendingUp size={24} />,
        title: 'Performance & Scalability',
        description: 'Optimizing database queries, building microservices, and ensuring system reliability under heavy load.',
    },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="about" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">Get to know who I am and what drives me</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card p-8 space-y-5">
                            <p style={{ color: 'var(--text-secondary)' }} className="leading-relaxed text-lg">
                                I&apos;m <span style={{ color: 'var(--text-accent)' }} className="font-semibold">Kadiri Venkata Balaji</span>,
                                a Big Data Analytics student and Full Stack Developer with experience in building
                                scalable web applications and high-performance backend systems. I specialize in
                                React, Next.js, Node.js, and distributed systems.
                            </p>
                            <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed">
                                I have worked on real-world projects including booking systems and high-concurrency
                                platforms, focusing on performance, scalability, and clean architecture. From
                                designing Redis-based distributed locking to optimizing database queries for fast
                                performance, I bring practical engineering skills to every challenge.
                            </p>
                            <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed">
                                I&apos;m passionate about building software that solves real problems — whether
                                it&apos;s preventing inventory overselling in flash sales or digitizing manual
                                scheduling operations for businesses.
                            </p>

                            <div className="grid grid-cols-3 gap-4 pt-5 mt-2" style={{ borderTop: '1px solid var(--border-card)' }}>
                                {[
                                    { number: '3+', label: 'Projects' },
                                    { number: '4+', label: 'Certifications' },
                                    { number: '2+', label: 'Experiences' },
                                ].map((stat) => (
                                    <div key={stat.label} className="text-center">
                                        <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                                        <div className="text-sm font-light" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-4">
                        {highlights.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: 50 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                                className="glass-card p-6 group"
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className="p-3 rounded-2xl transition-all duration-300"
                                        style={{
                                            background: 'var(--bg-icon)',
                                            border: '1px solid var(--border-icon)',
                                            color: 'var(--text-accent)',
                                        }}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1" style={{ color: 'var(--text-heading)' }}>{item.title}</h3>
                                        <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>{item.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
