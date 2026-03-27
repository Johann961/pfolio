import ScrollReveal from './ScrollReveal';

export default function PullQuote({ children, dark = false }) {
  return (
    <ScrollReveal>
      <blockquote className={`border-l-2 pl-8 py-4 ${
        dark
          ? 'border-fog-50 text-fog-50'
          : 'border-ink-950 text-ink-950'
      }`}>
        <p className="font-heading font-bold text-display-sm leading-tight">
          {children}
        </p>
      </blockquote>
    </ScrollReveal>
  );
}
