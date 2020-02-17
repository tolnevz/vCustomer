<template>
  <div class="details container">
    <router-link to="/" class="btn btn-outline-secondary btn-sm mb-2">Back</router-link>
    <h1 class="mt-2">{{ customer.first_name }} {{ customer.last_name }}
      <span class="pull-right">
        <router-link class="btn btn-primary mr-2" v-bind:to="'/edit/'+ customer.id">Edit</router-link>
        <button @click="deleteCustomer(customer.id)" class="btn btn-danger">Delete</button>
      </span>
    </h1>
    <ul class="list-group mt-3">
      <li class="list-group-item"><i class="fa fa-phone"></i> {{ customer.phone }}</li>
      <li class="list-group-item"><i class="fa fa-envelope"></i> {{ customer.email }}</li>
    </ul>
    <ul class="list-group mt-3">
      <li class="list-group-item"><i class="fa fa-map-marker"></i> {{ customer.address }}</li>
      <li class="list-group-item"><i class="fa fa-street-view"></i> {{ customer.city }}</li>
    </ul>
  </div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'CustomerDetails',
  data () {
    return {
      customer: '',
    }
  },
  firestore() {
    return {
      customer: db.collection('customers').doc(this.$route.params.id)
    }
  },
  methods: {
    deleteCustomer(id){
      db.collection('customers').doc(id).delete().then(() =>{
        this.$router.push({ path: '/', query: {alert: 'Customer Deleted'} })
      })
    }
  }
}
</script>

<style scoped>

</style>
