export default function ProjectCard({ project, onEdit, onDelete }) {
    const statusColors = {
      'Planlandı': 'bg-blue-950 text-blue-400 border-blue-800',
      'Devam Ediyor': 'bg-amber-950 text-amber-400 border-amber-800',
      'Tamamlandı': 'bg-green-950 text-green-400 border-green-800',
    };
  
    return (
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-md hover:border-gray-600 transition-all flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
              {project.status}
            </span>
            <span className="text-xs text-gray-500">{project.createdAt}</span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-3 min-h-[60px]">{project.description}</p>
          
          <div className="mb-4">
            <p className="text-xs text-gray-500 font-medium uppercase mb-1">Teknolojiler</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.split(',').map((tech, index) => (
                <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded">
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>
  
        <div className="border-t border-gray-700 pt-4 flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">
            ⏱️ <span className="font-semibold text-gray-200">{project.duration}</span> Saat
          </span>
          <div className="flex gap-2">
            <button 
              onClick={() => onEdit(project)}
              className="text-sm bg-gray-700 hover:bg-gray-600 text-indigo-400 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Düzenle
            </button>
            <button 
              onClick={() => onDelete(project.id)}
              className="text-sm bg-red-950/40 hover:bg-red-900/60 text-red-400 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              Sil
            </button>
          </div>
        </div>
      </div>
    );
  }