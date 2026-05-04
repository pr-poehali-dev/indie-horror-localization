const news = [
  {
    id: 1,
    date: "02 мая 2026",
    tag: "Обновление",
    title: "Cyberpunk 2077 — русификатор обновлён до версии 2.2.1",
    excerpt:
      "Команда RuCyber выпустила обновление перевода, исправляющее более 300 текстовых ошибок и улучшающее локализацию субтитров.",
    readTime: "3 мин",
  },
  {
    id: 2,
    date: "28 апреля 2026",
    tag: "Новый перевод",
    title: "Avowed — полный русификатор от команды «Скитальцы»",
    excerpt:
      "Долгожданный перевод ролевой игры Avowed вышел в полной версии. Переведены диалоги, субтитры, интерфейс и книги.",
    readTime: "5 мин",
  },
  {
    id: 3,
    date: "21 апреля 2026",
    tag: "Анонс",
    title: "Clair Obscur — анонс работы над русификацией",
    excerpt:
      "Команда FreeTrans анонсировала начало работы над переводом нашумевшей ролевой игры. Ожидаемый срок — конец июня.",
    readTime: "2 мин",
  },
  {
    id: 4,
    date: "15 апреля 2026",
    tag: "Инструменты",
    title: "Открытый инструментарий для создания русификаций",
    excerpt:
      "Энтузиасты выложили в открытый доступ набор инструментов для извлечения и замены текстов в играх на движке Unity.",
    readTime: "7 мин",
  },
  {
    id: 5,
    date: "8 апреля 2026",
    tag: "Обновление",
    title: "Baldur's Gate 3 — исправление перевода патча 7",
    excerpt:
      "Вышло критическое исправление для русификатора Baldur's Gate 3, устраняющее проблемы совместимости с последним патчем.",
    readTime: "4 мин",
  },
];

const tagColors: Record<string, string> = {
  "Обновление": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "Новый перевод": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Анонс": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Инструменты": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-6 pt-14 pb-20">
        <div className="mb-12">
          <span className="inline-block font-body text-xs tracking-[0.25em] uppercase text-[var(--color-accent)] mb-3 opacity-80">
            Лента
          </span>
          <h1 className="font-display text-4xl font-bold text-[var(--color-text)]">
            Новости
          </h1>
        </div>

        <div className="space-y-px">
          {news.map((item, i) => (
            <article
              key={item.id}
              className="group border border-[var(--color-border)] rounded-xl p-6 mb-3 hover:border-[var(--color-accent)] transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`font-body text-xs px-2.5 py-0.5 rounded-full border ${tagColors[item.tag] ?? "bg-gray-500/10 text-gray-400 border-gray-500/20"}`}
                >
                  {item.tag}
                </span>
                <span className="font-body text-xs text-[var(--color-muted)]">
                  {item.date}
                </span>
                <span className="font-body text-xs text-[var(--color-muted)] ml-auto">
                  {item.readTime} чтения
                </span>
              </div>
              <h2 className="font-display text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                {item.title}
              </h2>
              <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
