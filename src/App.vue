<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'App',
  data() {
    return {

    }
  },
  mounted() {
    // storage.setItem("a",1);
    // storage.setItem("user",{a:1})
    // storage.setItem("abc",{b:2},"user")
    // storage.clear("a");
    console.log(storage.getItem('a',"user"));
  }
}
</script>
