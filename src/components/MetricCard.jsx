import { motion } from 'framer-motion';

export default function MetricCard({ value, label, dark = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`p-6 rounded-lg border ${
        dark
          ? 'bg-slate-card border-slate-border'
          : 'bg-white border-rule-light'
      }`}
    >
      <div className={`font-heading font-bold text-3xl md:text-4xl mb-1 ${
        dark ? 'text-fog-50' : 'text-ink-950'
      }`}>
        {value}
      </div>
      <div className={`text-sm font-body ${
        dark ? 'text-fog-600' : 'text-fog-600'
      }`}>
        {label}
      </div>
    </motion.div>
  );
}
