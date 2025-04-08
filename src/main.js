import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'



const app = createApp(App);

app.use(createPinia())
app.use(router)

app.mount('#app')

// Optionnel : fournissez auth à votre application
// app.provide('auth', auth)