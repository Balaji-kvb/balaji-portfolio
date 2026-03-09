import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navLinks.map(l => l.href.slice(1));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.getBoundingClientRect().top <= 120) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'shadow-lg' : ''}`}
            style={scrolled ? {
                background: 'var(--bg-nav)',
                backdropFilter: 'blur(40px)',
                WebkitBackdropFilter: 'blur(40px)',
                borderBottom: `1px solid var(--border-nav)`,
            } : {
                background: 'transparent',
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleClick('#home'); }}
                        className="text-xl md:text-2xl font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        &lt;KVB /&gt;
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                className="relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300"
                                style={{
                                    color: activeSection === link.href.slice(1) ? 'var(--text-primary)' : 'var(--text-muted)',
                                }}
                            >
                                {activeSection === link.href.slice(1) && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 rounded-xl"
                                        style={{
                                            background: 'var(--bg-pill)',
                                            border: `1px solid var(--border-pill)`,
                                            backdropFilter: 'blur(20px)',
                                        }}
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}

                        {/* Theme Toggle */}
                        <motion.button
                            onClick={toggleTheme}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="ml-3 p-2.5 rounded-xl transition-all duration-300"
                            style={{
                                background: 'var(--bg-social)',
                                border: `1px solid var(--border-social)`,
                            }}
                            aria-label="Toggle theme"
                        >
                            <AnimatePresence mode="wait">
                                {isDark ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiSun size={18} style={{ color: 'var(--text-accent)' }} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <FiMoon size={18} style={{ color: 'var(--text-accent)' }} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>

                    {/* Mobile: Theme Toggle + Hamburger */}
                    <div className="flex md:hidden items-center gap-2">
                        <motion.button
                            onClick={toggleTheme}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-xl transition-all duration-300"
                            style={{
                                background: 'var(--bg-social)',
                                border: `1px solid var(--border-social)`,
                            }}
                            aria-label="Toggle theme"
                        >
                            {isDark ? (
                                <FiSun size={18} style={{ color: 'var(--text-accent)' }} />
                            ) : (
                                <FiMoon size={18} style={{ color: 'var(--text-accent)' }} />
                            )}
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="p-2"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--bg-nav-mobile)',
                            backdropFilter: 'blur(60px) saturate(200%)',
                            WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                            borderBottom: `1px solid var(--border-nav)`,
                        }}
                        className="md:hidden"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={(e) => { e.preventDefault(); handleClick(link.href); }}
                                    className="block px-4 py-3 rounded-xl text-sm font-medium transition-colors"
                                    style={{
                                        color: activeSection === link.href.slice(1) ? 'var(--text-primary)' : 'var(--text-muted)',
                                        background: activeSection === link.href.slice(1) ? 'var(--bg-pill)' : 'transparent',
                                    }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
