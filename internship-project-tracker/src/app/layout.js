import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Staj & Proje Takip Dashboard",
  description: "Geliştirme süreçlerinizi ve çalışma saatlerinizi yönetin.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="h-full">
      <body
        className={`${inter.className} bg-[#0b0f19] text-gray-100 min-h-screen flex flex-col relative antialiased`}
        style={{ minHeight: "100dvh" }}
      >
        <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="hidden md:block absolute top-[20%] right-[-10%] w-[45vw] h-[45vw] bg-emerald-500/3 blur-[130px] rounded-full pointer-events-none" />
        <div className="hidden md:block absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-500/4 blur-[140px] rounded-full pointer-events-none" />
        <div className="flex-1 w-full relative z-10 flex flex-col overflow-x-hidden">
          {children}
        </div>
        
        <Footer />
      </body>
    </html>
  );
}