export default function AssetPlaceholder({ name, description, suggestedFormat, className = '' }) {
  return (
    <div className={`relative bg-slate-card border border-dashed border-slate-border rounded-lg flex flex-col items-center justify-center p-8 md:p-12 ${className}`}>
      <div className="text-fog-600 text-xs font-heading font-bold uppercase tracking-widest mb-3">
        {name}
      </div>
      <p className="text-fog-400 text-center max-w-md text-sm leading-relaxed font-body">
        {description}
      </p>
      {suggestedFormat && (
        <p className="text-fog-600 text-xs mt-3 italic font-body">
          Suggested: {suggestedFormat}
        </p>
      )}
      <p className="absolute bottom-3 right-4 text-fog-600 text-xs font-body opacity-50">
        Replace with your image
      </p>
    </div>
  );
}
