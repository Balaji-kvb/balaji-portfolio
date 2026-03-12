import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ onComplete }) {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onComplete, 500); // wait for exit animation
        }, 1800);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center"
                    style={{ background: 'var(--bg-primary)' }}
                    aria-label="Loading"
                    role="progressbar"
                >
                    {/* Ambient glow behind logo */}
                    <div
                        className="absolute"
                        style={{
                            width: '300px', height: '300px',
                            background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)',
                            filter: 'blur(60px)',
                        }}
                    />

                    <div className="relative flex flex-col items-center gap-6">
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="text-4xl md:text-5xl font-bold gradient-text"
                        >
                            &lt;KVB /&gt;
                        </motion.div>

                        {/* Loading bar */}
                        <motion.div
                            className="w-48 h-[2px] rounded-full overflow-hidden"
                            style={{ background: 'var(--border-card)' }}
                        >
                            <motion.div
                                initial={{ width: '0%' }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, ease: 'easeInOut' }}
                                className="h-full rounded-full"
                                style={{ background: 'linear-gradient(90deg, rgba(6,182,212,0.8), rgba(59,130,246,0.8), rgba(168,85,247,0.8))' }}
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-sm font-light"
                            style={{ color: 'var(--text-faint)' }}
                        >
                            Loading portfolio...
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
