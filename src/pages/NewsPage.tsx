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
  "Обновление": "bg-[#2ab8c0]/10 text-[#2ab8c0] border-[#2ab8c0]/30",
  "Новый перевод": "bg-[#00e5a0]/10 text-emerald-600 border-[#00e5a0]/30",
  "Анонс": "bg-[#f0f000]/20 text-yellow-700 border-[#f0f000]/50",
  "Инструменты": "bg-black/5 text-black border-black/20",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-20">
        <div className="mb-10">
          <h1 className="font-black text-[clamp(2.5rem,8vw,6rem)] uppercase leading-none tracking-tight text-black">
            НОВОСТИ
          </h1>
        </div>

        <div className="space-y-3">
          {news.map((item) => (
            <article
              key={item.id}
              className="group border-2 border-black rounded-2xl p-6 cursor-pointer hover:bg-[#f0f000] transition-colors duration-200"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span
                  className={`font-black text-xs px-3 py-0.5 rounded-full border ${tagColors[item.tag] ?? "bg-black/5 text-black border-black/20"}`}
                >
                  {item.tag}
                </span>
                <span className="font-body text-xs text-black/50">
                  {item.date}
                </span>
                <span className="font-body text-xs text-black/40 ml-auto">
                  {item.readTime} чтения
                </span>
              </div>
              <h2 className="font-black text-lg leading-snug text-black mb-2 uppercase">
                {item.title}
              </h2>
              <p className="font-body text-sm text-black/60 leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}