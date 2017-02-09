import Vue from 'vue'
import VueRouter from 'vue-router'


import auth from '../auth'
import App from '../components/App.vue'
import About from '../components/About.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import AAA from '../components/AAA.vue'
import BBB from '../components/BBB.vue'

function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}



// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })



Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',

  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'aaa',
          component: AAA
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'bbb',
          component: BBB
        }
      ]

     },
    { path: '/dashboard', component: Dashboard, beforeEnter: requireAuth },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/')
      }
    }
  ]
})