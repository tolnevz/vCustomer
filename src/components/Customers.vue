<template>
  <div class="customers container">
    <h1 class="mt-5">Manage Customers</h1>

    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, idx) in customers" :key="idx">
          <td>{{ customer.first_name }}</td>
          <td>{{ customer.last_name }}</td>
          <td>{{ customer.email }}</td>
          <td><router-link class="btn btn-primary" v-bind:to="'/customer/' + customer.id">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import { db } from '../main'

export default {
  name: 'customers',
  data () {
    return {
      customers: [],
    }
  },
  firestore() {
    return {
      customers: db.collection('customers').orderBy('last_name')
    }
  },
  methods: {

  },
}
</script>

<style scoped>

</style>
