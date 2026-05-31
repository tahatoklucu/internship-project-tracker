export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950/20 backdrop-blur-md border-t border-white/5 mt-auto py-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
      <div className="absolute -bottom-10 left-1/4 w-72 h-32 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-10 right-1/4 w-72 h-32 bg-emerald-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-wide">
              Taha Toklucu
            </span>
          </div>
          <p className="text-xs text-gray-400 font-medium tracking-normal max-w-xs">
            Internship Project Tracker
          </p>
        </div>
        <div className="flex items-center gap-6 text-xs font-medium text-gray-400">
          <a
            href="#"
            className="hover:text-white transition-colors duration-150 flex items-center gap-1 group"
          >
            <span>GitHub</span>
            <span className="text-[10px] text-gray-600 group-hover:text-indigo-400 transition-colors">
              ↗
            </span>
          </a>
          <span className="h-3 w-px bg-white/10" />
          <a
            href="#"
            className="hover:text-white transition-colors duration-150 flex items-center gap-1 group"
          >
            <span>LinkedIn</span>
            <span className="text-[10px] text-gray-600 group-hover:text-indigo-400 transition-colors">
              ↗
            </span>
          </a>
          <span className="h-3 w-px bg-white/10" />
          <a
            href="#"
            className="hover:text-white transition-colors duration-150 flex items-center gap-1 group"
          >
            <span>Portfolyo</span>
            <span className="text-[10px] text-gray-600 group-hover:text-indigo-400 transition-colors">
              ↗
            </span>
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2 text-right">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-950/30 border border-indigo-900/30 text-indigo-400 text-[11px] font-semibold px-2.5 py-1 rounded-lg shadow-sm">
              Next.js & Tailwind & LocalStorage
            </span>
          </div>
          <p className="text-[11px] text-gray-500 font-normal">
            © {currentYear} • Crafting clean interfaces.
          </p>
        </div>
      </div>
    </footer>
  );
}
