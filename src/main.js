import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import naive from 'naive-ui'
import locale from 'element-plus/dist/locale/zh-cn'
import App from './App.vue'
import router from './router'
import 'mapbox-gl/dist/mapbox-gl.css';




const app = createApp(App)

app.use(createPinia())
app.use(naive)
app.use(ElementPlus, { locale })
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.mount('#app')
