import './tailwind.css'

import { createApp } from 'vue'
import Dekstop from './Dekstop.vue'
import Phone from './Phone.vue'

createApp(Dekstop).mount('#dekstop')
createApp(Phone).mount('#phone')