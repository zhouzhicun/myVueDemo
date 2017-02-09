


import Vue from 'vue'
import App from './App'
import router from './router'



// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   // replace the content of <div id="app"></div> with App
//   render: h => h(App)
// })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})




