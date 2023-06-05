import { createI18n } from 'vue-i18n'

const messages = {
  ja: {
    home: {
      rankings: "ランキング",
      words: "単語",
      wordLists: "単語リスト"
    },
    rankings: {
      rankings: "ランキング一覧",
      table: {
        no: "順位",
        length: "長さ",
        time: "時間",
        date: "日付"
      },
    },
    create: {
      newWordListTitle: '新しい単語リスト',
      createNewWordList: '新しい単語リストを作成',
      table: {
        no: "順番",
        word: "単語",
        actions: "操作 "
      }
    },
    edit: {
      pageTitle: "単語リストを編集",
      table: {
        name: "名前",
        length: "長さ",
        timeRecords: "レコード数",
        action: "操作",
        wordListLength: "単語",
        recordLength: "レコード"
      }
    }
  },
  en: {
    home: {
      rankings: "Rankings",
      words: "Words",
      wordLists: "Word lists"
    },
    rankings: {
      rankings: "Rankings",
      table: {
        no: "No.",
        length: "Length",
        time: "Time",
        date: "Date",
        wordListLength: "words",
        recordLength: "records"
      },
    },
    create: {
      newWordListTitle: 'New word list',
      createNewWordList: 'Create a new word list',
      table: {
        no: "No.",
        word: "Word",
        actions: "Actions"
      }
    },
    edit: {
      pageTitle: "Edit word lists",
      table: {
        name: "Name",
        length: "Length",
        timeRecords: "Time Records",
        action: "Action"
      }
    }
  }
}

export const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages: messages
})