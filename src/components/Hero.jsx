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
        >
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
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
                    >
                        <FiArrowDown className="animate-bounce" />
                        View Projects
                    </motion.a>

                    <motion.a
                        href="/Kadiri_Venkata_Balaji_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary flex items-center gap-2"
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
                >
                    <a href="https://github.com/Balaji-kvb" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <FiGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/venkatabalajik7/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <FiLinkedin />
                    </a>
                    <a href="https://leetcode.com/u/Venkata_Balaji/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <SiLeetcode />
                    </a>
                    <a href="mailto:kadirivenkatabalaji9392@gmail.com" className="text-2xl hover:text-cyan-400 transition-colors" style={{ color: 'var(--text-muted)' }}>
                        <FiMail />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
