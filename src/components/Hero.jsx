import { motion } from 'framer-motion';
import { FiArrowDown, FiMail } from 'react-icons/fi';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

export default function Hero() {
    const { isDark } = useTheme();

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            aria-label="Hero section"
        >
            {/* Ambient glow blobs */}
            <div
                className="absolute glow-blob"
                style={{
                    width: '500px', height: '500px',
                    left: '5%', top: '15%',
                    background: `radial-gradient(circle, rgba(6,182,212,${isDark ? 0.35 : 0.2}), transparent 70%)`,
                }}
            />
            <div
                className="absolute glow-blob"
                style={{
                    width: '400px', height: '400px',
                    right: '0%', top: '50%',
                    background: `radial-gradient(circle, rgba(99,102,241,${isDark ? 0.3 : 0.15}), transparent 70%)`,
                }}
            />

            <div className="absolute inset-0 bg-grid" />
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(to bottom, var(--bg-primary), transparent, var(--bg-primary))`,
                }}
            />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                {/* Profile Avatar */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6 flex justify-center"
                >
                    <div className="relative">
                        <div
                            className="w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold gradient-text"
                            style={{
                                background: 'var(--bg-card)',
                                backdropFilter: 'blur(40px)',
                                border: '2px solid var(--border-card)',
                                boxShadow: `0 0 40px rgba(6,182,212,${isDark ? 0.15 : 0.1})`,
                            }}
                        >
                            KB
                        </div>
                        {/* Online dot */}
                        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2"
                            style={{ borderColor: 'var(--bg-primary)' }} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                >
                    <span
                        className="inline-flex items-center gap-2 px-5 py-2.5 glass-pill text-sm font-medium"
                        style={{ color: 'var(--text-accent)' }}
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight"
                    style={{ color: 'var(--text-heading)' }}
                >
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">Kadiri Venkata Balaji</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl mb-4 font-light tracking-wide"
                    style={{ color: 'var(--text-muted)' }}
                >
                    Big Data Analytics Student{' '}
                    <span style={{ color: 'var(--text-divider)' }}>|</span>{' '}Data Engineer{' '}
                    <span style={{ color: 'var(--text-divider)' }}>|</span>{' '}AI & Software Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-base md:text-lg mb-12 max-w-2xl mx-auto font-light"
                    style={{ color: 'var(--text-faint)' }}
                >
                    Turning raw data into meaningful insights and building modern applications
                    that solve real-world problems.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary flex items-center gap-2"
                        aria-label="View projects"
                    >
                        <FiArrowDown className="animate-bounce" />
                        View Projects
                    </motion.a>

                    <motion.a
                        href="https://drive.google.com/file/d/1n5EKgQL3pMkEMTmUZY__-8zw-h_7ompI/preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                        aria-label="Download resume"
                    >
                        <HiOutlineDocumentDownload size={18} />
                        Download Resume
                    </motion.a>

                    <motion.a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
                        aria-label="Contact me"
                    >
                        <FiMail size={18} />
                        Contact Me
                    </motion.a>
                </motion.div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex items-center justify-center gap-6 mt-10"
                    aria-label="Social links"
                >
                    <a href="https://github.com/Balaji-kvb" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }} aria-label="GitHub">
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/venkatabalajik7/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }} aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/Venkata_Balaji/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }} aria-label="LeetCode">
                        <SiLeetcode />
                    </a>
                    <a href="mailto:kadirivenkatabalaji9392@gmail.com" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }} aria-label="Email">
                        <FiMail />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    aria-hidden="true"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-6 h-10 rounded-full flex justify-center pt-2"
                        style={{ border: `1.5px solid var(--border-card)` }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: 'var(--text-muted)' }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
