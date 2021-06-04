<template>
  <div class="posts">
    <Navbar></Navbar> 
      <div class="album py-5">
          <div class="container">
            <div class="row">
              <div v-for="posts in APIData" :key="posts.id" class="col-md-4">
                <div class="card mb-4 box-shadow">
                  <img class="card-img-top" src="https://via.placeholder.com/150x100" alt="Card image cap">
                  <div class="card-body">
                      <h4 class=""><a class="text-secondary" href="">{{posts.title}}</a></h4>
                      <p class="card-text">{{posts.content}}</p>
                      <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <a href="" class="btn btn-sm btn-outline-primary" role="button" aria-pressed="true">View</a>
                        <a href="" class="btn btn-sm btn-outline-secondary" role="button" aria-pressed="true">Edit</a>
                      </div>
                      <small class="text-muted">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import { getAPI } from '../api'
import Navbar from '../components/Navbar'
import { mapState } from 'vuex'

export default {
  name: 'Posts',

  onIdle () {
      this.$store.dispatch('userLogout')
        .then(() => {
          this.$router.push({ name: 'Login' })
        })
    },
  components: {
    Navbar
  },

  computed: mapState(['APIData']),
    created () {
      let localStorageToken = localStorage.getItem('token')
      if (!localStorageToken && this.$store.state.accessToken){
        localStorage.setItem('token', this.$store.state.accessToken)
      }
      else {
        this.$store.state.accessToken = localStorageToken
      }

      let token = this.$store.state.accessToken || localStorageToken || ''
      getAPI.get('posts/', { headers: { Authorization: `Bearer ${token}` } })
        .then(response => {
          this.$store.state.APIData = response.data
        })
        .catch(err => {
          if (localStorage.getItem('token'))
            localStorage.removeItem('token')
          this.$router.push({ name: 'Login' })
        })
    }
}
</script>

<style scope>
  body { 
    background-color:#1f1f1f !important;
  }
  .album {
    background-color:#1f1f1f !important;
  }
  .card {
    background-color:#2f2f2f !important;
    border-radius: 2% !important;
  }
  .card-text {
    color: #6c757d !important;
  }
  input {
    padding: 25px 10px;
  }
  h1, label {
    color: #fff;
  }
</style>