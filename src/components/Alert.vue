<template>
  <div class="alert alert-dismissible fade show" :class="'alert-' + alertClass" role="alert">
    <span class="block" v-for="(item, index) in message" :key="index">{{ item }}</span>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: [ 'message', 'alertClass' ],
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .block {
    display: block;
  }
</style>
