import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiCplusplus, SiPython, SiJavascript, SiC, SiGo,
    SiReact, SiNextdotjs, SiTailwindcss,
    SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
    SiScikitlearn, SiPandas, SiNumpy,
    SiGit, SiDocker, SiNginx, SiLinux, SiGithubactions,
} from 'react-icons/si';
import { FiServer, FiCpu } from 'react-icons/fi';

const categories = [
    {
        title: 'Languages',
        color: 'from-cyan-400 to-blue-400',
        skills: [
            { name: 'C', icon: <SiC /> },
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
            { name: 'Go', icon: <SiGo /> },
        ],
    },
    {
        title: 'Frontend',
        color: 'from-blue-400 to-purple-400',
        skills: [
            { name: 'React.js', icon: <SiReact /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        ],
    },
    {
        title: 'Backend',
        color: 'from-purple-400 to-pink-400',
        skills: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'REST APIs', icon: <FiServer /> },
            { name: 'Microservices', icon: <FiCpu /> },
        ],
    },
    {
        title: 'Database',
        color: 'from-pink-400 to-orange-400',
        skills: [
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
        ],
    },
    {
        title: 'Data & AI',
        color: 'from-orange-400 to-yellow-400',
        skills: [
            { name: 'ML', icon: <FiCpu /> },
            { name: 'Scikit-learn', icon: <SiScikitlearn /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
        ],
    },
    {
        title: 'DevOps',
        color: 'from-yellow-400 to-cyan-400',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'GitHub Actions', icon: <SiGithubactions /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Nginx', icon: <SiNginx /> },
            { name: 'Linux', icon: <SiLinux /> },
        ],
    },
    {
        title: 'Core CS',
        color: 'from-green-400 to-blue-400',
        skills: [
            { name: 'DSA', icon: <FiCpu /> },
            { name: 'DBMS', icon: <FiServer /> },
            { name: 'OS', icon: <SiLinux /> },
            { name: 'OOP', icon: <FiCpu /> },
        ],
    },
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="skills" className="relative">
            <div className="absolute inset-0 bg-dots opacity-30" />
            <div className="section-container relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">Technologies and tools I work with</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: catIdx * 0.15 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${cat.color}`} />
                                <h3 className="text-lg font-semibold" style={{ color: 'var(--text-heading)' }}>{cat.title}</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {cat.skills.map((skill, skillIdx) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: catIdx * 0.15 + skillIdx * 0.08 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex items-center gap-3 p-4 rounded-lg cursor-default transition-all duration-300 bg-white/5 backdrop-blur-md border border-white/10"
                                    >
                                        <span className="text-xl" style={{ color: 'var(--text-accent)' }}>{skill.icon}</span>
                                        <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{skill.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
