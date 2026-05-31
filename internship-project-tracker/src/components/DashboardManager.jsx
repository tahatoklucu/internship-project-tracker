"use client";

import { useState, useEffect } from "react";
import { getProjects, saveProjects } from "@/utils/storage";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import StatCard from "@/components/StatCard";

export default function DashboardManager() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = () => {
      try {
        const localData = getProjects();
        setProjects(localData || []);
      } catch (err) {
        console.error("Data loading error:", err);
      } finally {
        setTimeout(() => {
          setIsLoading(false);
        }, 50);
      }
    };

    loadData();
  }, []);

  const handleSaveProject = (projectData) => {
    let updatedProjects;

    if (editingProject) {
      updatedProjects = projects.map((p) =>
        p.id === editingProject.id ? { ...p, ...projectData } : p
      );
    } else {
      const newProject = {
        id: Date.now().toString(),
        createdAt: new Date().toLocaleDateString("tr-TR"),
        ...projectData,
      };
      updatedProjects = [...projects, newProject];
    }

    setProjects(updatedProjects);
    saveProjects(updatedProjects);
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    if (confirm("Bu projeyi listeden kaldırmak istediğinize emin misiniz?")) {
      const updatedProjects = projects.filter((p) => p.id !== id);
      setProjects(updatedProjects);
      saveProjects(updatedProjects);
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const totalDuration = projects.reduce(
    (sum, p) => sum + Number(p.duration || 0),
    0
  );
  const completedCount = projects.filter(
    (p) => p.status === "Tamamlandı"
  ).length;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 mb-10 relative">
        <div className="absolute -top-20 -left-10 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight">
            Staj & Proje Takip Paneli
          </h1>
          <p className="text-gray-400 text-sm mt-1.5 font-medium">
            Geliştirdiğiniz projeleri ve çalışma sürelerinizi tek bir yerden
            yönetin.
          </p>
        </div>
        <button
          onClick={() => {
            setEditingProject(null);
            setIsModalOpen(true);
          }}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-5 py-3 rounded-xl shadow-lg shadow-indigo-600/15 transition-all duration-150 active:scale-95 cursor-pointer relative z-10"
        >
          + Yeni Görev/Proje Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <StatCard
          title="Toplam Proje / Görev"
          value={isLoading ? "..." : projects.length}
          color="border-indigo"
        />
        <StatCard
          title="Tamamlanan İşler"
          value={isLoading ? "..." : completedCount}
          color="border-emerald"
        />
        <StatCard
          title="Toplam Mesai Süresi"
          value={isLoading ? "..." : `${totalDuration} Saat`}
          color="border-amber"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[40vh]">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
          </div>
        ) : projects.length === 0 ? (
          <div className="col-span-full border border-dashed border-white/5 rounded-2xl p-16 text-center bg-gray-950/20 backdrop-blur-sm animate-in fade-in duration-200 h-fit">
            <p className="text-gray-400 font-semibold text-lg mb-1.5">
              Her şey tertemiz.
            </p>
            <p className="text-gray-500 text-sm max-w-sm mx-auto leading-relaxed">
              Henüz takip edilen bir veri bulunamadı. İlk staj projenizi
              ekleyerek listeyi canlandırın!
            </p>
          </div>
        ) : (
          projects.map((project) => (
            <div key={project.id} className="animate-in fade-in duration-300">
              <ProjectCard
                project={project}
                onEdit={handleEditClick}
                onDelete={handleDeleteProject}
              />
            </div>
          ))
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        editingProject={editingProject}
      />
    </>
  );
}