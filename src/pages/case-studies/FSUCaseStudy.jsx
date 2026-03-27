import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AssetPlaceholder from '../../components/AssetPlaceholder';
import ScrollReveal from '../../components/ScrollReveal';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function FSUCaseStudy() {
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
            {["UI/UX Design", "Design Systems", "Higher Education", "Brand"].map(tag => (
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
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.8rem)", letterSpacing: "-0.03em", lineHeight: "1.05" }}
          >
            I redesigned FSU's Anne's College website and it became the standard for the whole university.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex flex-wrap gap-8 border-t border-slate-border pt-6 mb-14"
          >
            {[
              { label: "Role", value: "Sole UI/UX Designer" },
              { label: "Client", value: "Anne's College, FSU" },
              { label: "Deliverable", value: "Design System + Website" },
              { label: "Outcome", value: "University-wide standard" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 min-w-[120px]">
                <span className="text-fog-600 uppercase tracking-wider text-xs font-body">{label}</span>
                <span className="text-fog-100 text-sm font-body">{value}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          >
            <img
              src="/fsu-hero.jpg"
              className="w-full aspect-video rounded-t-xl rounded-b-none"
            />
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: STAKES ── White, prototype framing + before/after */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-12 gap-10 items-start mb-16">
            <ScrollReveal className="md:col-span-7">
              <h2
                className="font-heading font-bold text-ink-950"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                Anne's College was the prototype for FSU's revamped design identity.
              </h2>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-4 md:col-start-9" delay={0.1}>
              <p className="text-fog-600 font-body text-base leading-relaxed">
                From the outset, every design decision was being evaluated on two levels: how it served Anne's College's prospective students, and whether it could scale across FSU's entire web and design ecosystem. Every other department in the university would scrutinize this work but If it held up, it became the new standard for every FSU college site. This could lead to more engagement with other departments.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal className="grid md:grid-cols-2 gap-4 mb-10">
            <img
              src="/fsu-header.jpg"
              className="w-full aspect-[16/10] rounded-xl"
            />
            <img
              src="/fsu-icons.jpg"
              className="w-full aspect-[16/10] rounded-xl"
            />
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1", label: "College site that became a university standard" },
              { value: "6", label: "Departments unified under one system" },
              { value: "✓", label: "Adopted university-wide by FSU" },
              { value: "✓", label: "Rolled out to external vendors" },
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

      {/* ── SECTION 3: THE SYSTEM GAP ── Blue-gray */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ backgroundColor: "#D5DEE8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="md:col-span-7" delay={0.1}>
              <img
                src="/fsu-websystem.jpg"
                className="w-full aspect-[16/10] rounded-xl"
              />
            </ScrollReveal>
            <ScrollReveal className="md:col-span-5">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">The Real Problem</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.025em", lineHeight: "1.1" }}
              >
                FSU's web system gave departments a bland looking container for content with no flexible tools to shape how it felt.
              </h2>
              <div className="space-y-4">
                <p className="font-body text-base leading-relaxed" style={{ color: "#2a2a35" }}>
                  The existing FSU sites relied on a basic web template provied by their vendor. There were no design considerations. Just basic text systems, brand colours applied, and a couple card teaser types. Across the university, the result was a lowest-common-denominator, templated digital presence that served no audience particularly well.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#2a2a35" }}>
                  For Anne's College specifically, a content-rich program spanning multiple departments had no visual language to help prospective students understand it holistically. Without hierarchy or narrative flow, everything felt equally weighted leading to nothing standing out.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: CONSTRAINTS ── White, dual audience */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.025em", lineHeight: "1.1" }}
              >
                Every design decision had to serve Anne's College and be legible to every other FSU department simultaneously.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  Components had to be specific enough to be compelling for Anne's College and flexible enough that other departments could see their own content fitting into them.
                </p>
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  The guiding policy was clear: extend the FSU brand, don't stray away from or replace it. Drawing specifically from the brand colours and the torn paper motif already present in recent FSU marketing materials, I aimed to evolve the FSU web experience into something with real personality.
                </p>
              </div>
              <div className="border-t border-rule-light pt-6 space-y-4">
                <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Working Constraints</p>
                {[
                  "CMS constraints within FSU's templated system — component flexibility was limited by default",
                  "Institutional scrutiny from every other FSU department reviewing the work",
                  "The torn paper aesthetic — a tactile, analogue motif that needed precision handling to avoid becoming a cliché",
                  "Designing a proof-of-concept that had to double as a scalable system spec for external vendors",
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
                src="/fsu-feat.jpg"
                className="w-full aspect-[3/4] rounded-xl"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: THE MOTIF ── Dark */}
      <section className="bg-ink-950 px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">Design Decision</p>
              <h2
                className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.025em", lineHeight: "1.1" }}
              >
                The torn paper motif was already in FSU's DNA through some poster and social campaigns. The question was how to handle it for web.
              </h2>
              <div className="space-y-4">
                <p className="text-fog-400 font-body text-base leading-relaxed">
                  The tactile, analogue quality of the torn paper element evokes craftsmanship and higher learning. A notebook feel that is conceptually grounded, not unneccessarily decorative. It was the kind of distinctive element that could become a cliché if not properly used or if overused.
                </p>
                <p className="text-fog-400 font-body text-base leading-relaxed">
                  The decision was to make it optional and toggleable: available as a divider between modular sections, and used selectively in specific landing and program page banner components. That restraint was important as future teams across FSU could use it with with intent rather than defaulting to it everywhere.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <img
                src="/fsu-torn1.webp"
                className="w-full aspect-[3/4] rounded-xl"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <img
              src="/fsu-torn2.webp"
              className="w-full aspect-[21/9]"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 6: UX STRATEGY ── Blue-gray, narrative arc */}
      <section className="px-6 md:px-16 py-20 md:py-28" style={{ backgroundColor: "#D5DEE8" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <ScrollReveal className="md:col-span-5">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">UX Strategy</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.025em", lineHeight: "1.1" }}
              >
                The site was designed to guide prospective students through a decision, not just present information.
              </h2>
              <div className="space-y-4">
                <p className="font-body text-base leading-relaxed" style={{ color: "#2a2a35" }}>
                  Working with the Anne's College team and UX research, I structured program pages as a narrative arc. The introduction, academic structure, student experience, outcomes, and calls to action were grounded in how prospective students actually move through a decision. That sequence replaced the previous approach of content sections with no connective logic.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#2a2a35" }}>
                  The modular component library was the other pillar: hero sections, program overview modules, curriculum layouts, student highlights, and CTA banners - all designed to function independently and contribute to a coherent whole.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-7" delay={0.1}>
              <img
                src="/fsu-hand.jpg"
                className="w-full object-contain rounded-lg"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: CO-OWNERSHIP ── White */}
      <section className="bg-white px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <ScrollReveal delay={0.12}>
              <img
                src="/fsu-mobilemenu.jpg"
                className="w-full aspect-[3/4] rounded-xl"
              />
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">Process</p>
              <h2
                className="font-heading font-bold text-ink-950 mb-6"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", letterSpacing: "-0.025em", lineHeight: "1.1" }}
              >
                Co-ownership with the internal team was the strategy that made university-wide approval possible.
              </h2>
              <div className="space-y-4">
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  I worked directly with Anne's College's communications director and internal graphic designer throughout. While presenting finished work for review, we got immediate feedback in our review sessions to act on together.
                </p>
                <p className="text-fog-600 font-body text-base leading-relaxed">
                  When the designs went to FSU central and other departments for approval, the Anne's College team didn't just sign off on the rationale - they championed it with confidence because they'd been part of constructing it. The inter-departmental political risk that existed at the outset was largely neutralized by the quality of that internal advocacy. This was important as even though we provided rationale and supporting docs, there was no guarantee that they'd even go through it.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: OUTCOME ── Dark */}
      <section className="bg-ink-900 px-6 md:px-16 py-20 md:py-28 border-t border-slate-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 mb-14">
            <ScrollReveal className="md:col-span-8">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-5">The Outcome</p>
              <h2
                className="font-heading font-bold text-fog-50 mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)", letterSpacing: "-0.03em", lineHeight: "1.1" }}
              >
                FSU formally adopted the system as the new standard for all university web properties.
              </h2>
              <div className="space-y-4 mb-8">
                <p className="text-fog-400 font-body text-base leading-relaxed max-w-2xl">
                  The Anne's College site launched with a structured, modular experience and clear narrative hierarchy for prospective students. But the big picture outcome was the institutional decision that followed: FSU adopted the design system university-wide, including rollout to external vendors.
                </p>
                <p className="text-fog-400 font-body text-base leading-relaxed max-w-2xl">
                  Component documentation produced alongside the original comps became the spec that external teams built from.
                </p>
              </div>
              <div className="inline-flex items-center gap-3 bg-green-800 text-white font-heading font-bold text-sm uppercase tracking-widest px-6 py-4 rounded-full">
                <span>✓</span>
                Anne's College was the prototype. The entire FSU web ecosystem became the outcome.
              </div>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-1">
            <ScrollReveal>
              <img
                src="/fsu-ending.jpg"
                className="w-full object-contain rounded-lg"
              />
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: "1", label: "Prototype that became the standard" },
              { value: "6", label: "Departments unified" },
              { value: "✓", label: "University-wide adoption" },
              { value: "✓", label: "External vendor rollout" },
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

      {/* ── SECTION 9: LEARNINGS ── Light gray */}
      <section className="bg-paper px-6 md:px-16 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <ScrollReveal className="md:col-span-4">
              <p className="text-fog-600 text-xs font-body uppercase tracking-widest mb-4">Reflection</p>
              <h2
                className="font-heading font-bold text-ink-950"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", letterSpacing: "-0.025em", lineHeight: "1.15" }}
              >
                What I learned and what comes next.
              </h2>
            </ScrollReveal>

            <ScrollReveal className="md:col-span-7 md:col-start-6" delay={0.1}>
              {[
                { label: "Approval process", text: "The departmental approval process should have been led by the design team, not handed off as when rationale travels without the designer in the room, it can be diluted or met with unanswered technical questions. On a project this politically complex, that's a real risk." },
                { label: "Co-ownership", text: "Co-ownership with the client's internal team from the start isn't just good process, it was the most effective political strategy available on this multi-stakeholder institutional project." },
                { label: "Research workflow", text: "AI-assisted UX research synthesis would have meaningfully accelerated the discovery phase; processing large research volumes manually was a big task." },
                { label: "QA workflow", text: "AI-assisted front-end QA would have replaced significant manual effort during development handoff as comparing output against specs and generating actionable developer feedback rather than testing fixes by hand." },
                { label: "Reflection", text: "Apart from settign the standard for the FSU web prescence, they took our guidance to consistently design their social media, marketing materials, booklets, etc. accordingly. This tied a neat bow on the design identity of FSU that will hold for a long time." },
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

          <ScrollReveal>
            <img
              src="/fsu-desktop.jpg"
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
