import { InjectionKey } from "vue"
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { WordList } from '../types'
import { wordLists } from "./wordLists"


export interface State {
  wordLists: WordList[],
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state(){
    return {
      wordLists: wordLists
    }
  },
  getters: {
    wordLists(state): WordList[]{
      return state.wordLists
    },
    findWordListByName: state => (wordListName: string) => {
      const targetWordList = state.wordLists.filter(wordList => wordListName === wordList.name)

      return targetWordList.length ? targetWordList[0] : new Error('The word list is not found')
    },
    findWordListIndexByName: state => (wordListName: string) => {
      return state.wordLists.findIndex(wordList => wordListName === wordList.name)
    }
  },
  mutations: {
    updateWordList(state, payload: { wordListIndex: number, newWordList: WordList }){
      state.wordLists[payload.wordListIndex] = payload.newWordList
    }
  },
  actions: {
    tryUpdatingWordList({ commit, getters }, newWordList: WordList){
      if(getters.findWordListIndexByName(newWordList.name) >= 0){
        console.log(newWordList)
        commit('updateWordList', {
          wordListIndex: getters.findWordListIndexByName(newWordList.name),
          newWordList
        })
      } else {
        throw new Error('Failed to update word list. The word list not found.')
      }
    }
  }
})

export function useStore(){
  return baseUseStore(key)
}