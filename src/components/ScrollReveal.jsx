import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}) {
  const offsets = {
    up: { y: 12 },
    down: { y: -12 },
    none: { y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
