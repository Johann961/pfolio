import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AssetPlaceholder from '../../components/AssetPlaceholder';
import ScrollReveal from '../../components/ScrollReveal';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function CanisiusCaseStudy() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">

      {/* ── HERO ── Dark, left title, mockup flush to bottom */}
      <section className="bg-ink-950 px-6 md:px-16 pt-16 pb-0">
        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <Link to="/" className="text-fog-600 hover:text-fog-50 text-sm font-body transition-colors duration-200 inline-flex items-center gap-2">
              ← Back
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.08 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['UI/UX Design', 'Brand Identity', 'Design Systems', 'Higher Education'].map(tag => (
              <span key={tag} className="text-xs font-body text-fog-600 border border-slate-border px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="font-heading font-bold text-fog-50 mb-14 max-w-3xl"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)', letterSpacing: '-0.03em', lineHeight: '1.05' }}
          >
            I designed Canisius University's identity with warmth and vibrancy front and center.
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-wrap gap-8 border-t border-slate-border pt-6 mb-14"
          >
            {[
              { label: 'Role', value: 'Sole UI/UX Designer' },
              { label: 'Client', value: 'Canisius University' },
              { label: 'Deliverable', value: 'Brand System + Website' },
              { label: 'Outcome', value: 'Multi-year engagement' },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 min-w-[120px]">
                <span className="text-fog-600 uppercase tracking-wider text-xs font-body">{label}</span>
                <span className="text-fog-100 text-sm font-body">{value}</span>
              </div>
            ))}
          </motion.div>

          {/* Hero mockup — flush to bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <img
              src="/can-hero.webp"
              className="w-full aspect-video rounded-t-xl rounded-b-none"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: CONTEXT ── White, problem statement + before/after */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-12 gap-10 items-start mb-16">
            <ScrollReveal className="md:col-span-7">
              <h2
                className="font-heading font-bold text-ink-950"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
              >
                Canisius wasn't broken. Its warmth and humanity were just buried under its own design system (or lack thereof).
              </h2>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-4 md:col-start-9" delay={0.1}>
              <p className="text-fog-600 font-body text-base leading-relaxed">
                The site was functional. Content was current. But dark navy gradients were being placed directly over students' faces - literally obscuring the human, community-centred identity the university wanted to project. The photography library was full of genuine warmth and aspiration. The design system was smothering it. This, alongside heavy use of the dark blue was artificially darkening the site.
              </p>
            </ScrollReveal>
          </div>

          {/* Before / after — the most visceral illustration */}
          <ScrollReveal className="grid md:grid-cols-2 gap-4 mb-10">
            <img
              src="/can-before.jpg"
              className="w-full aspect-[16/10] rounded-xl"
            />
            <img
              src="/can-after.jpg"
              className="w-full aspect-[16/10] rounded-xl"
            />
          </ScrollReveal>

          {/* 4-up metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '1st', label: 'Visual identity system ever defined' },
              { value: '3', label: 'Core page templates delivered' },
              { value: '∞', label: 'Extended to print + marketing' },
              { value: '✓', label: 'Multi-year creative relationship' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="bg-paper p-6 rounded-xl border border-rule-light"
              >
                <div className="font-heading font-bold text-ink-950 text-3xl md:text-4xl mb-1">{m.value}</div>
                <div className="text-fog-600 text-sm font-body leading-snug">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REAL PROBLEM ── Light blue-gray, heading left, audit screenshots right */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ backgroundColor: '#D5DEE8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="md:col-span-5">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">The Real Problem</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                The brief was a website redesign. The real problem was that no 'Canisius style' existed.
              </h2>
              <div className="space-y-4">
                <p className="font-body text-base leading-relaxed" style={{ color: '#2a2a35' }}>
                  The university had selected fonts and colours, but had no rules governing their use. Heading styles were inconsistent, colour usage was undefined, and the heavy navy blue had simply taken over by default. This led us to introduce lighter neutral colours to complement more minimal use of the dark blue and yellow.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: '#2a2a35' }}>
                  There was no visual signature, no design identifier. What began as a website project quickly became a foundational branding exercise, because a new site built on the same non-system would have the same problem of visually aging badly.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7" delay={0.1}>
              <img
                src="/can-styletile.jpg"
                className="w-full aspect-[16/10] rounded-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONSTRAINTS ── White, text left, colour study right */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                The client asked us to avoid Jesuit imagery. That constraint sharpened everything.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  Canisius is a Jesuit institution, but the client was explicit: lead with academic excellence and community, not religious affiliation. That ruled out an obvious creative direction and forced the design energy toward a different conceptual anchor. It also revealed a lot about how the university understood itself and what it wanted to become. Though we wanted to avoid any obvious imagery, we still wanted to portray warmth and hope, concepts really associated with faith - through colur and imagery.
                </p>
              </div>

              <div className="border-t border-rule-light pt-6 space-y-4">
                <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Working Constraints</p>
                {[
                  'No pre-existing brand guidelines - the visual system had to be defined from scratch',
                  'Yellow as a primary accent colour, which tips into garish without careful proportion',
                  'A large, complex content ecosystem spanning admissions, programs, student life, and more',
                  'No AI tools available - UX research synthesis and front-end QA were fully manual',
                ].map((c, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-fog-400 mt-0.5 flex-shrink-0 font-body">—</span>
                    <p className="text-fog-600 font-body text-sm leading-relaxed">{c}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <img
                src="/can-phone.jpg"
                className="w-full aspect-[3/4] rounded-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: BREAKTHROUGH ── Dark, diagonal motif — the design hero moment */}
      <section className="bg-ink-950 px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-20">

          {/* The breakthrough */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">The Breakthrough</p>
              <h2
                className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                The design breakthrough was a diagonal line rooted in the idea of moving upward.
              </h2>
              <div className="space-y-4">
                <p className="text-fog-400 font-body text-base leading-relaxed">
                  The geometric subtle accent signature of the system came from a specific idea - vertical progression, aspiration, movement toward a goal expressed as a diagonal with a subtle gradient. It wasn't a decorative choice or a trend reference. It was conceptually grounded and provided us with a consistent design accent that could showcase itself on modular components.
                </p>
                <p className="text-fog-400 font-body text-base leading-relaxed">
                  The diagonal's real power is multiplicative. A single instance carries the motif. Across an entire page, it creates visual rhythm. Across the full site, it creates a recognizable identity that feels designed rather than assembled. The balance came with not overdoing it and thus having the whole site experience be filled with angles.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
                src="/can-box.jpg"
                className="w-full aspect-square rounded-xl"
              />
            </ScrollReveal>
          </div>

          {/* Hero compositions */}
          <ScrollReveal>
            <img
              src="/can-fw.jpg"
              className="w-full aspect-[21/9] rounded-xl"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6: COLOUR SYSTEM ── Blue-gray, restraint logic */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ backgroundColor: '#D5DEE8' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="md:col-span-5">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">Colour System</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                Yellow needed to work harder by being used more sparingly.
              </h2>
              <div className="space-y-4">
                <p className="font-body text-base leading-relaxed" style={{ color: '#2a2a35' }}>
                  The guiding logic for the entire system was restraint in service of personality. Navy moved from dominant to supporting. Yellow was given precision roles - accent, emphasis, and momentum rather than being applied broadly. It was imporant as a colour representing vibrant energy and hope but a strict balance was needed to prevent it from becoming too gaudy or an eyesore.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: '#2a2a35' }}>
                  Neutrals and white space became structural elements, not just background, giving the system its sense of gravitas and preventing the colour palette from tipping into becoming overwhelmingly dark with the blue or too gaudy with the yellow. It added maturity and structure to the composition.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7" delay={0.1}>
              <div className="space-y-4">
                <img
                  src="/can-yellow-banner.webp"
                  className="w-full aspect-video rounded-xl"
                />
                <img
                  src="/can-blue-banner.webp"
                  className="w-full aspect-video rounded-xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WIREFRAMES ── White, layout strategy */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">Process</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                Wireframes established the strategy before any visual decisions were made.
              </h2>
              <div className="space-y-4">
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  The site needed to do two different things well: draw users in with high-impact visual sections, and support complex content-heavy areas with clarity and hierarchal structure.
                </p>
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  I mapped this as a deliberate rhythm for our layout - asymmetric grids for storytelling moments, modular components for content density — and locked that architecture in before style exploration began.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <img
                src="/can-wf.jpg"
                className="w-full aspect-[3/4] rounded-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: OUTCOME ── Dark, expanded scope callout, component library */}
      <section className="bg-ink-900 px-6 md:px-16 py-20 md:py-28 border-t border-slate-border">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <ScrollReveal className="md:col-span-8">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">The Outcome</p>
              <h2
                className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
              >
                The client loved it and came back to us for everything visual the university makes.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-fog-400 font-body text-base leading-relaxed max-w-2xl">
                  The final system delivered a component library, three core page templates, a typographic hierarchy, colour usage principles, and imagery guidelines — the first time Canisius had a clearly defined visual identity governing design decisions across media.
                </p>
                <p className="text-fog-400 font-body text-base leading-relaxed max-w-2xl">
                  The strongest outcome wasn't the website: it was the brand identity that developed and the extended engagements afterwards. The client returned to design posters, brochures, and full marketing collateral — not through a sales process, but because the system proved strong and flexible enough to inspire them with more opportunties.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 bg-green-800 text-white font-heading font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full">
                <span>✓</span>
                Scope expanded from a website to a full brand system and multi-year creative relationship.
              </div>
            </ScrollReveal>
          </div>

          {/* Component library + brand applications */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <ScrollReveal>
              <img
                src="/can-left-post.webp"
                className="w-full aspect-[16/10] rounded-xl"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
                src="/can-right-post.webp"
                className="w-full aspect-[16/10] rounded-xl"
              />
            </ScrollReveal>
          </div>

          {/* 4-up dark metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: '1st', label: 'Brand system ever for Canisius' },
              { value: '3', label: 'Core page templates' },
              { value: '5+', label: 'System deliverables' },
              { value: '✓', label: 'Multi-year engagement' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                className="bg-slate-card border border-slate-border p-6 rounded-xl"
              >
                <div className="font-heading font-bold text-fog-50 text-3xl md:text-4xl mb-1">{m.value}</div>
                <div className="text-fog-600 text-sm font-body">{m.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: LEARNINGS ── Light gray, 2-col, multi-device mockup at bottom */}
      <section className="bg-paper px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="md:col-span-4">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Reflection</p>
              <h2
                className="font-heading font-bold text-ink-950"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.15' }}
              >
                What I learned and what comes next.
              </h2>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7 md:col-start-6" delay={0.1}>
              {[
                { label: 'Creative process', text: 'Protect more iteration time for speculative, deliberately wrong concepts - not because the brief requires it, but because those experiments build a personal creative library that feeds future work.' },
                { label: 'Constraints as fuel', text: "The Jesuit constraint ruled out one creative direction; more radical exploration might have surfaced others worth developing for different clients." },
                { label: 'Research workflow', text: 'AI-assisted UX research synthesis would have accelerated the discovery phase significantly, manually processing a large volume of research findings was a big time investment.' },
                { label: 'QA workflow', text: "AI-assisted front-end QA would have eliminated some friction at the time I was writing code snippets and downloading the site to test fixes manually to then send to the front-end dev team. A cleaner workflow with AI support would work now." },
                { label: 'Reflection', text: 'Defining the visual brand story and having that story continue through repeated design engagements was fulfilling as we could logically direct the evolution of the brand for years to come while the core web experience has aged extremmely well.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="border-t border-rule-light py-6"
                >
                  <span className="text-fog-600 text-xs font-body uppercase tracking-widest block mb-2">{item.label}</span>
                  <p className="text-fog-600 font-body text-base leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </ScrollReveal>
          </div>

          {/* Multi-device mockup */}
          <ScrollReveal>
            <img
              src="/can-final.jpg"
              className="w-full object-contain rounded-lg"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLOSING CTA ── Dark */}
      <section className="bg-ink-950 px-6 md:px-16 py-14 border-t border-slate-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <ScrollReveal>
            <Link
              to="/"
              className="font-heading font-bold text-fog-50 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 text-sm uppercase tracking-widest"
            >
              ← Back to all work
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="mailto:ting.johann@gmail.com"
              className="inline-flex items-center gap-3 border border-fog-50 text-fog-50 font-heading font-bold text-sm uppercase tracking-widest px-7 py-4 rounded-full hover:bg-fog-50 hover:text-ink-950 transition-all duration-200"
            >
              Work together →
            </a>
          </ScrollReveal>
        </div>
      </section>

    </motion.div>
  );
}
