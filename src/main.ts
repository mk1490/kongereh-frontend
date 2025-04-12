import {createApp} from 'vue'

import App from './App.vue'
// import '@/styles/styles.scss'
// import '@/styles/styles.scss'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'remixicon/fonts/remixicon.scss'
import '@/assets/styles/global.scss'
import {registerPlugins} from '@core/utils/plugins'
import {registerComponents} from '@core/utils/components'

import VueSweetalert2 from 'vue-sweetalert2'

// Styles
// import '@core/scss/template/index.scss'
// import '@layouts/styles/index.scss'
// import 'sweetalert2/themes/dark/dark.css'
// Create vue app
const app = createApp(App)
registerPlugins(app)
registerComponents(app)
app.use(VueSweetalert2)
app.use(ToastPlugin, {
    position: 'center',
})
app.mount('#app')
