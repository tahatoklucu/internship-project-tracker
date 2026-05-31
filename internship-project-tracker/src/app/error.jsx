'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error('Uygulama Hatası:', error);
  }, [error]);

  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative bg-gray-950/20 backdrop-blur-xl border border-white/10 max-w-md w-full rounded-2xl p-8 text-center shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
        
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-350 tracking-tight mb-2">
          Bir Şeyler Ters Gitti
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Sistem çalışırken beklenmedik bir donma veya hata meydana geldi. Geliştirici konsolu bilgilendirildi.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-white/5 hover:bg-white/10 border border-white/5 text-gray-300 text-xs font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer active:scale-95"
          >
            Sayfayı Yenile
          </button>
          <button
            onClick={() => reset()}
            className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-red-600/20 transition-all cursor-pointer active:scale-95"
          >
            Yeniden Dene
          </button>
        </div>
      </div>
    </main>
  );
}