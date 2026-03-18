import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const filters = [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend' },
    { id: 'ml', label: 'ML / AI' },
];

const projects = [
    {
        title: 'Flash Sale System',
        description: 'Built a high-concurrency flash sale system capable of handling thousands of simultaneous users. Prevented inventory overselling using Redis-based distributed locking and atomic database transactions. Designed scalable REST APIs optimized for high traffic and ensured system reliability under heavy load.',
        tech: ['Go', 'Redis', 'PostgreSQL', 'Next.js', 'Tailwind CSS'],
        github: 'https://github.com/Balaji-kvb',
        demo: '#',
        featured: true,
        category: 'backend',
    },
    {
        title: 'Employee Salary Prediction',
        description: 'Developed a Machine Learning-based web application using Streamlit to predict employee salaries based on experience, education, and role. Trained a Linear Regression model and deployed the full pipeline including model training, UI development, and cloud deployment.',
        tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas', 'NumPy'],
        github: 'https://github.com/Balaji-kvb/Employee-Salary-Prediction',
        demo: 'https://employee-salary-prediction-venkatabalaji.streamlit.app',
        featured: true,
        category: 'ml',
    },
    {
        title: 'Sports Slot Booking Platform',
        description: 'Developed a real-world production booking platform to digitize sports slot reservations. Implemented conflict detection logic to prevent overlapping bookings and built an admin dashboard for management.',
        tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
        github: 'https://github.com/Balaji-kvb',
        demo: 'https://vibhasports.com/',
        featured: true,
        category: 'fullstack',
    },
    {
        title: 'Videmy EdTech Platform',
        description: 'Built a scalable corporate web platform with B2B inquiry system and WhatsApp integration. Improved UI performance and responsiveness across devices.',
        tech: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        github: 'https://github.com/Balaji-kvb',
        demo: 'https://www.videmy.org/',
        featured: true,
        category: 'fullstack',
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
