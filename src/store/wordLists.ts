import { WordList } from '../types'

const wordLists: WordList[] = [
  {
    name: "Colors",
    words: ["Gray", "Red", "Orange", "Amber", "Yellow", "Lime", "Green", "Emerald", "Cyan", "Blue", "Indigo", "Purple", "Pink", "Rose"],
    records: [],
    isDeletable: false
  },
  {
    name: "Genshin Impact | Mondstadt",
    words: ["Albed", "Amber", "Barbara", "Bennett", "Diluc", "Diona", "Eula", "Fischl", "Jean", "Kaeya", "Klee", "Lisa", "Mona", "Noelle", "Razor", "Rosaria", "Sucrose", "Venti"],
    records: [],
    isDeletable: false
  },
  {
    name: "Genshin Impact | Liyue",
    words: ["Beidou", "Chongyun", "Ganyu", "Hu Tao", "Keqing", "Ningguang", "Qiqi", "Shenhe", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Yanfei", "Yelan", "Yun Jin", "Zhongli"],
    records: [],
    isDeletable: false
  },
  {
    name: "Genshin Impact | Inzazuma",
    words: ["Arataki Itto", "Gorou", "Kaedehara Kazuha", "Kamisato Ayaka", "Kamisato Ayato", "Kujou Sara", "Kuki Shinobu", "Raiden Shogun", "Sangonomiya Kokomi", "Sayu", "Shikanoin Heizou", "Thoma", "Yae Miko", "Yoimiya"],
    records: [],
    isDeletable: false
  },
  {
    name: "Arknights 1",
    words: ["Jessica", "Haze", "Ch'en", "Amiya", "Ifrit", "Eyjafjalla", "Vigna", "Blaze", "Savage", "Projekt Red"],
    records: [],
    isDeletable: false
  },
  {
    name: "Arkinghts 2",
    words: ["Frostleaf", "Vermeli", "Cuora", "Gitano", "Rope", "Exusiai", "Angelina", "Sussurro", "Surtr", "Schwarz"],
    records: [],
    isDeletable: false
  }
]

export default function fetchWordLists(){
  return wordLists
}