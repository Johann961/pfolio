import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AssetPlaceholder from '../../components/AssetPlaceholder';
import MetricCard from '../../components/MetricCard';
import PullQuote from '../../components/PullQuote';
import ScrollReveal from '../../components/ScrollReveal';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function YRPCaseStudy() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
      className="bg-ink-950"
    >

      {/* ── HERO ── Full-viewport dark, commanding title */}
      <section className="min-h-[88vh] flex flex-col justify-end px-6 md:px-10 pt-20 pb-16 border-b border-slate-border">
        <div className="max-w-7xl mx-auto w-full">

          {/* Back nav */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16"
          >
            <Link
              to="/"
              className="text-fog-600 hover:text-fog-50 text-sm font-body transition-colors duration-200 inline-flex items-center gap-2"
            >
              ← Back to work
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {['UI/UX Design', 'Design Systems', 'Brand', 'Public Sector'].map(tag => (
              <span key={tag} className="text-xs font-body text-fog-600 border border-slate-border px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="font-heading font-bold text-fog-50 mb-8 max-w-4xl"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 5rem)', letterSpacing: '-0.03em', lineHeight: '1.0' }}
          >
            I redesigned York Regional Police's website to feel like the community it serves.
          </motion.h1>

          {/* Meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="flex flex-wrap gap-8 text-fog-600 text-sm font-body border-t border-slate-border pt-6"
          >
            <div><span className="text-fog-400 uppercase tracking-wider text-xs block mb-1">Role</span>Sole UI/UX Designer</div>
            <div><span className="text-fog-400 uppercase tracking-wider text-xs block mb-1">Timeline</span>3 Months</div>
            <div><span className="text-fog-400 uppercase tracking-wider text-xs block mb-1">Deliverable</span>Design System + Prototype</div>
            <div><span className="text-fog-400 uppercase tracking-wider text-xs block mb-1">Client</span>York Regional Police</div>
          </motion.div>
        </div>
      </section>

      {/* ── HERO ASSET ── Full width */}
      <section className="bg-ink-950 px-6 md:px-10 pb-0">
        <div className="max-w-7xl mx-auto">
       
            <img
              src="/yrp-hero.webp"
              className="w-full rounded-t-xl"
            />
        
        </div>
      </section>

      {/* ── CONTEXT ── Light section, pull quote entry */}
      <section className="bg-paper px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <PullQuote dark={false}>
            YRP's digital presence needed to communicate trust and community.
          </PullQuote>

          <div className="mt-16 grid md:grid-cols-12 gap-8">
            <ScrollReveal className="md:col-span-7">
              <div className="space-y-4">
              <p className="text-fog-600 font-body text-lg leading-relaxed">
                Service with community is the key thing YRP wanted to represent in the brand.
              </p>
              <p className="text-fog-600 font-body text-lg leading-relaxed">
                The existing site defaulted to heavy, institutional imagery, alongside inconsistent typography and lacking any modular design components. The large seal inflated the header size and unintentionally reinforced an impression of authority. We wanted to avoid this kind of visual language, and instead create a composition that communicated community partnership.
              </p>
              <p className="text-fog-600 font-body text-lg leading-relaxed">
                That gap between public perception and reality of the YRP brand was the actual design problem. I was brought in as sole UI/UX designer to solve it.
              </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-4 md:col-start-9" delay={0.1}>
              <img
              src="/yrp-ba.webp"
              className="w-full aspect-video"
            />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── LIVED EXPERIENCE ── Dark, centered text + asset */}
      <section className="bg-ink-950 px-6 md:px-10 py-20 md:py-28 border-y border-slate-border">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-6">Context</p>
            <h2 className="font-heading font-bold text-fog-50 mb-8"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
            >
              Being a lifelong York Region resident was as asset as it shaped every call I made.
            </h2>
            <p className="text-fog-400 font-body text-base leading-relaxed">
              I grew up in York Region. I know what YRP means to the communities it serves, and all the nuance and biases going in to the design. That self-awareness was as important as any research finding. Designing a police website without understanding the lived relationship between the police and its residents is a fast way to get the tone wrong if we just rely on what the client tells us. Understanding the current climate and having that historical nuance was an asset to understanding what a successful design looked like.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="mt-12">
            <img
              src="/yrp-resident.webp"
              className="w-full aspect-video"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── PROBLEM ── Light, split layout */}
      <section className="bg-paper px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-6">The Problem</p>
              <h2 className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', letterSpacing: '-0.025em', lineHeight: '1.1' }}
              >
                The site didn't have a visual language problem. It had a design system problem.
              </h2>
              <p className="text-fog-600 font-body text-base leading-relaxed mb-6">
                There were no meaningful brand guidelines to start from. Every inconsistency in the old site — the clashing type scales, the random imagery choices, the branding that shifted across platforms — was a symptom of having no coherent foundation. A redesign alone wouldn't fix this. The site needed a design system that could scale to print, social, and internal comms.
              </p>

              <div className="border-t border-rule-light pt-6 space-y-4">
                <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Working Constraints</p>
                {[
                  '3-month timeline from kickoff through final superintendent approval',
                  'Holiday-period asynchronous review with no opportunity for the approver to ask follow-up questions',
                  'Expired licence on YRP\'s primary typeface, discovered late in the approval cycle',
                ].map((constraint, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-fog-400 font-body text-sm mt-0.5 flex-shrink-0">—</span>
                    <p className="text-fog-600 font-body text-sm leading-relaxed">{constraint}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <img
              src="/yrp-guide.png"
              className="w-full object-contain"
            />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── Dark, timeline feel */}
      <section className="bg-ink-900 px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-12">Process</p>
          </ScrollReveal>

          {/* Direction decision */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.15' }}
              >
                I ruled out trend-driven directions early, including one the client was excited about.
              </h2>
              <p className="text-fog-400 font-body text-base leading-relaxed">
                The grid-line concept — an authority-signalling design trend — came up during style tile exploration and the client was genuinely intrigued by it. I killed it. It was decorative, not functional. A police website serves residents who need to access services quickly, and I wanted that experience to be clean. Legibility and scannability without distraction was the ultimate goal whereas having a design for the sake of design would just increase the case for visual clutter and set a bad precedent for the future design systems introduced.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
              src="/yrp-grid.webp"
              className="w-full aspect-video rounded-lg"
            />
            </ScrollReveal>
          </div>

          {/* Typography decision */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center mb-20">
            <ScrollReveal className="md:order-2">
              <h2 className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.15' }}
              >
                Authority through typography, community through imagery.
              </h2>
              <div className="space-y-4">
              <p className="text-fog-400 font-body text-base leading-relaxed">
                All-caps hierarchy signals institutional seriousness, but when overdone, could be seen as too aggressive and loud. That is why we limited this to only the highest tier of headings.
              </p>
              <p className="text-fog-400 font-body text-base leading-relaxed">
                In terms of imagery, we guided the YRP team to avoid heavy institutional imagery, “firing line” shots (group photos where everyone faces the camera that serves no context to the content” and leaned them towards more representative, high quality imagery that touched on community themes where YRP staff worked alongside the community.
              </p>
              <p className="text-fog-400 font-body text-base leading-relaxed">
                The result: a site that reads as credible and official while remaining accessible and community-facing.
              </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="md:order-1">
              <img
              src="/yrp-font.webp"
              className="w-full aspect-video rounded-lg"
            />
            </ScrollReveal>
          </div>

          {/* Wireframes */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.15' }}
              >
                Wireframes were a stakeholder alignment tool, not a design document.
              </h2>
              <p className="text-fog-400 font-body text-base leading-relaxed">
                I used low-fidelity wireframes deliberately as these blueprint-level structure with no visual detail kept approval conversations focused on hierarchy and content flow rather than aesthetic preferences. These were also key for maintaining scope when reviewing them with the dev team.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
              src="/yrp-wire.webp"
              className="w-full aspect-video"
            />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── Dark, results emphasis */}
      <section className="bg-ink-950 px-6 md:px-10 py-20 md:py-28 border-t border-slate-border">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-8">The Outcome</p>
            <h2 className="font-heading font-bold text-fog-50 mb-6 max-w-3xl"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', letterSpacing: '-0.03em', lineHeight: '1.1' }}
            >
              The delivered system covers three core templates and the full component library.
            </h2>
            <p className="text-fog-400 font-body text-base leading-relaxed max-w-2xl mb-4">
              The final Figma prototype included homepage, landing page, and basic content page templates. These represented the majority of page types across the site. Modular components replaced the previous sidebar-heavy layout pattern, making content easier to scan and the system easier for developers to implement consistently.
            </p>
          </ScrollReveal>

          {/* Approval callout */}
          <ScrollReveal delay={0.1}>
            <div className="mt-8 mb-14 inline-flex items-center gap-3 bg-fog-50 text-ink-950 font-heading font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full">
              <span className="text-base">✓</span>
              Client response: The clients and their approval commitees loved the new design.
            </div>
          </ScrollReveal>

          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <img
              src="/yrp-final.webp"
              className="w-full object-contain rounded-lg"
            />
            </ScrollReveal>
        
          </div>
        </div>
      </section>

      {/* ── METRICS ── 4-up cards */}
      <section className="bg-ink-900 px-6 md:px-10 py-16 border-y border-slate-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard value="3 mo" label="Timeline, kickoff to approval" dark />
            <MetricCard value="3" label="Core page templates delivered" dark />
            <MetricCard value="1" label="Change requested at final approval" dark />
            <MetricCard value="✓" label="Client teams, including the Superintendent loved it" dark />
          </div>
        </div>
      </section>

      {/* ── LEARNINGS ── Light, text-focused */}
      <section className="bg-paper px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
          <ScrollReveal className="md:col-span-4">
            <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Reflection</p>
            <h2 className="font-heading font-bold text-ink-950"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', letterSpacing: '-0.025em', lineHeight: '1.15' }}
            >
              What I learned and what comes next.
            </h2>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-7 md:col-start-6" delay={0.1}>
            <div className="space-y-6">
              {[
                {
                  label: 'Measurement',
                  text: 'Defining success metrics once the site is live would be my next step. Opportunities for YRP to expand the design system into more print and digital mediums would represent a visual consistency and maturity that the brand definitely needs to maintain the new community focused brand image.efining behavioural success metrics upfront — task completion rates, time-on-task, bounce rates — would have made the impact story measurable, not just qualitative.',
                },
                {
                  label: 'Workflow',
                  text: 'AI-assisted front-end QA is the workflow I would add next time. This includes comparing developer output directly against design specs and generating grounded feedback.',
                },
                {
                  label: 'Differentiator',
                  text: 'Lived community knowledge was a professional differentiator when designing for public institutions that affect you.',
                },
                {
                  label: 'Risk management',
                  text: 'Having tiers of approvals go smoothly was a challenge that required both client trust as well as communicating our designs effectively and intuitively.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
                  className="border-t border-rule-light pt-6"
                >
                  <span className="text-fog-600 text-xs font-body uppercase tracking-widest block mb-2">{item.label}</span>
                  <p className="text-fog-600 font-body text-base leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <ScrollReveal delay={0.2} className="mt-12">
              <img src="/yrp-end.webp" 
              className="w-full aspect-video rounded-lg"
              />
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </section>

      {/* ── NEXT PROJECT / CTA ── */}
      <section className="bg-ink-950 px-6 md:px-10 py-24 border-t border-slate-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <ScrollReveal>
            <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-3">Next</p>
            <Link to="/" className="font-heading font-bold text-fog-50 hover:text-white transition-colors duration-200 inline-flex items-center gap-3"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)', letterSpacing: '-0.02em' }}
            >
              Back to all work
              <span className="text-base">→</span>
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
