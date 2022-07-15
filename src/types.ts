export type WordListRecord = {
  date: string | Date,
  time: number
}

export type WordList = {
  name: string,
  words: string[],
  records: WordListRecord[],
  isDeletable: boolean,
  description?: string
}

export type GameState = "STAND_BY" | "PLAYING" | "FINISHED"

export type TiColor = "green" | "red"