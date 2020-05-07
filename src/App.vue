<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      res: {}
    }
  },
  mounted() {
    this.axios.get('/mock/user/login.json').then(res => {
      this.res = res
    });
  }
}
</script>
