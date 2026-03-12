import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const filters = [
    { id: 'all', label: 'All' },
    { id: 'data', label: 'Data' },
    { id: 'web', label: 'Web' },
    { id: 'ml', label: 'ML' },
];

const projects = [
    {
        title: 'InsightFlow Analytics',
        description: 'An end-to-end data analytics web application with modular architecture for data ingestion, processing, and interactive visualization dashboards.',
        tech: ['Python', 'Pandas', 'Streamlit', 'SQL'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
        category: 'data',
    },
    {
        title: 'Real-Time Data Pipeline',
        description: 'Scalable data pipeline for real-time stream processing, built with event-driven architecture and automated ETL workflows.',
        tech: ['Python', 'Docker', 'SQL', 'Linux'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
        category: 'data',
    },
    {
        title: 'Portfolio Website',
        description: 'Modern developer portfolio with dark theme, smooth animations, and responsive design built with React and Tailwind CSS.',
        tech: ['React', 'Tailwind CSS', 'Framer Motion'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
        category: 'web',
    },
    {
        title: 'ML Prediction Dashboard',
        description: 'Interactive machine learning dashboard for visualizing model predictions, feature importance, and performance metrics.',
        tech: ['Python', 'Scikit-learn', 'Power BI'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: true,
        category: 'ml',
    },
    {
        title: 'E-Commerce Analytics',
        description: 'Comprehensive analytics platform for e-commerce data, featuring customer segmentation, sales forecasting, and trend analysis.',
        tech: ['Python', 'NumPy', 'Pandas', 'SQL'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
        category: 'data',
    },
    {
        title: 'Task Management API',
        description: 'RESTful API for task management with authentication, role-based access control, and real-time notifications.',
        tech: ['Node.js', 'Express', 'MongoDB'],
        github: 'https://github.com/kadiribalaji',
        demo: '#',
        featured: false,
        category: 'web',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { isDark } = useTheme();
    const [activeFilter, setActiveFilter] = useState('all');

    const filtered = activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.category === activeFilter);

    return (
        <section id="projects" className="relative" aria-label="Projects">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">A selection of projects I&apos;ve built and contributed to</p>
                </motion.div>

                {/* Filter Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center gap-2 mb-10"
                    role="tablist"
                    aria-label="Project category filters"
                >
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            role="tab"
                            aria-selected={activeFilter === f.id}
                            onClick={() => setActiveFilter(f.id)}
                            className="relative px-5 py-2 text-sm font-medium rounded-xl transition-all duration-300"
                            style={{
                                color: activeFilter === f.id ? 'var(--text-primary)' : 'var(--text-muted)',
                            }}
                        >
                            {activeFilter === f.id && (
                                <motion.span
                                    layoutId="activeFilter"
                                    className="absolute inset-0 rounded-xl"
                                    style={{
                                        background: 'var(--bg-pill)',
                                        border: '1px solid var(--border-pill)',
                                    }}
                                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{f.label}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Project Grid */}
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                                whileHover={{ y: -8 }}
                                className="glass-card p-6 group flex flex-col relative overflow-hidden"
                            >
                                {/* Hover glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(ellipse at 50% 0%, rgba(6,182,212,${isDark ? 0.06 : 0.08}), transparent 70%)`,
                                    }}
                                />

                                <div className="flex items-center justify-between mb-4 relative z-10">
                                    <div className="p-2.5 rounded-xl"
                                        style={{ background: 'var(--bg-icon)', color: 'var(--text-accent)' }}>
                                        <FiFolder size={22} />
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                                            className="transition-colors duration-300 hover:text-cyan-400"
                                            style={{ color: 'var(--text-faint)' }}
                                            aria-label={`GitHub repo for ${project.title}`}
                                        >
                                            <FiGithub size={18} />
                                        </a>
                                        {project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                                className="transition-colors duration-300 hover:text-cyan-400"
                                                style={{ color: 'var(--text-faint)' }}
                                                aria-label={`Demo for ${project.title}`}
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
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
