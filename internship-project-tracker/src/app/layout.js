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
      <body className={`${inter.className} bg-[#0b0f19] text-gray-100 min-h-[100dvh] flex flex-col relative antialiased overflow-x-hidden`}>
        <div className="flex-1 w-full max-w-full relative z-10 flex flex-col px-0 m-0 overflow-x-hidden">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}