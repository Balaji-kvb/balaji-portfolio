import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
    {
        quote: 'Balaji is an exceptionally talented developer with a keen eye for data and problem-solving. His ability to translate complex requirements into elegant solutions is impressive.',
        name: 'Professor A. Kumar',
        role: 'Academic Mentor',
        company: 'University',
        avatar: '👨‍🏫',
    },
    {
        quote: 'Working with Balaji on our data analytics project was a fantastic experience. He brought innovative approaches and delivered high-quality results consistently.',
        name: 'Ravi Sharma',
        role: 'Project Lead',
        company: 'Tech Team',
        avatar: '👨‍💼',
    },
    {
        quote: 'Balaji\'s expertise in both frontend development and data analytics makes him a versatile and valuable team member. Highly recommended!',
        name: 'Priya Patel',
        role: 'Senior Developer',
        company: 'Development Team',
        avatar: '👩‍💻',
    },
];

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goTo = (index) => setCurrent(index);
    const goPrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    const goNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);

    return (
        <section id="testimonials" className="relative" aria-label="Testimonials">
            <div className="section-container" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        What People <span className="gradient-text">Say</span>
                    </h2>
                    <p className="section-subtitle">Feedback from mentors, teammates, and collaborators</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="glass-card p-8 md:p-10 relative overflow-hidden">
                        {/* Quote mark */}
                        <div className="absolute top-4 left-6 text-6xl font-serif opacity-10 gradient-text">&ldquo;</div>

                        <div className="relative z-10">
                            <motion.p
                                key={current}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="text-lg md:text-xl leading-relaxed mb-8 font-light italic"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                                &ldquo;{testimonials[current].quote}&rdquo;
                            </motion.p>

                            <motion.div
                                key={`author-${current}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                                    style={{ background: 'var(--bg-icon)', border: '1px solid var(--border-icon)' }}>
                                    {testimonials[current].avatar}
                                </div>
                                <div>
                                    <div className="font-semibold" style={{ color: 'var(--text-heading)' }}>{testimonials[current].name}</div>
                                    <div className="text-sm font-light" style={{ color: 'var(--text-faint)' }}>
                                        {testimonials[current].role} · {testimonials[current].company}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-between mt-8">
                            <div className="flex gap-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i)}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                        className="w-2 h-2 rounded-full transition-all duration-300"
                                        style={{
                                            background: i === current ? 'var(--text-accent)' : 'var(--border-card)',
                                            transform: i === current ? 'scale(1.3)' : 'scale(1)',
                                        }}
                                    />
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={goPrev}
                                    aria-label="Previous testimonial"
                                    className="p-2 rounded-xl transition-all duration-300"
                                    style={{ background: 'var(--bg-social)', border: '1px solid var(--border-social)', color: 'var(--text-muted)' }}
                                >
                                    <FiChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={goNext}
                                    aria-label="Next testimonial"
                                    className="p-2 rounded-xl transition-all duration-300"
                                    style={{ background: 'var(--bg-social)', border: '1px solid var(--border-social)', color: 'var(--text-muted)' }}
                                >
                                    <FiChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
