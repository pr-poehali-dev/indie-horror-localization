import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "news" | "russifiers";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  { id: "home" as Page, label: "Главная" },
  { id: "news" as Page, label: "Новости" },
  { id: "russifiers" as Page, label: "Русификаторы" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg)]/90 backdrop-blur-sm border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="font-display text-xl font-bold text-[var(--color-accent)] tracking-tight hover:opacity-80 transition-opacity"
        >
          RuLoc
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-body text-sm tracking-wide transition-all duration-200 pb-0.5 border-b ${
                currentPage === item.id
                  ? "text-[var(--color-accent)] border-[var(--color-accent)]"
                  : "text-[var(--color-muted)] border-transparent hover:text-[var(--color-text)] hover:border-[var(--color-border)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-bg)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`w-full text-left px-6 py-4 font-body text-sm border-b border-[var(--color-border)] transition-colors ${
                currentPage === item.id
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
