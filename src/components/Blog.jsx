import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiClock, FiArrowRight } from 'react-icons/fi';

const blogPosts = [
    {
        title: 'Getting Started with Big Data Analytics',
        excerpt: 'A comprehensive guide to understanding big data fundamentals, tools like Hadoop and Spark, and how to start your journey in data analytics.',
        date: 'Mar 2025',
        readTime: '8 min read',
        tags: ['Big Data', 'Analytics'],
        link: '#',
        color: 'from-cyan-500 to-blue-500',
    },
    {
        title: 'Building Scalable Data Pipelines with Python',
        excerpt: 'Learn how to design and implement robust ETL pipelines using Python, covering data ingestion, transformation, and loading strategies.',
        date: 'Feb 2025',
        readTime: '12 min read',
        tags: ['Python', 'ETL', 'Data Engineering'],
        link: '#',
        color: 'from-blue-500 to-purple-500',
    },
    {
        title: 'React + Tailwind: Building Modern UIs',
        excerpt: 'Tips and tricks for creating stunning, responsive web interfaces using React and Tailwind CSS with advanced glassmorphism effects.',
        date: 'Jan 2025',
        readTime: '6 min read',
        tags: ['React', 'Tailwind CSS', 'UI/UX'],
        link: '#',
        color: 'from-purple-500 to-pink-500',
    },
];

export default function Blog() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="blog" className="relative" aria-label="Blog posts">
            <div className="absolute inset-0 bg-dots opacity-20" />
            <div className="section-container relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Latest <span className="gradient-text">Blog Posts</span>
                    </h2>
                    <p className="section-subtitle">Thoughts, tutorials, and insights from my journey</p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {blogPosts.map((post, i) => (
                        <motion.article
                            key={post.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            whileHover={{ y: -6 }}
                            className="glass-card p-6 group flex flex-col relative overflow-hidden"
                        >
                            {/* Top gradient line */}
                            <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${post.color} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-xs font-medium" style={{ color: 'var(--text-faint)' }}>{post.date}</span>
                                <span style={{ color: 'var(--text-divider)' }}>•</span>
                                <span className="text-xs flex items-center gap-1 font-light" style={{ color: 'var(--text-faint)' }}>
                                    <FiClock size={12} />
                                    {post.readTime}
                                </span>
                            </div>

                            <h3 className="text-lg font-semibold mb-3 group-hover:text-cyan-500 transition-colors leading-snug"
                                style={{ color: 'var(--text-heading)' }}>
                                {post.title}
                            </h3>

                            <p className="text-sm leading-relaxed mb-5 flex-1 font-light"
                                style={{ color: 'var(--text-muted)' }}>
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2.5 py-1 glass-pill font-medium"
                                            style={{ color: 'var(--text-accent)' }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm flex items-center gap-1 transition-colors group/link"
                                    style={{ color: 'var(--text-accent)' }}
                                    aria-label={`Read ${post.title}`}
                                >
                                    Read <FiArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View all posts link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-10"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                        style={{ color: 'var(--text-accent)' }}
                        aria-label="View all blog posts"
                    >
                        <FiExternalLink size={16} />
                        View all posts on Medium
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
