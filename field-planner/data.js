window.PLANNER_DATA = {
  works: {
    green: "Обследование зелёной зоны",
    water: "Наблюдение у водоёма"
  },

  sources: {
    S1: {
      organization: "МЧС России",
      material: "Памятка сборщикам дикоросов (о полевых работах)",
      url: "https://kamenrai.gosuslugi.ru/",
      checked: "2026-11-13"
    },
    S2: {
      organization: "МЧС России",
      material: "Правила безопасного поведения у воды",
      url: "https://adm-gorpos.ru/",
      checked: "2026-11-13"
    }
  },

  checklist: [
    {
      id: "preparation-1",
      text: "Предупредите родных о маршруте и планируемом времени возвращения.",
      works: ["green", "water"],
      condition: null,
      source: "S1"
    },
    {
      id: "water-1",
      text: "Не заходите в воду; у обрывистых и подмытых берегов будьте особенно осторожны.",
      works: ["water"],
      condition: null,
      source: "S2"
    },
    {
      id: "near-water-1",
      text: "При наличии водоёма имейте при себе аптечку, фонарик и средство связи.",
      works: ["green", "water"],
      condition: "nearWater",
      source: "S2"
    },
    {
      id: "weather-1",
      text: "Уточните прогноз погоды перед выездом.",
      works: ["green", "water"],
      condition: null,
      source: "S1"
    }
  ]
};