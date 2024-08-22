import './assets/main.css'
import  FoodItem  from "./components/FoodItem.vue";

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.mount('#app')
