import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiStar, FiGitBranch, FiActivity } from 'react-icons/fi';

const stats = [
    { icon: <FiGithub size={24} />, value: '30+', label: 'Repositories', color: 'var(--text-accent)' },
    { icon: <FiStar size={24} />, value: '50+', label: 'Stars Earned', color: '#facc15' },
    { icon: <FiGitBranch size={24} />, value: '200+', label: 'Contributions', color: '#34d399' },
    { icon: <FiActivity size={24} />, value: '15+', label: 'Active Projects', color: '#a78bfa' },
];

const topLanguages = [
    { name: 'Python', percentage: 40, color: 'from-blue-500 to-cyan-400' },
    { name: 'JavaScript', percentage: 25, color: 'from-yellow-500 to-amber-400' },
    { name: 'C++', percentage: 15, color: 'from-pink-500 to-rose-400' },
    { name: 'SQL', percentage: 10, color: 'from-green-500 to-emerald-400' },
    { name: 'HTML/CSS', percentage: 10, color: 'from-orange-500 to-amber-400' },
];

export default function GithubStats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="github" className="relative" aria-label="GitHub statistics">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="section-container relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        GitHub <span className="gradient-text">Stats</span>
                    </h2>
                    <p className="section-subtitle">My open-source contributions and coding activity</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 text-center group rounded-xl shadow-lg transition-transform duration-300"
                        >
                            <div className="mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300"
                                style={{ color: stat.color }}>
                                {stat.icon}
                            </div>
                            <div className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-heading)' }}>{stat.value}</div>
                            <div className="text-sm font-light" style={{ color: 'var(--text-faint)' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-heading)' }}>
                            <FiActivity style={{ color: 'var(--text-accent)' }} />
                            Contribution Graph
                        </h3>
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src="https://ghchart.rshah.org/06b6d4/Balaji-kvb"
                                alt="GitHub Contribution Graph"
                                className="w-full opacity-70 hover:opacity-100 transition-opacity duration-500"
                                loading="lazy"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML =
                                        '<div class="h-32 flex items-center justify-center text-sm font-light" style="color:var(--text-faint)">Contribution graph loads with your GitHub username</div>';
                                }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg"
                    >
                        <h3 className="text-lg font-semibold mb-6 flex items-center gap-2" style={{ color: 'var(--text-heading)' }}>
                            <FiGitBranch style={{ color: 'var(--text-accent)' }} />
                            Top Languages
                        </h3>
                        <div className="space-y-4">
                            {topLanguages.map((lang, i) => (
                                <div key={lang.name}>
                                    <div className="flex justify-between text-sm mb-1.5">
                                        <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{lang.name}</span>
                                        <span className="font-light" style={{ color: 'var(--text-faint)' }}>{lang.percentage}%</span>
                                    </div>
                                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-skill)' }}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={isInView ? { width: `${lang.percentage}%` } : {}}
                                            transition={{ duration: 1, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                                            className={`h-full bg-gradient-to-r ${lang.color} rounded-full`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
