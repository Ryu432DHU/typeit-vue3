<template>
  <ti-sheet>
    <ti-word-display :word="currentWord" :gameState="gameState" :inputAccuracyCollections="inputAccuracyCollections" :clearTime="getRoundedClerTime"></ti-word-display>
    <template v-if="gameState !== 'FINISHED'">
      <ti-word-input-form v-model="wordInputFieldValue"></ti-word-input-form>
    </template>
    <template v-else>
      <div class="bg-neutral-800 text-white text-center text-2xl p-8">
        <button @click="initializeGame" class="text-white text-2xl px-6 py-2 rounded-md hover:bg-neutral-900 transition-all duration-300">Play again</button>
      </div>
      </template>
    <div class="container mx-auto my-4 pb-8">
      <div class="w-11/12 mx-auto mb-4">
        <h2 class="text-2xl mb-4">Words | {{ wordListName }}</h2>
        <ti-word-chip-list :wordList="wordList.words" :currentWordIndex="currentWordIndex"></ti-word-chip-list>
      </div>
      <div class="lg:flex w-11/12 mx-auto lg:justify-between">
        <div class="sm:w-full lg:w-6/12 mb-4">
          <div class="w-11/12">
            <h2 class="text-2xl mb-4">Rankings</h2>
            <ti-ranking-list :wordList="wordList"></ti-ranking-list>
          </div>
        </div>
        <div class="sm:w-full lg:w-6/12">
          <div class="w-11/12">
            <h2 class="text-2xl mb-4">Word lists</h2>
            <ti-word-list-selector @selectWordList="selectWordListName" :wordLists="wordLists" :selectedWordList="wordList" />
          </div>
        </div>
      </div>
    </div>
  </ti-sheet>
  <ti-sheet class="mb-12">
    <div class="w-11/12 mx-auto py-4">
      <section class="mb-8">
        <h1 class="text-2xl mb-6">TypeItの遊び方</h1>
        <p>TypeItはタイピング練習用アプリです。</p>
        <p>ここでは簡単にTypeItの遊び方(使い方)を説明します。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">1. 単語リストの選択</h2>
        <p>「Word lists」という見出しの下にあるリストから「Play」ボタンで任意の単語リストを選択します。</p>
        <p>ボタンのテキストが「Selected」になれば正しく単語リストが選択されています。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">2. ゲームの始め方</h2>
        <p>
          黒背景のエリアに表示されている文字をその下のフォームに入力するだけのシンプルな仕組みです。
        </p>
        <p>
          入力した文字が間違っていれば「赤」、正しければ「緑」で文字がハイライトされます。
        </p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">3. プレイ状況の説明</h2>
        <p>黒背景エリアの左上にあるチップは現在のゲームの状況を表示しています。</p>
        <p>stateが「STAND_BY」=ゲーム開始前、「PLAYING」=プレイ中、「FINISHED」=ゲーム終了です。</p>
        <p>stateは単語リスト切り替えたりページを再読み込みするとゲーム開始前の「STAND_BY」になります。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">4. タイムレコードとランキングの説明</h2>
        <p>最後の単語の入力が終わるとゲームクリアとなりタイピングにかかった時間が表示されます。</p>
        <p>タイピングにかかった時間は「Rankings」という見出しの下のリストに記録、追加されます。</p>
        <p>なお、「No.」が「EX」になっている一番上のタイムレコードは開発者のタイムです。</p>
        <p>私を超えられるように頑張ってくださいね🥳</p>
      </section>
    </div>
  </ti-sheet>
  <ti-sheet class="mb-12">
    <div class="w-11/12 mx-auto py-4">
      <section class="mb-8">
        <h1 class="text-2xl mb-6">各ページの説明</h1>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">1. Rankingsページ</h2>
        <p>アプリ上部にあるナビゲーションからRankingsページに移動できます。</p>
        <p>Rankingsページでは各単語リストのタイムレコード(タイピングにかかった時間)を確認できます。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">2. Createページ</h2>
        <p>アプリ上部にあるナビゲーションからCreateページに移動できます。</p>
        <p>Cretaeページでは自分の好きな単語リストを作成することができます。</p>
      </section>
      <section class="mb-8">
        <h2 class="text-xl my-4">3. Editページ</h2>
        <p>アプリ上部にあるナビゲーションからEditページに移動できます。</p>
        <p>Editページでは作成した単語リストを編集することができます。</p>
      </section>
    </div>
  </ti-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import TiWordChipList from '@/components/organisms/TiWordChipList.vue'
import TiWordDisplay from '@/components/organisms/TiWordDisplay.vue'
import TiWordInputForm from '@/components/organisms/TiWordInputForm.vue'
import TiWordListSelector from '@/components/organisms/TiWordListSelector.vue'
import TiRankingList from '@/components/organisms/TiRankingList.vue'
import { useWordLists } from '@/pages/composables/useWordLists'
import { useTypingGame } from './composables/useTypingGame'

const { wordLists, getWordList } = useWordLists()
const wordListName = ref(wordLists[0].name)
const wordList = computed(() => getWordList(wordListName.value))
const selectWordListName = (newWordListName: string ) => {
  wordListName.value = newWordListName
  initializeGame()
}

const {
  currentWordIndex,
  currentWord,
  wordInputFieldValue,
  gameState,
  isNextWordExisting,
  getRoundedClerTime,
  initializeGame
} = computed(() => useTypingGame(wordList)).value

const inputAccuracyCollections = computed(() => {
  if(isNextWordExisting.value){
    if(wordInputFieldValue.value.length <= currentWord.value.length){
      return wordInputFieldValue.value.split("").map((letter, index) => letter === currentWord.value[index])
    } else {
      return currentWord.value.split("").map((letter, index) => letter === wordInputFieldValue.value[index])
    }
  } else {
    return []
  }
})
</script>

