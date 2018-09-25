<template>

<nav class="nav nav-pills nav-fill">

  <router-link to="/" active-class="active" exact class="nav-item nav-link ">HOME</router-link>
  <router-link to="/users" active-class="active"  class="nav-item nav-link ">USERS</router-link>
  <router-link to="/comments" active-class="active" class="nav-item nav-link ">COMMENTS</router-link>
  <router-link to="/login" active-class="active" class="nav-item nav-link ">LOGIN</router-link>
  <button class="col-md-2 btn btn-warning" @click="logout">LOG OUT</button>
    
</nav>

</template>

<script>


export default {
  name: "header-comp",
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  }
};
</script>

<style>
</style>
