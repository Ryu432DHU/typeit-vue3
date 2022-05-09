export type wordListRecord = {
  date: String | Date,
  time: Number
}

export type wordList = {
  name: String,
  words: String[],
  records: wordListRecord[]
}

export type gameState = "STAND_BY" | "PLAYING" | "FINISHED"