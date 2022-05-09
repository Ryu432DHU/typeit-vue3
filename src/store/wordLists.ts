type wordListRecord = {
  date: String | Date,
  time: Number
}

type wordList = {
  name: String,
  words: String[],
  records: wordListRecord[]
}

const wordLists: wordList[] = [
  {
    "name": "example",
    "words": ["qw", "er", "ty"],
    "records": [
      {"date": "2022-05-03T08:04:44.705Z", "time":0.8},
      {"date": "2022-04-30T12:40:17.323Z", "time":0.9},
      {"date": "2022-04-30T12:40:06.503Z", "time":1.1},
      {"date": "2022-05-01T02:45:16.564Z", "time":1.3},
      {"date": "2022-05-03T08:04:16.280Z", "time":1.5},

    ]
  },
  {
    "name": "Rounded",
    "words": ["rounded-none", "rounded-sm", "rounded", "rounded-md", "rounded-lg", "rouded-xl", "rounded-2xl", "rounded-3xl"],
    "records": [
      {"date": "2022-05-04T14:38:35.086Z", "time":20.6},
      {"date": "2022-05-01T02:45:12.234Z", "time":100}
    ]
  },
  {
    "name": "Colors",
    "words": ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    "records": [
      {"date": "2022-05-04T14:39:02.791Z", "time":23.9},
      {"date": "2022-05-01T02:45:12.234Z", "time":100}
    ]
  }
]

export default function fetchWordLists(){
  return wordLists
}