import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/routes'
import "./index.scss"

import TiButton from '@/components/atoms/TiButton.vue'
import TiSheet from '@/components/atoms/TiSheet.vue'
import TiTextField from '@/components/atoms/TiTextField.vue'
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue'

const app = createApp(App)
app.use(router)
app.component('ti-button', TiButton)
app.component('ti-sheet', TiSheet)
app.component('ti-text-field', TiTextField)
app.component('ti-simple-table', TiSimpleTable)
app.mount("#app")
