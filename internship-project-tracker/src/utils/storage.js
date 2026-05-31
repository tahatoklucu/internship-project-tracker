const KEY = 'staj_projeleri';

export const getProjects = () => {
  if (typeof window === 'undefined') return [];

  const data = localStorage.getItem(KEY);
  if (!data) return [];

  try {
    return JSON.parse(data);
  } catch (error) {
    console.error('LocalStorage veri okuma hatası, sıfırlanıyor:', error);
    localStorage.removeItem(KEY);
    return [];
  }
};

export const saveProjects = (projects) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(KEY, JSON.stringify(projects));
    } catch (error) {
      console.error('LocalStorage veri yazma hatası:', error);
    }
  }
};