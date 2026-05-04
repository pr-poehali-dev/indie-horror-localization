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
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>{renderPage()}</main>
      <footer className="border-t border-[var(--color-border)] px-6 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span className="font-display text-sm font-bold text-[var(--color-accent)]">
            RuLoc
          </span>
          <span className="font-body text-xs text-[var(--color-muted)]">
            © 2026 — Каталог русификаторов
          </span>
        </div>
      </footer>
    </div>
  );
}
