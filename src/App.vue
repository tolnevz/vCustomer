<template>
  <div id="app">
    <NavBar :key="user"></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import { auth } from './main'
import NavBar from './components/NavBar'
export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      user: auth.currentUser,
    }
  },
}
</script>

