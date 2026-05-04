import Icon from "@/components/ui/icon";

interface Russifier {
  id: number;
  game: string;
  title: string;
  team: string;
  version: string;
  versionGroup: string;
  type: string;
  updated: string;
  rating: number;
  downloads: string;
  status: string;
}

interface RussifierDetailPageProps {
  russifier: Russifier;
  onBack: () => void;
}

const changelog = [
  { version: "2.2.1", date: "02.05.2026", note: "Исправлено 300+ текстовых ошибок, улучшена локализация субтитров" },
  { version: "2.2.0", date: "14.04.2026", note: "Добавлен перевод DLC Phantom Liberty, обновлены диалоги патча 2.2" },
  { version: "2.1.5", date: "01.03.2026", note: "Исправлены критические баги в квестах основной линии" },
  { version: "2.1.0", date: "10.01.2026", note: "Полный перевод интерфейса, обновление под патч 2.1" },
];

const screenshots = [
  { label: "Главное меню", color: "#1a1a1a" },
  { label: "Диалоги", color: "#111" },
  { label: "Инвентарь", color: "#0d0d0d" },
];

export default function RussifierDetailPage({ russifier, onBack }: RussifierDetailPageProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-6 pt-10 pb-20">

        {/* Back */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 font-black text-sm uppercase tracking-wide text-black/50 hover:text-black transition-colors mb-8 group"
        >
          <Icon name="ArrowLeft" size={18} className="group-hover:-translate-x-1 transition-transform" />
          Назад к каталогу
        </button>

        {/* Header */}
        <div className="border-b-2 border-black pb-8 mb-8">
          <span className="font-black text-sm text-black/40 uppercase tracking-widest block mb-2">
            {russifier.game}
          </span>
          <h1 className="font-black text-[clamp(2rem,6vw,4rem)] uppercase leading-none tracking-tight text-black mb-4">
            {russifier.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className={`font-black text-xs px-3 py-1 rounded-full border ${
              russifier.status === "Актуален"
                ? "text-emerald-600 bg-emerald-50 border-emerald-200"
                : "text-orange-600 bg-orange-50 border-orange-200"
            }`}>
              {russifier.status}
            </span>
            <span className="font-body text-sm text-black/50">
              Версия игры: <strong className="text-black">{russifier.version}</strong>
            </span>
            <span className="font-body text-sm text-black/50">
              Тип: <strong className="text-black">{russifier.type}</strong>
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="border-2 border-black rounded-2xl p-5 text-center">
            <div className="flex items-center justify-center gap-1 mb-1">
              <Icon name="Star" size={16} className="fill-[#f0c000] text-[#f0c000]" />
              <span className="font-black text-2xl">{russifier.rating}</span>
            </div>
            <span className="font-body text-xs text-black/50 uppercase tracking-wide">Рейтинг</span>
          </div>
          <div className="border-2 border-black rounded-2xl p-5 text-center">
            <div className="font-black text-2xl mb-1">{russifier.downloads}</div>
            <span className="font-body text-xs text-black/50 uppercase tracking-wide">Скачиваний</span>
          </div>
          <div className="border-2 border-black rounded-2xl p-5 text-center">
            <div className="font-black text-2xl mb-1">{russifier.updated}</div>
            <span className="font-body text-xs text-black/50 uppercase tracking-wide">Обновлён</span>
          </div>
        </div>

        {/* About */}
        <div className="mb-10">
          <h2 className="font-black text-xl uppercase tracking-tight mb-4">О русификаторе</h2>
          <div className="bg-[#f5f5f5] rounded-2xl p-6">
            <p className="font-body text-base text-black/70 leading-relaxed mb-3">
              Полный профессиональный русификатор от команды <strong className="text-black">{russifier.team}</strong>.
              Включает перевод всех игровых текстов, субтитров, интерфейса и дополнительного контента.
            </p>
            <p className="font-body text-base text-black/70 leading-relaxed">
              Перевод выполнен с сохранением оригинального стиля и атмосферы игры.
              Регулярно обновляется вслед за официальными патчами.
            </p>
          </div>
        </div>

        {/* Screenshots placeholder */}
        <div className="mb-10">
          <h2 className="font-black text-xl uppercase tracking-tight mb-4">Скриншоты</h2>
          <div className="grid grid-cols-3 gap-3">
            {screenshots.map((s) => (
              <div
                key={s.label}
                className="aspect-video rounded-xl border-2 border-black flex items-end p-3 overflow-hidden"
                style={{ background: s.color }}
              >
                <span className="font-black text-xs text-white/50 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Changelog */}
        <div className="mb-10">
          <h2 className="font-black text-xl uppercase tracking-tight mb-4">История обновлений</h2>
          <div className="space-y-2">
            {changelog.map((c, i) => (
              <div key={c.version} className={`flex gap-4 p-4 rounded-xl border-2 ${i === 0 ? "border-black bg-[#f0f000]" : "border-black/10"}`}>
                <div className="flex-shrink-0 w-16">
                  <span className="font-black text-sm">{c.version}</span>
                </div>
                <div className="flex-1">
                  <p className="font-body text-sm text-black/70">{c.note}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="font-body text-xs text-black/40">{c.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team info */}
        <div className="mb-10 border-2 border-black rounded-2xl p-6 flex items-center justify-between gap-4">
          <div>
            <span className="font-black text-xs text-black/40 uppercase tracking-widest block mb-1">Команда</span>
            <span className="font-black text-2xl uppercase">{russifier.team}</span>
          </div>
          <button className="px-6 py-3 border-2 border-black rounded-full font-black text-sm uppercase hover:bg-black hover:text-white transition-colors">
            Другие работы
          </button>
        </div>

        {/* Download CTA */}
        <div className="bg-black rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-black text-white text-2xl uppercase mb-1">{russifier.title}</h3>
            <span className="font-body text-white/50 text-sm">Версия {russifier.version} · {russifier.updated}</span>
          </div>
          <button className="flex-shrink-0 px-8 py-4 bg-[#f0f000] text-black font-black text-sm uppercase rounded-full hover:scale-105 transition-transform active:scale-95">
            Скачать русификатор
          </button>
        </div>

      </div>
    </div>
  );
}
