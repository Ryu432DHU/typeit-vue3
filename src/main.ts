import { createApp } from 'vue'
import { i18n } from '@/i18n/index'
import App from './App.vue'
import { store, key } from '@/store/store'
import { router } from './router/routes'
import "./index.scss"

import TiButton from '@/components/atoms/TiButton.vue'
import TiSheet from '@/components/atoms/TiSheet.vue'
import TiTextField from '@/components/atoms/TiTextField.vue'
import TiSimpleTable from '@/components/atoms/TiSimpleTable.vue'
import TiOverlay from '@/components/atoms/TiOverlay.vue'
import TiDialog from '@/components/atoms/TiDialog.vue'
import TiNavigationDrawer from '@/components/atoms/TiNavigationDrawer.vue';

const app = createApp(App)
app.use(i18n)
app.use(router)
app.use(store, key)
app.component('ti-button', TiButton)
app.component('ti-sheet', TiSheet)
app.component('ti-text-field', TiTextField)
app.component('ti-simple-table', TiSimpleTable)
app.component('ti-overlay', TiOverlay)
app.component('ti-dialog', TiDialog)
app.component('ti-navigation-drawer', TiNavigationDrawer)
app.mount("#app")