const wordLists = [
  {
    name: "example",
    words: ["qw", "er", "ty"],
    records: [
        { "date": "2022-04-30T12:40:17.323Z", "time": 0.9 },
        { "date": "2022-04-30T12:40:11.928Z", "time": 1 },
        { "date": "2022-04-30T12:40:06.503Z", "time": 1.1 },
    ]
  },
  {
    name: "Rounded",
    words: ["rounded-none","rounded-sm", "rounded", "rounded-md", "rounded-lg", "rouded-xl", "rounded-2xl", "rounded-3xl"],
    records: [{ date: new Date(), time: 100 }]
  },
  {
    name: "Colors",
    words: ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    records: [{ date: new Date(), time: 100 }]
  },
]

export default function fetchWordLists(){
  return wordLists
}