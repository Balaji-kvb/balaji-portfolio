import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const projects = [
    {
        title: 'InsightFlow Analytics',
        description: 'An end-to-end data analytics web application with modular architecture for data ingestion, processing, and interactive visualization dashboards.',
        tech: ['Python', 'Pandas', 'Streamlit', 'SQL'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
    },
    {
        title: 'Real-Time Data Pipeline',
        description: 'Scalable data pipeline for real-time stream processing, built with event-driven architecture and automated ETL workflows.',
        tech: ['Python', 'Docker', 'SQL', 'Linux'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
    },
    {
        title: 'Portfolio Website',
        description: 'Modern developer portfolio with dark theme, smooth animations, and responsive design built with React and Tailwind CSS.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
    },
    {
        title: 'ML Prediction Dashboard',
        description: 'Interactive machine learning dashboard for visualizing model predictions, feature importance, and performance metrics.',
        tech: ['Python', 'Scikit-learn', 'Power BI'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
    },
    {
        title: 'E-Commerce Analytics',
        description: 'Comprehensive analytics platform for e-commerce data, featuring customer segmentation, sales forecasting, and trend analysis.',
        tech: ['Python', 'NumPy', 'Pandas', 'SQL'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
    },
    {
        title: 'Task Management API',
        description: 'RESTful API for task management with authentication, role-based access control, and real-time notifications.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { isDark } = useTheme();

    return (
        <section id="projects" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">A selection of projects I&apos;ve built and contributed to</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-6 group flex flex-col relative overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
                        >

                            <div className="flex items-center justify-between mb-4 relative z-10">
                                <div
                                    className="p-2.5 rounded-xl"
                                    style={{ background: 'var(--bg-icon)', color: 'var(--text-accent)' }}
                                >
                                    <FiFolder size={22} />
                                </div>
                                <div className="flex items-center gap-3">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                                        className="transition-colors duration-300"
                                        style={{ color: 'var(--text-faint)' }}
                                        onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                        onMouseLeave={e => e.target.style.color = 'var(--text-faint)'}
                                    >
                                        <FiGithub size={18} />
                                    </a>
                                    {project.demo !== '#' && (
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                            className="transition-colors duration-300"
                                            style={{ color: 'var(--text-faint)' }}
                                        >
                                            <FiExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-500 transition-colors relative z-10"
                                style={{ color: 'var(--text-heading)' }}>
                                {project.title}
                            </h3>
                            <p className="text-sm leading-relaxed mb-5 flex-1 relative z-10 font-light"
                                style={{ color: 'var(--text-muted)' }}>
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 relative z-10">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 glass-pill font-medium"
                                        style={{ color: 'var(--text-accent)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {project.featured && (
                                <div className="absolute top-3 right-3 z-10">
                                    <span className="text-[10px] px-2.5 py-1 glass-pill font-semibold uppercase tracking-wider"
                                        style={{ color: 'var(--text-accent)' }}>
                                        Featured
                                    </span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
