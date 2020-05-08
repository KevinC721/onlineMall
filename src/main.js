import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './util/env'


// 根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
// 设置超时
axios.defaults.timeout = 8000;
// 根据环境变量不同获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;

// 拦截器，用于同一处理请求响应
axios.interceptors.response.use(function(response) {
  let res = response.data;
  // 0 - 成功时返回数据
  if(res.status == 0) {
    return res.data;
  // 10 - 未成功时
  }else if(res.status == 10) {
    window.location.href = "/#/login";
  }else {
    alert(res.msg);
  }
})


Vue.use(VueAxios ,axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
