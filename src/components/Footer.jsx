export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-slate-border">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <span className="font-heading font-bold text-fog-50 text-sm tracking-widest uppercase">
            Johann Ting
          </span>
          <p className="text-fog-600 text-xs mt-1 font-body">
            Senior UI/UX Designer · Toronto
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="mailto:ting.johann@gmail.com"
            className="text-fog-400 hover:text-fog-50 text-sm font-body transition-colors duration-200"
          >
            ting.johann@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/johann-ting-20709879/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fog-400 hover:text-fog-50 text-sm font-body transition-colors duration-200"
          >
            LinkedIn
          </a>
        </div>
        <p className="text-fog-600 text-xs font-body">
          © {new Date().getFullYear()} Johann Ting
        </p>
      </div>
    </footer>
  );
}
