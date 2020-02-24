<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-5" :key="user">
      <div class="container">
        <router-link class="navbar-brand" to="/"><i class="fa fa-address-card"></i> vCustomers</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link class="nav-link" to="/" v-if="user">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
            <li class="nav-item"><router-link class="nav-link" to="/add" v-if="user">Add Customer</router-link></li>
          </ul>
          <ul class="navbar-nav btns" v-if="user">
            <li class="nav-item"><span class="navbar-text">Hi, {{user.email}}</span></li>
            <li class="nav-item"><button class="btn btn-sm btn-outline-secondary" @click="logout">Log Out</button></li>
          </ul>
          <ul class="navbar-nav btns" v-else>
            <li class="nav-item"><router-link class="btn btn-sm btn-outline-secondary" to="/login">Login</router-link></li>
            <li class="nav-item"><router-link class="btn btn-sm btn-outline-secondary" to="/signup">SignUp</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { auth } from '../main'
export default {
  name: 'NavBar',
  data() {
    return {
      user: auth.currentUser,
    }
  },
  methods: {
    logout: function(){
      auth.signOut().then(() => {
        this.$router.go(this.$router.push({ path: this.$route.fullPath }))
      })
    }
  },

}
</script>

<style scoped>
  li.nav-item {
    align-self: center;
  }
  .fa-address-card {
    padding-right: 10px;
  }
  .btns li:first-child {
    padding-right: 10px;
  }
</style>