<template>
  <div class="login container">
    <h1 class="mt-5 text-center">Login</h1>
    <div v-if="errors.length">
      <Alert :message="errors" alertClass="danger"></Alert>
    </div>

      <div class="row" v-if="user">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="card mt-4">
            <div class="card-body text-center">
              <h4>Hi, {{user.email}}</h4>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>

      <form @submit="login" class="row" v-else>
        <div class="col-sm-3"></div>
        <div class="card mt-4 col-sm-6">
          <div class="card-body">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" name="email" class="form-control" v-model="email">
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" name="password" class="form-control" v-model="password">
            </div>
            <div class="mt-4 mb-4">
              <button type="submit" class="btn btn-primary btn-block">Login</button>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </form>

  </div>
</template>

<script>

import { auth } from '../main'
import Alert from './Alert'

export default {
  name: 'login',
  components: {
    Alert,
  },
  data() {
    return {
      errors: [],
      email: '',
      password: '',
      user: auth.currentUser,
    }
  },
  methods: {
    login: function(e){
      this.errors = [];

      auth.signInWithEmailAndPassword(this.email, this.password).then(() => {
            this.$router.go(this.$router.push({ path: '/' }))
          }, (err) => {
            this.errors.push(err.message);
          }
        );
      
      e.preventDefault();
    }
  }

}
</script>