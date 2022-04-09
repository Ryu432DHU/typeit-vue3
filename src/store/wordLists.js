const wordLists = [
  {
    name: "Example word list",
    words: ["q", "we", "rty"],
    timeRecords: [
      {
        time: 120,
        date: new Date(),
      },
      {
        time: 100,
        date: new Date()
      }
    ]
  },
  {
    name: "Country names",
    words: ["germany", "France", "united kingdom"],
    timeRecords: [
      {
        time: 120,
        date: new Date(),
      },
      {
        time: 100,
        date: new Date()
      }
    ]
  }
]

export default function fetchWordLists(){
  return wordLists
}