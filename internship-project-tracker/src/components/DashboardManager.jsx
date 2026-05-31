'use client';

import { useState, useEffect } from 'react';
import { getProjects, saveProjects } from '@/utils/storage';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import StatCard from '@/components/StatCard';

export default function DashboardManager() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    setProjects(getProjects());
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
        createdAt: new Date().toLocaleDateString('tr-TR'),
        ...projectData
      };
      updatedProjects = [...projects, newProject];
    }

    setProjects(updatedProjects);
    saveProjects(updatedProjects);
    setIsModalOpen(false);
    setEditingProject(null);
  };

  const handleDeleteProject = (id) => {
    if (confirm('Bu projeyi listeden kaldırmak istediğinize emin misiniz?')) {
      const updatedProjects = projects.filter((p) => p.id !== id);
      setProjects(updatedProjects);
      saveProjects(updatedProjects);
    }
  };

  const handleEditClick = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const totalDuration = projects.reduce((sum, p) => sum + Number(p.duration || 0), 0);
  const completedCount = projects.filter(p => p.status === 'Tamamlandı').length;

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">Staj & Proje Takip Dashboard'u</h1>
          <p className="text-gray-400 text-sm mt-1">Geliştirdiğiniz projeleri ve çalışma sürelerinizi tek bir yerden yönetin.</p>
        </div>
        <button 
          onClick={() => { setEditingProject(null); setIsModalOpen(true); }}
          className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-indigo-600/20 transition-all duration-150 active:scale-95 cursor-pointer"
        >
          + Yeni Görev/Proje Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8">
        <StatCard title="Toplam Proje / Görev" value={projects.length} color="border-indigo-500" />
        <StatCard title="Tamamlanan İşler" value={completedCount} color="border-green-500" />
        <StatCard title="Toplam Mesai Süresi" value={`${totalDuration} Saat`} color="border-amber-500" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length === 0 ? (
          <div className="col-span-full border border-dashed border-gray-700 rounded-2xl p-12 text-center bg-gray-800/20">
            <p className="text-gray-500 text-lg mb-2">Görüntülenecek hiçbir veri bulunamadı.</p>
            <p className="text-gray-600 text-sm">İlk staj projenizi ekleyerek listeyi canlandırın!</p>
          </div>
        ) : (
          projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onEdit={handleEditClick}
              onDelete={handleDeleteProject}
            />
          ))
        )}
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => { setIsModalOpen(false); setEditingProject(null); }}
        onSave={handleSaveProject}
        editingProject={editingProject}
      />
    </>
  );
}