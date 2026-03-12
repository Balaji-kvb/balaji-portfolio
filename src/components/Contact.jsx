import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ⚠️ Replace these with your EmailJS credentials from https://emailjs.com
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactInfo = [
    { icon: <FiMail size={22} />, label: 'Email', value: 'kadirivenkatabalaji9392@gmail.com', href: 'mailto:kadirivenkatabalaji9392@gmail.com' },
    { icon: <FiLinkedin size={22} />, label: 'LinkedIn', value: 'linkedin.com/in/kadiribalaji', href: 'https://linkedin.com/in/kadiribalaji' },
    { icon: <FiGithub size={22} />, label: 'GitHub', value: 'github.com/Balaji-kvb', href: 'https://github.com/Balaji-kvb' },
    { icon: <FiMapPin size={22} />, label: 'Location', value: 'India', href: null },
];

export default function Contact() {
    const ref = useRef(null);
    const formRef = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        } catch (error) {
            console.error('EmailJS error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    const IconBox = ({ children }) => (
        <div className="p-2.5 rounded-xl transition-all duration-300"
            style={{ background: 'var(--bg-icon)', border: '1px solid var(--border-icon)', color: 'var(--text-accent)' }}>
            {children}
        </div>
    );

    return (
        <section id="contact" className="relative" aria-label="Contact section">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">Have a question or want to work together? Drop me a message!</p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <h3 className="text-xl font-semibold mb-6" style={{ color: 'var(--text-heading)' }}>Let&apos;s Connect</h3>
                        {contactInfo.map((info, i) => (
                            <motion.div
                                key={info.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                className="glass-card p-4 group"
                            >
                                {info.href ? (
                                    <a href={info.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4" aria-label={`${info.label}: ${info.value}`}>
                                        <IconBox>{info.icon}</IconBox>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-faint)' }}>{info.label}</div>
                                            <div className="text-sm transition-colors" style={{ color: 'var(--text-secondary)' }}>{info.value}</div>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <IconBox>{info.icon}</IconBox>
                                        <div>
                                            <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-faint)' }}>{info.label}</div>
                                            <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>{info.value}</div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-6 md:p-8 space-y-5">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-muted)' }}>Name</label>
                                    <input
                                        id="contact-name"
                                        name="user_name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 glass-input"
                                        style={{ color: 'var(--text-primary)' }}
                                        placeholder="Your name"
                                        aria-required="true"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-muted)' }}>Email</label>
                                    <input
                                        id="contact-email"
                                        name="user_email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 glass-input"
                                        style={{ color: 'var(--text-primary)' }}
                                        placeholder="your@email.com"
                                        aria-required="true"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm mb-2 font-medium" style={{ color: 'var(--text-muted)' }}>Message</label>
                                <textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 glass-input resize-none"
                                    style={{ color: 'var(--text-primary)' }}
                                    placeholder="Tell me about your project or idea..."
                                    aria-required="true"
                                />
                            </div>

                            {/* Status Toast */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                                    style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#34d399' }}
                                >
                                    <FiCheckCircle size={16} /> Message sent successfully! I&apos;ll get back to you soon.
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium"
                                    style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', color: '#f87171' }}
                                >
                                    <FiAlertCircle size={16} /> Something went wrong. Please try again or email me directly.
                                </motion.div>
                            )}

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                                whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                                className={`w-full py-3.5 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 btn-primary ${status === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                                    }`}
                                aria-label="Send message"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                                            className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                        />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <FiSend size={18} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
