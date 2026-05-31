import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center p-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative bg-gray-950/20 backdrop-blur-xl border border-white/10 max-w-md w-full rounded-2xl p-8 text-center shadow-2xl overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 to-indigo-600 mb-2 tracking-tighter">
          404
        </h1>
        <h2 className="text-xl font-bold text-white tracking-tight mb-2">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-6">
          Aradığınız staj takip sayfası mevcut değil veya taşınmış olabilir.
        </p>
        <Link
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-600/20 transition-all cursor-pointer active:scale-95"
        >
          Paneline Geri Dön
        </Link>
      </div>
    </main>
  );
}
