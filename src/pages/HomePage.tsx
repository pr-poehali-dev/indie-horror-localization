import { useState } from "react";
import Icon from "@/components/ui/icon";

type Page = "home" | "news" | "russifiers";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const slides = [
  {
    id: 1,
    game: "Cyberpunk 2077",
    title: "Полный русификатор",
    team: "RuCyber",
    version: "2.2.1",
    updated: "02.05.2026",
    type: "Текст + озвучка",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1c1c1c 40%, #2a2a2a 100%)",
  },
  {
    id: 2,
    game: "Avowed",
    title: "Полный перевод",
    team: "Скитальцы",
    version: "1.2",
    updated: "28.04.2026",
    type: "Текст + субтитры",
    bg: "linear-gradient(135deg, #111 0%, #1e1e1e 50%, #2c2c2c 100%)",
  },
  {
    id: 3,
    game: "Baldur's Gate 3",
    title: "Русификатор текста",
    team: "BG3-RU",
    version: "3.1.0",
    updated: "08.04.2026",
    type: "Только текст",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #181818 50%, #252525 100%)",
  },
  {
    id: 4,
    game: "The Witcher 3",
    title: "HD-русификатор",
    team: "WitcherRU",
    version: "1.32",
    updated: "22.11.2025",
    type: "Текст + озвучка",
    bg: "linear-gradient(135deg, #0e0e0e 0%, #1a1a1a 50%, #282828 100%)",
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  const slide = slides[active];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero title */}
      <section className="px-6 pt-10 pb-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-black text-[clamp(2.5rem,8vw,6rem)] uppercase leading-none tracking-tight text-black">
            ГЛАВНАЯ СТРАНИЦА
          </h1>
        </div>
      </section>

      {/* Slider */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div
            className="relative rounded-[2rem] overflow-hidden min-h-[340px] flex items-stretch transition-all duration-500"
            style={{ background: slide.bg }}
          >
            {/* Noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                backgroundSize: "200px 200px",
              }}
            />

            {/* Left arrow */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>

            {/* Right arrow */}
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            >
              <Icon name="ChevronRight" size={20} />
            </button>

            {/* Slide content */}
            <div className="flex w-full">
              {/* Left: info */}
              <div className="flex-1 flex flex-col justify-center px-16 py-10">
                <span className="font-black text-xs uppercase tracking-[0.2em] text-white/40 mb-3 block">
                  Новый русификатор
                </span>
                <h2 className="font-black text-[clamp(1.5rem,4vw,3rem)] uppercase leading-none text-white mb-2">
                  {slide.game}
                </h2>
                <p className="font-black text-lg text-white/60 uppercase mb-6">
                  {slide.title}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="font-body text-xs text-white/50 border border-white/20 px-3 py-1 rounded-full">
                    {slide.type}
                  </span>
                  <span className="font-body text-xs text-white/50 border border-white/20 px-3 py-1 rounded-full">
                    v{slide.version}
                  </span>
                  <span className="font-body text-xs text-white/50 border border-white/20 px-3 py-1 rounded-full">
                    {slide.updated}
                  </span>
                </div>
                <button
                  onClick={() => onNavigate("russifiers")}
                  className="self-start px-6 py-3 bg-white text-black font-black text-sm uppercase rounded-full hover:bg-white/90 transition-colors"
                >
                  Смотреть
                </button>
              </div>

              {/* Right: glassmorphism card */}
              <div className="hidden md:flex w-[42%] items-center justify-center p-8">
                <div
                  className="w-full h-full min-h-[220px] rounded-2xl flex flex-col justify-between p-7"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  <div>
                    <span className="font-black text-xs text-white/30 uppercase tracking-widest block mb-3">
                      Команда-разработчик
                    </span>
                    <span className="font-black text-3xl text-white uppercase">
                      {slide.team}
                    </span>
                  </div>
                  <div className="w-full h-px bg-white/10 my-5" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="font-black text-xs text-white/30 uppercase tracking-widest block mb-1">
                        Версия
                      </span>
                      <span className="font-black text-xl text-white">{slide.version}</span>
                    </div>
                    <div>
                      <span className="font-black text-xs text-white/30 uppercase tracking-widest block mb-1">
                        Обновлён
                      </span>
                      <span className="font-black text-sm text-white">{slide.updated}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? "w-6 h-2 bg-white"
                      : "w-2 h-2 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* О команде section */}
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-black text-[clamp(2rem,6vw,4rem)] uppercase leading-none tracking-tight text-black mb-10">
            О КОМАНДЕ
          </h2>
          <div className="max-w-2xl">
            <p className="font-body text-base text-black leading-relaxed mb-4">
              Мы — сообщество энтузиастов, которые делают зарубежные игры доступными на русском языке.
              Каждый русификатор проходит проверку качества перед публикацией.
            </p>
            <p className="font-body text-base text-black leading-relaxed">
              В нашем каталоге собраны лучшие переводы — от полной озвучки до адаптации интерфейса.
              Регулярные обновления гарантируют совместимость с актуальными версиями игр.
            </p>
          </div>
        </div>
      </section>

      {/* Новости preview */}
      <section className="px-6 py-10 bg-[#f5f5f5]">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-8">
          <h2 className="font-black text-[clamp(1.8rem,5vw,3.5rem)] uppercase leading-none tracking-tight text-black">
            НОВОСТИ
          </h2>
          <button
            onClick={() => onNavigate("news")}
            className="px-5 py-2.5 bg-black text-white font-black text-sm uppercase rounded-full hover:bg-[#333] transition-colors"
          >
            Все новости
          </button>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { tag: "Обновление", title: "Cyberpunk 2077 — v2.2.1", date: "02.05.2026" },
            { tag: "Новый перевод", title: "Avowed — полный перевод", date: "28.04.2026" },
            { tag: "Анонс", title: "Clair Obscur — работа начата", date: "21.04.2026" },
          ].map((n) => (
            <div
              key={n.title}
              onClick={() => onNavigate("news")}
              className="bg-white rounded-2xl p-5 border-2 border-black cursor-pointer hover:bg-[#f0f000] transition-colors group"
            >
              <span className="font-black text-xs uppercase tracking-wide text-black/50 group-hover:text-black/70">
                {n.tag}
              </span>
              <h3 className="font-black text-lg leading-tight mt-2 mb-3 text-black">
                {n.title}
              </h3>
              <span className="font-body text-xs text-black/40">{n.date}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
