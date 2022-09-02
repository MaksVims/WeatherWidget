// import { createApp } from 'vue'
// import App from './App.vue'

import { defineCustomElement } from "vue";
import WeatherWidget from './weather-widget.ce.vue'
// import AppInput from './components/UI/AppInput.vue'

// const app = createApp(App)

// app.component(AppInput.name, AppInput)

// app.mount('#app')

const element = defineCustomElement(WeatherWidget)

customElements.define('weather-widget', element)
