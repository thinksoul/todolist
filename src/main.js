import { createApp } from 'vue';
import App from './App.vue'
import router from './router'
import store from './store'
// import elementui from 'element-ui'

createApp(App).use(router)
              .use(store)
            //   .use(elementui)
              .mount('#app')
