import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/routes'
import "./index.scss"

import TiSheet from '@/components/atoms/TiSheet.vue'
import TiButton from '@/components/atoms/TiButton.vue'
import TiTextField from '@/components/atoms/TiTextField.vue'
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue'
import TiOverlay from '@/components/atoms/TiOverlay.vue'
import TiModal from '@/components/atoms/TiModal.vue'

const app = createApp(App)
app.use(router)
app.component('ti-button', TiButton)
app.component('ti-sheet', TiSheet)
app.component('ti-text-field', TiTextField)
app.component('ti-simple-table', TiSimpleTable)
app.component('ti-overlay', TiOverlay)
app.component('ti-modal', TiModal)
app.mount("#app")
