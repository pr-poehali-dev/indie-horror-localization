import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "news" | "russifiers";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems = [
  { id: "news" as Page, label: "НОВОСТИ" },
  { id: "russifiers" as Page, label: "РУСИФИКАТОРЫ" },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#b0b0b0] px-6 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-16 h-16 rounded-full bg-white border-4 border-black flex items-center justify-center">
            <span className="font-black text-black text-lg leading-none tracking-tighter select-none">
              ХКР
            </span>
          </div>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-5 py-2 rounded-full font-black text-sm tracking-wide transition-all duration-200 ${
                currentPage === item.id
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-black text-white hover:bg-[#333]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-2 pb-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className="w-full text-left px-5 py-3 rounded-full bg-black text-white font-black text-sm tracking-wide"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
