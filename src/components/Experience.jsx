import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Vibha Sports',
        duration: 'Dec 2025 – Jan 2026',
        description: 'Developed a production-ready slot booking platform to digitize manual scheduling operations. Implemented an interval-overlap detection algorithm to prevent booking conflicts. Built an admin dashboard for managing bookings and optimized database queries for fast performance.',
        tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB'],
        color: 'from-cyan-400 to-blue-400',
    },
    {
        role: 'Full Stack Developer',
        company: 'Videmy Infotech Pvt Ltd',
        duration: 'Nov 2025 – Dec 2025',
        description: 'Built a corporate web application using React and Next.js. Integrated a B2B inquiry and lead management system with WhatsApp support. Improved UI responsiveness and performance across devices.',
        tech: ['React', 'Next.js', 'MongoDB', 'Tailwind CSS'],
        color: 'from-purple-400 to-pink-400',
    },
];

export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="experience" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">Professional roles and contributions</p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-6">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6 group relative overflow-hidden"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${exp.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl transition-all duration-300"
                                        style={{ background: 'var(--bg-icon)', border: '1px solid var(--border-icon)', color: 'var(--text-accent)' }}>
                                        <FiBriefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold group-hover:text-cyan-500 transition-colors"
                                            style={{ color: 'var(--text-heading)' }}>
                                            {exp.role}
                                        </h3>
                                        <div className="flex items-center gap-2">
                                            <FiMapPin size={12} style={{ color: 'var(--text-accent)', opacity: 0.7 }} />
                                            <span className="text-sm font-medium" style={{ color: 'var(--text-accent)', opacity: 0.7 }}>{exp.company}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-sm flex items-center gap-1.5 font-light mt-2 sm:mt-0"
                                    style={{ color: 'var(--text-faint)' }}>
                                    <FiCalendar size={13} />
                                    {exp.duration}
                                </span>
                            </div>

                            <p className="text-sm leading-relaxed mb-4 font-light"
                                style={{ color: 'var(--text-muted)' }}>
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {exp.tech.map((t) => (
                                    <span key={t} className="text-xs px-3 py-1 rounded-full font-medium bg-white/5 border border-white/10"
                                        style={{ color: 'var(--text-accent)' }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
