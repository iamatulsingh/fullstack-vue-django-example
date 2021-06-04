import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import IdleVue from 'idle-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import emitter from './eventHub'

const Vue = createApp()
// const eventsHub = createApp()

Vue.use(IdleVue, {
    eventEmitter: emitter,
    idleTime: 5000
  })

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin)) {
        if (!store.getters.loggedIn) {
        next({ name: 'login' })
        } else {
        next()
        }
    } else {
        next()
    }
})

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
