type Page = "home" | "news" | "russifiers";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const features = [
  {
    icon: "🌐",
    title: "Актуальные русификаторы",
    desc: "Каталог регулярно обновляется. Только проверенные переводы от опытных команд.",
  },
  {
    icon: "🔍",
    title: "Умный поиск",
    desc: "Найдите русификатор по названию игры, жанру или версии за секунды.",
  },
  {
    icon: "📰",
    title: "Новости локализации",
    desc: "Следите за выходом новых переводов и обновлений в мире русификаций.",
  },
];

const stats = [
  { value: "1 200+", label: "русификаторов" },
  { value: "340+", label: "игр" },
  { value: "80+", label: "команд" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block font-body text-xs tracking-[0.25em] uppercase text-[var(--color-accent)] mb-6 opacity-80">
            Центр русификаций
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-[var(--color-text)] leading-tight mb-6">
            Играй<br />
            <span className="text-[var(--color-accent)]">на русском</span>
          </h1>
          <p className="font-body text-lg text-[var(--color-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
            Каталог русификаторов для игр — актуальные переводы, удобный поиск
            и фильтрация по версиям.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate("russifiers")}
              className="px-8 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg)] font-body font-semibold text-sm tracking-wide rounded-lg hover:opacity-90 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => onNavigate("news")}
              className="px-8 py-3.5 border border-[var(--color-border)] text-[var(--color-text)] font-body font-semibold text-sm tracking-wide rounded-lg hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200"
            >
              Читать новости
            </button>
          </div>
        </div>

        {/* Decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent opacity-40" />
      </section>

      {/* Stats */}
      <section className="px-6 py-12 border-t border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center py-4">
              <div className="font-display text-3xl md:text-4xl font-bold text-[var(--color-accent)] mb-1">
                {s.value}
              </div>
              <div className="font-body text-sm text-[var(--color-muted)]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold text-[var(--color-text)] mb-12 text-center">
            Почему RuLoc?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="font-display text-base font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                  {f.title}
                </h3>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
