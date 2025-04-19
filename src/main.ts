import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import '@/assets/styles.scss';
import '@/assets/tailwind.css';
import { MotionPlugin } from '@vueuse/motion'


const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)
app.use(PrimeVue, {
	theme: {
		preset: Aura,
		options: {
			cssLayer: {
				name: 'primevue',
				order: 'primevue, tailwind-base, tailwind-utilities'
			}
		}
	}
});

app.mount('#app')

