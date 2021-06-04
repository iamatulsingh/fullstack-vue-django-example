<template>
  <div class="nav-bar">
    <nav class="navbar navbar-expand-lg nav-1">
      <div class="container mw-0 px-3">

        <a class="navbar-brand" href="#">
        <img src="../assets/logo.png" width="" height="27" class="d-inline-block align-top" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"><router-link to = "/" exact>Posts &nbsp;&nbsp;</router-link></li>
            <li class="nav-item" v-if="accessToken!=null"><router-link to = "/logout"> Logout</router-link></li>
          </ul>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Navbar',
    computed: mapState(['accessToken'])
  }
</script>

<style scoped>
  a {
    color:#bebebe;
    text-decoration: none;
  }
  .nav-bar, .nav, .container {
    background-color: #2f2f2f !important;
  }
</style>