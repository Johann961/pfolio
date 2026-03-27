import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../components/CaseStudyCard';
import ScrollReveal from '../components/ScrollReveal';
import { caseStudies } from '../lib/case-studies';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

// Stagger children for hero text
const heroContainer = {
  animate: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const heroLine = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export default function HomePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── HERO ── Dark, full-viewport, Syne display type */}
      <section className="bg-ink-950 min-h-[92vh] flex flex-col justify-between px-6 md:px-10 pt-16 pb-14">
        <motion.div variants={heroContainer} initial="initial" animate="animate" className="max-w-7xl w-full mx-auto flex-1 flex flex-col justify-center">

          {/* Eyebrow */}
          <motion.p
            variants={heroLine}
            className="text-fog-600 text-xs font-body uppercase tracking-widest mb-8"
          >
            Senior UI/UX Designer · 9 Years
          </motion.p>

          {/* Name — massive display type */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              variants={heroLine}
              className="font-heading font-bold text-fog-50 leading-none tracking-tightest"
              style={{ fontSize: 'clamp(4rem, 12vw, 9.5rem)', letterSpacing: '-0.04em', lineHeight: '0.93' }}
            >
              JOHANN
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              variants={heroLine}
              className="font-heading font-bold text-fog-50 leading-none"
              style={{ fontSize: 'clamp(4rem, 12vw, 9.5rem)', letterSpacing: '-0.04em', lineHeight: '0.93' }}
            >
              TING
            </motion.h1>
          </div>

          {/* Positioning line + CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.p
              variants={heroLine}
              className="text-fog-400 font-body text-base md:text-lg max-w-sm leading-relaxed"
            >
              I design interfaces, systems, and experiences that agencies are proud to ship.
            </motion.p>
            <motion.div variants={heroLine}>
              <a
                href="#work"
                className="inline-flex items-center gap-3 bg-fog-50 text-ink-950 font-heading font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-white transition-colors duration-200"
              >
                View Work
                <span className="text-base">↓</span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <div className="max-w-7xl w-full mx-auto border-t border-slate-border pt-6 flex justify-between items-center">
          <span className="text-fog-600 text-xs font-body">Toronto, Canada</span>
          <span className="text-fog-600 text-xs font-body">Available for work</span>
        </div>
      </section>

      {/* ── ABOUT STRIP ── Light section, quick break */}
      <section className="bg-paper border-b border-rule-light px-6 md:px-10 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-8 items-center">
          <ScrollReveal className="md:col-span-7">
            <p className="font-heading font-bold text-ink-950 text-display-sm leading-tight">
              Visual design with systems thinking. Nine years shipping products that hold up.
            </p>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="text-fog-600 font-body text-base leading-relaxed">
              Specializing in UI design, design systems, and end-to-end UX — working with agencies and studios to get complex problems to beautiful, buildable solutions.
            </p>
            <div className="flex gap-3 flex-wrap mt-6">
              {['Figma', 'React', 'Design Systems', 'Prototyping'].map(skill => (
                <span key={skill} className="text-xs font-body text-fog-600 border border-rule-light bg-white px-3 py-1.5 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WORK ── Asymmetric case study grid */}
      <section id="work" className="bg-paper px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          {/* Section label */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-12">
              <span className="text-fog-600 text-xs font-body uppercase tracking-widest">Selected Work</span>
              <div className="flex-1 h-px bg-rule-light" />
              <span className="text-fog-600 text-xs font-body">{caseStudies.length} project{caseStudies.length !== 1 ? 's' : ''}</span>
            </div>
          </ScrollReveal>

          {/* Featured card — full width */}
          {caseStudies.filter(cs => cs.featured).map((cs, i) => (
            <div key={cs.slug} className="mb-8">
              <CaseStudyCard {...cs} index={i} />
            </div>
          ))}

          {/* Non-featured grid — 2 col */}
          {caseStudies.filter(cs => !cs.featured).length > 0 && (
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudies.filter(cs => !cs.featured).map((cs, i) => (
                <CaseStudyCard key={cs.slug} {...cs} index={i + 1} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA STRIP ── Dark closing section */}
      <section className="bg-ink-950 px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 items-center gap-12">
          <ScrollReveal className="md:col-span-8">
            <h2
              className="font-heading font-bold text-fog-50 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
            >
              Let's make something worth shipping.
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-4 flex md:justify-end" delay={0.1}>
            <a
              href="mailto:hello@johannting.com"
              className="inline-flex items-center gap-3 border border-fog-50 text-fog-50 font-heading font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-fog-50 hover:text-ink-950 transition-all duration-200"
            >
              Get in Touch
              <span>→</span>
            </a>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  );
}
