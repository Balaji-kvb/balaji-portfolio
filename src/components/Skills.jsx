import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    SiCplusplus, SiPython, SiJavascript,
    SiMysql, SiPandas, SiNumpy,
    SiHtml5, SiCss, SiReact, SiNodedotjs,
    SiGit, SiDocker, SiLinux,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { TbChartHistogram } from 'react-icons/tb';

const categories = [
    {
        title: 'Programming',
        color: 'from-cyan-400 to-blue-400',
        skills: [
            { name: 'C++', icon: <SiCplusplus /> },
            { name: 'Python', icon: <SiPython /> },
            { name: 'JavaScript', icon: <SiJavascript /> },
        ],
    },
    {
        title: 'Data & Analytics',
        color: 'from-blue-400 to-purple-400',
        skills: [
            { name: 'SQL', icon: <SiMysql /> },
            { name: 'Pandas', icon: <SiPandas /> },
            { name: 'NumPy', icon: <SiNumpy /> },
            { name: 'Power BI', icon: <TbChartHistogram /> },
        ],
    },
    {
        title: 'Web Development',
        color: 'from-purple-400 to-pink-400',
        skills: [
            { name: 'HTML', icon: <SiHtml5 /> },
            { name: 'CSS', icon: <SiCss /> },
            { name: 'React', icon: <SiReact /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
        ],
    },
    {
        title: 'Tools & Platforms',
        color: 'from-pink-400 to-cyan-400',
        skills: [
            { name: 'Git', icon: <SiGit /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'Linux', icon: <SiLinux /> },
            { name: 'VS Code', icon: <VscCode /> },
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

                <div className="grid md:grid-cols-2 gap-6">
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
