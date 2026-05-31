export default function ProjectCard({ project, onEdit, onDelete }) {
  const statusColors = {
    Planlandı: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Devam Ediyor": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Tamamlandı: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  };

  return (
    <div className="relative bg-gray-950/30 backdrop-blur-md border border-gray-850/60 rounded-xl p-5 shadow-xl hover:border-gray-700/80 transition-all duration-200 flex flex-col justify-between group overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        <div className="flex justify-between items-center mb-4">
          <span
            className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>
          <span className="text-xs text-gray-500 font-medium">
            {project.createdAt}
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-100 mb-2 tracking-tight group-hover:text-white transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-3 min-h-[60px]">
          {project.description || "Bu görev için bir açıklama girilmedi."}
        </p>

        <div className="mb-5">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack ? (
              project.techStack.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-900/80 border border-gray-800 text-gray-400 text-[11px] font-medium px-2 py-0.5 rounded-md"
                >
                  {tech.trim()}
                </span>
              ))
            ) : (
              <span className="text-xs text-gray-600 italic">
                Teknoloji belirtilmedi
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-850/60 pt-4 flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
          <span className="text-base">⏱️</span>
          <span className="font-bold text-gray-200 text-sm">
            {project.duration}
          </span>{" "}
          Saat
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(project)}
            className="text-xs font-semibold bg-gray-900 hover:bg-gray-800 text-indigo-400 border border-gray-800 hover:border-gray-700 px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer"
          >
            Düzenle
          </button>
          <button
            onClick={() => onDelete(project.id)}
            className="text-xs font-semibold bg-red-950/20 hover:bg-red-950/50 text-red-400 border border-red-900/30 hover:border-red-900/50 px-3 py-1.5 rounded-lg transition-all active:scale-95 cursor-pointer"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
}
