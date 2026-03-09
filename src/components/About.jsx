import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';

const highlights = [
    {
        icon: <FiDatabase size={24} />,
        title: 'Data Analytics',
        description: 'Passionate about transforming raw data into actionable insights using modern analytics tools and techniques.',
    },
    {
        icon: <FiCode size={24} />,
        title: 'Software Development',
        description: 'Building robust, scalable applications with modern web technologies and clean code practices.',
    },
    {
        icon: <FiTrendingUp size={24} />,
        title: 'Machine Learning',
        description: 'Exploring ML algorithms and statistical models to uncover patterns and drive data-driven decisions.',
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
                                a Big Data Analytics student with a deep passion for uncovering insights from data
                                and building impactful software solutions. My journey spans from crafting modern web
                                applications to diving deep into data pipelines and machine learning models.
                            </p>
                            <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed">
                                I thrive at the intersection of data and software engineering, where I combine
                                analytical thinking with hands-on development skills. Whether it&apos;s creating
                                interactive dashboards, optimizing SQL queries, or deploying full-stack applications,
                                I bring curiosity and dedication to every project.
                            </p>
                            <p style={{ color: 'var(--text-muted)' }} className="leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing
                                to open-source projects, and continuously expanding my knowledge in the ever-evolving
                                world of data science and software development.
                            </p>

                            <div className="grid grid-cols-3 gap-4 pt-5 mt-2" style={{ borderTop: '1px solid var(--border-card)' }}>
                                {[
                                    { number: '10+', label: 'Projects' },
                                    { number: '5+', label: 'Certifications' },
                                    { number: '4+', label: 'Tech Stacks' },
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
