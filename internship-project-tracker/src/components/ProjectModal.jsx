import { useState, useEffect } from "react";

export default function ProjectModal({
  isOpen,
  onClose,
  onSave,
  editingProject,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    techStack: "",
    status: "Planlandı",
    duration: "",
  });

  useEffect(() => {
    if (editingProject) {
      setFormData(editingProject);
    } else {
      setFormData({
        title: "",
        description: "",
        techStack: "",
        status: "Planlandı",
        duration: "",
      });
    }
  }, [editingProject, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.duration) {
      alert("Lütfen zorunlu alanları doldurun.");
      return;
    }
    onSave(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="relative bg-[#0d1324]/70 backdrop-blur-xl border border-white/10 w-full max-w-md rounded-2xl p-6 shadow-[0_0_50px_-12px_rgba(99,102,241,0.15)] animate-in zoom-in-95 duration-200 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-5 tracking-tight">
          {editingProject
            ? "🚀 Proje Detaylarını Düzenle"
            : "✨ Yeni Staj Görevi Ekle"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Proje / Görev Adı *
            </label>
            <input
              type="text"
              className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              placeholder="Örn: Figma UI Tasarımlarının Koda Dökülmesi"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Açıklama
            </label>
            <textarea
              rows="3"
              className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="Neler yaptın? Teknik detaylardan bahset..."
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
              Kullanılan Teknolojiler
            </label>
            <input
              type="text"
              className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
              value={formData.techStack}
              onChange={(e) =>
                setFormData({ ...formData, techStack: e.target.value })
              }
              placeholder="React, Tailwind CSS, LocalStorage"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Durum
              </label>
              <div className="relative">
                <select
                  className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500/50 transition-all appearance-none cursor-pointer"
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.target.value })
                  }
                >
                  <option value="Planlandı" className="bg-[#0b0f19]">
                    Planlandı
                  </option>
                  <option value="Devam Ediyor" className="bg-[#0b0f19]">
                    Devam Ediyor
                  </option>
                  <option value="Tamamlandı" className="bg-[#0b0f19]">
                    Tamamlandı
                  </option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs">
                  ▼
                </span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">
                Süre (Saat) *
              </label>
              <input
                type="number"
                min="0"
                className="w-full bg-black/40 border border-white/5 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
                placeholder="4"
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-white/5 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 text-xs font-semibold px-4 py-2 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              İptal
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all active:scale-95 cursor-pointer"
            >
              {editingProject ? "Değişiklikleri Kaydet" : "Listeye Ekle"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
