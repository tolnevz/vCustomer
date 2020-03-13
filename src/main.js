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
  apiKey: "your-api-key",
  authDomain: "your-domain",
  databaseURL: "your-db-url",
  projectId: "your-projectId",
  storageBucket: "your-storageBucket",
  messagingSenderId: "your-messagingSenderId",
  appId: "your-appId"
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


