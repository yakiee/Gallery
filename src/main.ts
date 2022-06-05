import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'virtual:windi-devtools'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as Icons from '@element-plus/icons-vue'
import { toLine } from './utils'
import { create, NIcon } from 'naive-ui'

const naive = create({
    components: [NIcon]
  })

const app = createApp(App)

for (let i in Icons) {
    app.component(`el-icon-${toLine(i)}`, (Icons as any)[i])
}

app.use(naive)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
