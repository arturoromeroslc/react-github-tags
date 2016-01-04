import app from 'ampersand-app'
import Me from './models/me'
import Router from './router'
import styles from './styles/main.styl'

window.app = app;

app.extend({
    init() {
        this.me = new Me()
        this.me.fetchInitialData()
        this.router = new Router()
        this.router.history.start()
    }
})

app.init()