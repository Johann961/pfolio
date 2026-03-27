import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav() {
  const location = useLocation();
  const isDark = location.pathname !== '/';

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isDark
        ? 'backdrop-blur-lg bg-ink-950/90 border-b border-slate-border'
        : 'backdrop-blur-lg bg-paper/90 border-b border-rule-light'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center">
        <Link
          to="/"
          className={`font-heading font-bold text-sm tracking-widest uppercase transition-colors duration-200 ${
            isDark ? 'text-fog-50 hover:text-white' : 'text-ink-900 hover:text-ink-950'
          }`}
        >
          JT
        </Link>
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-body transition-colors duration-200 ${
              isDark ? 'text-fog-400 hover:text-fog-50' : 'text-fog-600 hover:text-ink-900'
            }`}
          >
            Work
          </Link>
          <a
            href="mailto:ting.johann@gmail.com"
            className={`text-sm font-body transition-colors duration-200 ${
              isDark ? 'text-fog-400 hover:text-fog-50' : 'text-fog-600 hover:text-ink-900'
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
