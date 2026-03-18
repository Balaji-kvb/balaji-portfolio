import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar } from 'lucide-react';

const certifications = [
    {
        title: 'Enterprise Design Thinking – Practitioner',
        issuer: 'IBM',
        date: '2024',
        description: 'Certification in IBM Enterprise Design Thinking methodology, covering user-centered design principles, team collaboration frameworks, and iterative solution design.',
        credential: '#',
        color: 'from-blue-500 to-cyan-400',
    },
    {
        title: 'Data Fundamentals',
        issuer: 'IBM',
        date: '2024',
        description: 'Understanding of core data concepts including data types, data sources, data repositories, and foundational data analysis techniques.',
        credential: '#',
        color: 'from-purple-500 to-pink-400',
    },
    {
        title: 'Data Analysis with Python',
        issuer: 'IBM',
        date: '2024',
        description: 'Hands-on certification covering data wrangling, exploratory data analysis, and statistical modeling using Python libraries like Pandas and NumPy.',
        credential: '#',
        color: 'from-cyan-500 to-green-400',
    },
    {
        title: 'Data Visualization with Python',
        issuer: 'IBM',
        date: '2024',
        description: 'Creating compelling data visualizations using Matplotlib, Seaborn, and Folium to communicate insights effectively through charts, plots, and maps.',
        credential: '#',
        color: 'from-yellow-500 to-orange-400',
    },
    {
        title: 'Big Data 101',
        issuer: 'Cognitive Class',
        date: '2024',
        description: 'Fundamentals of big data concepts, Hadoop ecosystem, and large-scale data processing techniques for modern data-driven applications.',
        credential: '#',
        color: 'from-green-500 to-blue-400',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: '2024',
        description: 'Comprehensive certification covering HTML5, CSS3, Flexbox, Grid, responsive design principles, and accessibility best practices.',
        credential: '#',
        color: 'from-pink-500 to-purple-400',
    },
];

export default function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="certifications" className="relative">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="section-subtitle">Professional certifications and achievements</p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, i) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-6 group relative overflow-hidden transition-transform duration-300"
                        >
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${cert.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="flex items-center justify-between mb-4">
                                <div className="p-2.5 rounded-xl transition-all duration-300"
                                    style={{ background: 'var(--bg-icon)', border: '1px solid var(--border-icon)', color: 'var(--text-accent)' }}>
                                    <Award size={22} />
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-1 group-hover:text-cyan-500 transition-colors"
                                style={{ color: 'var(--text-heading)' }}>
                                {cert.title}
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-sm font-medium" style={{ color: 'var(--text-accent)', opacity: 0.7 }}>{cert.issuer}</span>
                                <span style={{ color: 'var(--text-divider)' }}>•</span>
                                <span className="text-sm flex items-center gap-1 font-light" style={{ color: 'var(--text-faint)' }}>
                                    <Calendar size={12} />
                                    {cert.date}
                                </span>
                            </div>
                            <p className="text-sm leading-relaxed font-light" style={{ color: 'var(--text-muted)' }}>{cert.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
