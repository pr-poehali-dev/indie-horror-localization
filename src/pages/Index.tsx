import { useState } from "react";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";
import NewsPage from "@/pages/NewsPage";
import RussifiersPage from "@/pages/RussifiersPage";

type Page = "home" | "news" | "russifiers";

export default function Index() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={setCurrentPage} />;
      case "news":
        return <NewsPage />;
      case "russifiers":
        return <RussifiersPage />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>

      {/* Footer — тёмный как на фото */}
      <footer className="bg-black text-white px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="font-body text-sm text-white/60">
            © ХКР 2026г. Все Права Защищены.
          </span>
          <div className="flex items-center gap-3">
            {/* VK */}
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:border-white transition-colors"
              aria-label="VK"
            >
              <span className="font-black text-xs">ВК</span>
            </a>
            {/* Telegram */}
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center hover:border-white transition-colors"
              aria-label="Telegram"
            >
              <span className="font-black text-xs">TG</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
