import { useState, useMemo } from "react";
import Icon from "@/components/ui/icon";
import RussifierDetailPage from "@/pages/RussifierDetailPage";

const allGames = [
  "Все игры",
  "Cyberpunk 2077",
  "Baldur's Gate 3",
  "Avowed",
  "Kingdom Come: Deliverance 2",
  "Elden Ring",
  "The Witcher 3",
];

const allVersions = ["Любая версия", "1.0", "2.0", "3.0+"];

const russifiers = [
  {
    id: 1,
    game: "Cyberpunk 2077",
    title: "Полный русификатор",
    team: "RuCyber",
    version: "2.2.1",
    versionGroup: "2.0",
    type: "Текст + озвучка",
    updated: "02.05.2026",
    rating: 4.9,
    downloads: "128 тыс.",
    status: "Актуален",
  },
  {
    id: 2,
    game: "Baldur's Gate 3",
    title: "Русификатор текста",
    team: "BG3-RU",
    version: "3.1.0",
    versionGroup: "3.0+",
    type: "Только текст",
    updated: "08.04.2026",
    rating: 4.8,
    downloads: "95 тыс.",
    status: "Актуален",
  },
  {
    id: 3,
    game: "Avowed",
    title: "Полный перевод",
    team: "Скитальцы",
    version: "1.2",
    versionGroup: "1.0",
    type: "Текст + субтитры",
    updated: "28.04.2026",
    rating: 4.7,
    downloads: "41 тыс.",
    status: "Актуален",
  },
  {
    id: 4,
    game: "Kingdom Come: Deliverance 2",
    title: "Перевод диалогов",
    team: "KCD-Rus",
    version: "1.5",
    versionGroup: "1.0",
    type: "Только текст",
    updated: "15.03.2026",
    rating: 4.5,
    downloads: "63 тыс.",
    status: "Актуален",
  },
  {
    id: 5,
    game: "Elden Ring",
    title: "Лорный перевод",
    team: "TarnishedRU",
    version: "2.0",
    versionGroup: "2.0",
    type: "Только текст",
    updated: "10.01.2026",
    rating: 4.6,
    downloads: "210 тыс.",
    status: "Устарел",
  },
  {
    id: 6,
    game: "The Witcher 3",
    title: "HD-русификатор",
    team: "WitcherRU",
    version: "1.32",
    versionGroup: "1.0",
    type: "Текст + озвучка",
    updated: "22.11.2025",
    rating: 4.9,
    downloads: "380 тыс.",
    status: "Актуален",
  },
  {
    id: 7,
    game: "Cyberpunk 2077",
    title: "Лёгкий перевод UI",
    team: "NightRU",
    version: "2.1",
    versionGroup: "2.0",
    type: "Только интерфейс",
    updated: "14.04.2026",
    rating: 4.3,
    downloads: "22 тыс.",
    status: "Актуален",
  },
  {
    id: 8,
    game: "Baldur's Gate 3",
    title: "Перевод Акта 3",
    team: "BG3-RU",
    version: "3.0.2",
    versionGroup: "3.0+",
    type: "Только текст",
    updated: "01.03.2026",
    rating: 4.7,
    downloads: "47 тыс.",
    status: "Актуален",
  },
];

const statusStyle: Record<string, string> = {
  "Актуален": "text-emerald-600 bg-emerald-50 border-emerald-200",
  "Устарел": "text-orange-600 bg-orange-50 border-orange-200",
};

export default function RussifiersPage() {
  const [search, setSearch] = useState("");
  const [selectedGame, setSelectedGame] = useState("Все игры");
  const [selectedVersion, setSelectedVersion] = useState("Любая версия");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const filtered = useMemo(() => {
    return russifiers.filter((r) => {
      const matchSearch =
        search === "" ||
        r.game.toLowerCase().includes(search.toLowerCase()) ||
        r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.team.toLowerCase().includes(search.toLowerCase());
      const matchGame =
        selectedGame === "Все игры" || r.game === selectedGame;
      const matchVersion =
        selectedVersion === "Любая версия" ||
        r.versionGroup === selectedVersion;
      return matchSearch && matchGame && matchVersion;
    });
  }, [search, selectedGame, selectedVersion]);

  if (selectedId !== null) {
    const russifier = russifiers.find((r) => r.id === selectedId);
    if (russifier) {
      return <RussifierDetailPage russifier={russifier} onBack={() => setSelectedId(null)} />;
    }
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-black text-[clamp(2.5rem,8vw,6rem)] uppercase leading-none tracking-tight text-black">
            РУСИФИКАТОРЫ
          </h1>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Icon
              name="Search"
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40"
            />
            <input
              type="text"
              placeholder="Поиск по игре или команде..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border-2 border-black rounded-xl font-body text-sm text-black placeholder:text-black/40 focus:outline-none focus:border-[#2ab8c0] transition-colors"
            />
          </div>
          <select
            value={selectedGame}
            onChange={(e) => setSelectedGame(e.target.value)}
            className="px-4 py-2.5 bg-white border-2 border-black rounded-xl font-body text-sm text-black focus:outline-none focus:border-[#2ab8c0] transition-colors cursor-pointer"
          >
            {allGames.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <select
            value={selectedVersion}
            onChange={(e) => setSelectedVersion(e.target.value)}
            className="px-4 py-2.5 bg-white border-2 border-black rounded-xl font-body text-sm text-black focus:outline-none focus:border-[#2ab8c0] transition-colors cursor-pointer"
          >
            {allVersions.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        {/* Count */}
        <div className="mb-5 font-body text-sm text-black/50">
          Найдено:{" "}
          <span className="text-black font-bold">
            {filtered.length}
          </span>{" "}
          русификаторов
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-black/40 font-body">
            Ничего не найдено. Попробуйте изменить фильтры.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.map((r) => (
              <div
                key={r.id}
                onClick={() => setSelectedId(r.id)}
                className="group border-2 border-black rounded-2xl p-5 hover:bg-[#f0f000] transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="font-black text-xs text-[#2ab8c0] mb-1 block uppercase tracking-wide">
                      {r.game}
                    </span>
                    <h3 className="font-black text-base leading-snug text-black uppercase">
                      {r.title}
                    </h3>
                  </div>
                  <span
                    className={`font-black text-xs whitespace-nowrap mt-1 px-2.5 py-0.5 rounded-full border ${statusStyle[r.status]}`}
                  >
                    {r.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-y-1.5 mb-4">
                  <div className="font-body text-xs text-black/50">
                    Команда:{" "}
                    <span className="text-black font-semibold">{r.team}</span>
                  </div>
                  <div className="font-body text-xs text-black/50">
                    Версия:{" "}
                    <span className="text-black font-semibold">
                      {r.version}
                    </span>
                  </div>
                  <div className="font-body text-xs text-black/50">
                    Тип:{" "}
                    <span className="text-black font-semibold">{r.type}</span>
                  </div>
                  <div className="font-body text-xs text-black/50">
                    Обновлён:{" "}
                    <span className="text-black font-semibold">
                      {r.updated}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t-2 border-black/10">
                  <div className="flex items-center gap-1">
                    <Icon
                      name="Star"
                      size={13}
                      className="text-[#f0c000] fill-[#f0c000]"
                    />
                    <span className="font-body text-sm font-medium text-[var(--color-text)]">
                      {r.rating}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-black/50">
                    <Icon name="Download" size={13} />
                    <span className="font-body text-xs">{r.downloads}</span>
                  </div>
                  <button className="font-black text-xs px-4 py-1.5 bg-black text-white rounded-full hover:bg-[#2ab8c0] transition-colors uppercase">
                    Скачать
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}