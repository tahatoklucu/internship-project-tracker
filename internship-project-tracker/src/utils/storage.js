const KEY = 'staj_projeleri';

export const getProjects = () => {
  if (typeof window === 'undefined') return [];
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveProjects = (projects) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(KEY, JSON.stringify(projects));
  }
};