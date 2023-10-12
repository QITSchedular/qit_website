import Vue from 'vue'
import App from 'src/App.vue'
import store from 'src/store'
import router from 'src/router'
import firebase from 'firebase/app'
import 'firebase/auth';
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

const firebaseConfig = {
    apiKey: "AIzaSyDOnWsQhqEeohpgECkyca-AA4JJMH2_Hso",
    authDomain: "qitsolxxz.firebaseapp.com",
    projectId: "qitsolxxz",
    storageBucket: "qitsolxxz.appspot.com",
    messagingSenderId: "462304856662",
    appId: "1:462304856662:web:798a7928c3dcc4ee7d49f7"
}

let app = null
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig)
}

export default firebase
    
firebase.auth().onAuthStateChanged(user => {
    if (!app) {
        window.onload = function () {
            app = new Vue({
                router,
                store,
                render: h => h(App)
            }).$mount('$app')
        }
    }
})



