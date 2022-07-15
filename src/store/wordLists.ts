import { WordList } from '../types'

const wordLists: WordList[] = [
  {
    name: "Mondstadt | Genshin Impact",
    words: ["Albed", "Amber", "Barbara", "Bennett", "Diluc", "Diona", "Eula", "Fischl", "Jean", "Kaeya", "Klee", "Lisa", "Mona", "Noelle", "Razor", "Rosaria", "Sucrose", "Venti"],
    records: []
  },
  {
    name: "Liyue | Genshin Impact",
    words: ["Beidou", "Chongyun", "Ganyu", "Hu Tao", "Keqing", "Ningguang", "Qiqi", "Shenhe", "Xiangling", "Xiao", "Xingqiu", "Xinyan", "Yanfei", "Yelan", "Yun Jin", "Zhongli"],
    records: []
  },
  {
    name: "Inzazuma | Genshin Impact",
    words: ["Arataki Itto", "Gorou", "Kaedehara Kazuha", "Kamisato Ayaka", "Kamisato Ayato", "Kujou Sara", "Kuki Shinobu", "Raiden Shogun", "Sangonomiya Kokomi", "Sayu", "Shikanoin Heizou", "Thoma", "Yae Miko", "Yoimiya"],
    records: []
  }
]

export default function fetchWordLists(){
  return wordLists
}