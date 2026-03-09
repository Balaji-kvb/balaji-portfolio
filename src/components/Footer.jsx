import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/Balaji-kvb', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/venkatabalajik7/', label: 'LinkedIn' },
    { icon: <SiLeetcode size={20} />, href: 'https://leetcode.com/u/Venkata_Balaji/', label: 'LeetCode' },
    { icon: <FiMail size={20} />, href: 'mailto:kadirivenkatabalaji9392@gmail.com', label: 'Email' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative bg-white/5 backdrop-blur-lg border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                            className="text-xl font-bold gradient-text inline-block mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            &lt;KVB /&gt;
                        </motion.a>
                        <p className="text-sm font-light" style={{ color: 'var(--text-faint)' }}>
                            © 2026 Kadiri Venkata Balaji. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="p-3 rounded-xl transition-all duration-300"
                                style={{
                                    background: 'var(--bg-social)',
                                    border: '1px solid var(--border-social)',
                                    color: 'var(--text-muted)',
                                }}
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="text-sm flex items-center gap-1.5 font-light" style={{ color: 'var(--text-faint)' }}>
                            Built with <FiHeart className="text-red-400/80" size={14} /> using React
                        </p>
                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2.5 rounded-xl transition-all duration-300"
                            style={{
                                background: 'var(--bg-social)',
                                border: '1px solid var(--border-social)',
                                color: 'var(--text-muted)',
                            }}
                            aria-label="Scroll to top"
                        >
                            <FiArrowUp size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
