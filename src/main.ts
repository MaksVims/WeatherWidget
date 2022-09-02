import { createApp } from 'vue'
import App from './App.vue'

import AppInput from './components/UI/AppInput.vue'

const app = createApp(App)

app.component(AppInput.name, AppInput)

app.mount('#app')
