<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
import auth from '../auth'

export default {
  data () {
    return {
      loggedIn: auth.loggedIn()
    }
  },
  created () {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn
    }
  }
}
</script>
