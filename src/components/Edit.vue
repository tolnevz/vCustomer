<template>
  <div class="edit container">
    <h1 class="mt-5">Edit Customer</h1>
    <div v-if="errors.length">
      <Alert :message="errors" alertClass="danger"></Alert>
    </div>
    <form @submit="updateCustomer">
      <div class="card mt-4">
        <div class="card-header">
          <h4>Customer Info</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="first_name">First Name</label>
            <input type="text" name="first_name"
                   :class="[!customer.first_name ? 'is-invalid' : '', 'form-control']" 
                   v-model="customer.first_name">
          </div>
          <div class="form-group">
            <label for="last_name">Last Name</label>
            <input type="text" name="last_name"
                   :class="[!customer.last_name ? 'is-invalid' : '', 'form-control']" 
                   v-model="customer.last_name">
          </div>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header">
          <h4>Customer Contacts</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email"
                   :class="[!customer.email ? 'is-invalid' : '', 'form-control']"
                   v-model="customer.email">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" name="phone" 
                   :class="[!customer.phone ? 'is-invalid' : '', 'form-control']"
                   v-model="customer.phone">
          </div>
        </div>
      </div>

      <div class="card mt-4">
        <div class="card-header">
          <h4>Customer Location</h4>
        </div>
        <div class="card-body">
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" name="address" 
                   :class="[!customer.address ? 'is-invalid' : '', 'form-control']"
                   v-model="customer.address">
          </div>
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" name="city" 
                   :class="[!customer.city ? 'is-invalid' : '', 'form-control']"
                   v-model="customer.city">
          </div>
        </div>
      </div>
      <div class="mt-4 mb-4">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
  </div>
</template>

<script>
import { db } from '../main'
import Alert from './Alert'

export default {
  name: 'edit',
  components: {
    Alert,
  },
  data() {
    return {
      errors: [],
      customer: {},
    }
  },
  firestore() {
    return {
      customer: db.collection('customers').doc(this.$route.params.id)
    }
  },
  methods: {
    updateCustomer(e){

      this.errors = [];

      if(!this.customer.first_name){
        this.errors.push('Please add First Name')
      }

      if(!this.customer.last_name){
        this.errors.push('Please add Last Name')
      }

      if(!this.customer.email){
        this.errors.push('Please add Email')
      }

      if(!this.customer.phone){
        this.errors.push('Please add Phone number')
      }

      if(!this.customer.address){
        this.errors.push('Please add Address')
      }

      if(!this.customer.city){
        this.errors.push('Please add City')
      }

      if(this.errors.length == 0){

        let updCustomer = {
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          email: this.customer.email,
          phone: this.customer.phone,
          address: this.customer.address,
          city: this.customer.city,
        }

        db.collection('customers').doc(this.$route.params.id).update(updCustomer).then(()=> {
          this.$router.push({ path: '/', query: {alert: 'Customer Updated'} })
        });
        
        e.preventDefault();
      }
      e.preventDefault();
    }
  },
}
</script>
