import { createStore } from 'vuex'
import { WordList } from '../types'

const wordLists: WordList[] = [
  {
    name: "test",
    words: ["a", "bc", "def"],
    records: [
      {date: "2022-07-16T11:17:20.477Z", time: 6.6}
    ],
    isDeletable: false
  },
  {
    name: "Colors",
    words: ["gray", "red", "orange", "amber", "yellow"],
    records: [
      {date: "2022-07-16T11:17:20.477Z", time: 16.6}
    ],
    isDeletable: false
  },
  {
    name: "原神 | モンド",
    words: ["albed", "amber", "barbara", "bennett", "diluc"],
    records: [
      {date: "2022-07-16T11:18:53.053Z", time: 25.8}
    ],
    isDeletable: false
  },
  {
    name: "原神 | 璃月",
    words: ["beidou", "chongyun", "ganyu", "hu tao", "keqing"],
    records: [
      {date: "2022-07-16T11:19:26.342Z", time: 29.6}
    ],
    isDeletable: false
  },
  {
    name: "原神 | 稲妻",
    words: ["arataki itto", "gorou", "kaedehara kazuha", "kamisato ayaka"],
    records: [
      {date: "2022-07-16T11:19:59.578Z", time: 30.1}
    ],
    isDeletable: false
  },
  {
    name: "アークナイツ 1",
    words: ["jessica", "haze", "ch'en", "amiya", "ifrit", "eyjafjalla"],
    records: [
      {date: "2022-07-16T11:20:26.310Z", time: 22.3}
    ],
    isDeletable: false
  },
  {
    name: "アークナイツ 2",
    words: ["frostleaf", "vermeli", "cuora", "gitano", "rope", "exusiai"],
    records: [
      {date: "2022-07-16T11:20:46.308Z", time: 17.1}
    ],
    isDeletable: false
  }
]

const store = createStore({
  state(){
    return {
      wordLists: wordLists
    }
  },
  getters: {
    wordLists: state => state.wordLists,
    findWordList: state => (wordListName: string) => {
      const targetWordList = state.wordLists.filter(wordList => wordListName === wordList.name)

      return targetWordList.length ? targetWordList[0] : new Error('The word list is not found')
    },
    findWordListIndex: state => (wordListName: string) => {
      return state.wordLists.findIndex(wordList => wordListName === wordList.name)
    }
  },
})

export default store