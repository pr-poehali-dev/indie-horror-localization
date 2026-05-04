type Page = "home" | "news" | "russifiers";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
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

      {/* Big banner block */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[2rem] bg-[#f0f000] p-6 flex items-stretch gap-4 min-h-[320px]">
            {/* Left dot */}
            <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#00e5a0] z-10" />

            {/* Left half — yellow, text */}
            <div className="flex-1 flex flex-col justify-center pr-4 pl-4">
              <p className="font-black text-2xl md:text-3xl uppercase text-black leading-tight mb-6">
                Каталог<br />русификаторов
              </p>
              <p className="font-body text-base text-black/70 leading-relaxed mb-8 max-w-xs">
                Актуальные переводы для игр — с поиском и фильтрацией по версиям.
              </p>
              <button
                onClick={() => onNavigate("russifiers")}
                className="self-start px-6 py-3 bg-black text-white font-black text-sm uppercase rounded-full hover:bg-[#222] transition-colors"
              >
                Смотреть каталог
              </button>
            </div>

            {/* Right block — teal */}
            <div className="flex-1 bg-[#2ab8c0] rounded-[1.5rem] flex flex-col justify-center items-center p-8 text-white">
              <div className="font-black text-6xl md:text-7xl leading-none mb-2">1200+</div>
              <div className="font-black text-lg uppercase tracking-wide opacity-80">русификаторов</div>
              <div className="mt-8 grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <div className="font-black text-3xl">340+</div>
                  <div className="text-sm uppercase opacity-70 mt-1">игр</div>
                </div>
                <div className="text-center">
                  <div className="font-black text-3xl">80+</div>
                  <div className="text-sm uppercase opacity-70 mt-1">команд</div>
                </div>
              </div>
            </div>

            {/* Right dot */}
            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#00e5a0] z-10" />
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
