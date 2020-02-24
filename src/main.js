import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueResource from 'vue-resource'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

Vue.use(firestorePlugin)
Vue.use(vueResource)

let app = ''

firebase.initializeApp({
  apiKey: "AIzaSyBuk1j3-MpJSLhXRda4ZdDPsl7dqGfLDzo",
  authDomain: "vcustomers2.firebaseapp.com",
  databaseURL: "https://vcustomers2.firebaseio.com",
  projectId: "vcustomers2",
  storageBucket: "vcustomers2.appspot.com",
  messagingSenderId: "786681549512",
  appId: "1:786681549512:web:45c057a948e858fb1f0bfd"
})

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

auth.onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
  }
})


