import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CaseStudyCard({ title, description, thumbnail, tags, href, featured = false, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
    >
      <Link to={href} className="group block">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`relative overflow-hidden rounded-xl border border-rule-light bg-white ${
            featured ? 'aspect-[16/9]' : 'aspect-[4/3]'
          }`}
        >
{thumbnail ? (
  <img
    src={thumbnail}
    alt={title}
    className="absolute inset-0 w-full h-full object-cover"
  />
) : (
  <div className="absolute inset-0 bg-paper-dark flex items-center justify-center">
    <p className="text-fog-600 text-xs font-body">Add your thumbnail here</p>
  </div>
)}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-ink-950/0 group-hover:bg-ink-950/5 transition-colors duration-300" />
        </motion.div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-ink-950 text-lg leading-snug group-hover:text-ink-900 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-fog-600 text-sm font-body mt-1 leading-relaxed">
              {description}
            </p>
          </div>
          <motion.span
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            className="text-fog-400 text-lg mt-0.5 flex-shrink-0 font-body"
          >
            →
          </motion.span>
        </div>

        {tags && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map(tag => (
              <span
                key={tag}
                className="text-xs font-body text-fog-600 bg-paper-dark px-3 py-1 rounded-full border border-rule-light"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </motion.div>
  );
}
