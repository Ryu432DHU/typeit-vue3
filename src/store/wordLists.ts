import { WordList } from '../types'

const wordlists: WordList[] = [
  {
    name: "Colors",
    words: ["gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "cyan", "blue", "indigo", "purple", "pink", "rose"],
    records: [
      {date: "2022-07-16T11:17:20.477Z", time: 16.6}
    ],
    isDeletable: false
  },
  {
    name: "原神 | モンド",
    words: ["albed", "amber", "barbara", "bennett", "diluc", "diona", "eula", "fischl", "jean", "kaeya", "klee", "lisa", "mona", "noelle", "razor", "rosaria", "sucrose", "venti"],
    records: [
      {date: "2022-07-16T11:18:53.053Z", time: 25.8}
    ],
    isDeletable: false
  },
  {
    name: "原神 | 璃月",
    words: ["beidou", "chongyun", "ganyu", "hu tao", "keqing", "ningguang", "qiqi", "shenhe", "xiangling", "xiao", "xingqiu", "xinyan", "yanfei", "yelan", "yun jin", "zhongli"],
    records: [
      {date: "2022-07-16T11:19:26.342Z", time: 29.6}
    ],
    isDeletable: false
  },
  {
    name: "原神 | 稲妻",
    words: ["arataki itto", "gorou", "kaedehara kazuha", "kamisato ayaka", "kamisato ayato", "kujou sara", "kuki shinobu", "raiden shogun", "sangonomiya kokomi", "sayu", "shikanoin heizou", "thoma", "yae miko", "yoimiya"],
    records: [
      {date: "2022-07-16T11:19:59.578Z", time: 30.1}
    ],
    isDeletable: false
  },
  {
    name: "Arknights 1",
    words: ["jessica", "haze", "ch'en", "amiya", "ifrit", "eyjafjalla", "vigna", "blaze", "savage", "projekt red"],
    records: [
      {date: "2022-07-16T11:20:26.310Z", time: 22.3}
    ],
    isDeletable: false
  },
  {
    name: "Arkinghts 2",
    words: ["frostleaf", "vermeli", "cuora", "gitano", "rope", "exusiai", "angelina", "sussurro", "surtr", "schwarz"],
    records: [
      {date: "2022-07-16T11:20:46.308Z", time: 17.1}
    ],
    isDeletable: false
  }
]

export default function fetchwordlists(){
  return wordlists
}
