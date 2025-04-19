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
import { definePreset } from '@primevue/themes'


const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)
app.use(router)

const myPresent = definePreset(Aura, {
	primary: {
		50: '{emerald.50}',
		100: '{emerald.100}',
		200: '{emerald.200}',
		300: '{emerald.300}',
		400: '{emerald.400}',
		500: '{emerald.500}',
		600: '{emerald.600}',
		700: '{emerald.700}',
		800: '{emerald.800}',
		900: '{emerald.900}',
		950: '{emerald.950}'
	},
	semantic: {

		formField: {
			paddingX: "1rem",
			paddingY: "1rem",
		},
		myButton: {
			paddingX: "1rem",
			paddingY: "1rem",
		},
		colorScheme: { //customizar para os temas espcifico
			light: {
				formField: {
					hoverBorderColor: '{primary.color}'
				}
			},
			dark: {
				formField: {
					hoverBorderColor: '{primary.color}'
				}
			}
		},
	},
	components: {
		button: {

				paddingX: "{my.button.padding.x}",
				paddingY: "{my.button.padding.y}",


		}

	}

})
app.use(PrimeVue, {
	theme: {
		preset: myPresent,
		options: {
			// cssLayer: {
			// 	name: 'primevue',
			// 	order: 'primevue, tailwind-base, tailwind-utilities'
			// },
			prefix: 'p',
			darkModeSelector: '.my-app-dark',
		}
	}
});

app.mount('#app')

