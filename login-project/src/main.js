import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2Filters from 'vue2-filters'

Vue.config.productionTip = false
Vue.use(Vue2Filters)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  // created() {
  //   router.beforeEach((to, from, next) => {
  //     if (false) {
  //       next();
  //     } else {
  //       next('/login');
  //     }
  //   })
  // }
})
