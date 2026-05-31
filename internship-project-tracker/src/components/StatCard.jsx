export default function StatCard({ title, value, color }) {
  const glowColors = {
    "border-indigo": "from-indigo-500/30",
    "border-emerald": "from-emerald-500/30",
    "border-amber": "from-amber-500/30",
  };

  const selectedGlow = glowColors[color] || "from-white/10";

  return (
    <div className="relative bg-gray-950/20 backdrop-blur-md p-6 rounded-xl border border-white/10 shadow-xl overflow-hidden group">
      <div
        className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${selectedGlow} via-transparent to-transparent`}
      />

      <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
        {title}
      </p>
      <p className="text-3xl font-extrabold text-white mt-3 tracking-tight group-hover:translate-x-1 transition-transform duration-200">
        {value}
      </p>
    </div>
  );
}
