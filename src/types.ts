export type WordListRecord = {
  date: String | Date,
  time: Number
}

export type WordList = {
  name: String,
  words: String[],
  records: WordListRecord[]
}

export type GameState = "STAND_BY" | "PLAYING" | "FINISHED"

export type TiColor = "green" | "red"