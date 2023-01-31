import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'


// font awesome

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



// library.add(fas)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

/////


axios.defaults.baseURL='http://127.0.0.1:8000'

createApp(App).use(store).use(router,axios).mount('#app')
