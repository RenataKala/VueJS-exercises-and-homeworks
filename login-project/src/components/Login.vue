<template>
    <form class="col-md-3 center-element">
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
                type="email" 
                class="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
                type="password" 
                class="form-control" 
                id="exampleInputPassword1" 
                placeholder="Password"
                v-model="password">
        </div>
        <button 
            type="submit" 
            class="btn btn-primary" 
            @click.prevent="login">Submit</button>

            <div class="alert alert-danger mt-3" role="alert" v-if="displayError"> 
            <p >{{errors.replace(/_/g," ")|lowercase| capitalize}}</p>
            </div>
    </form>
</template>

<script>
import Axios from 'axios'
export default {
  data() {
    return {
      email: "",
      password: "",
      errors:"",
     
    };
  },
  computed:{
    displayError(){
      return this.errors;
    }
  },
   beforeRouteEnter:(to,from,next) => {
                const token = localStorage.getItem("token");
                if (token != null) {
                    next(false);
                }
                else{
                    next();
                }
   },
  methods: {
    login() {
      const url =
        "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyCw-lZIhvFfrU2Y2GBbZr2kXO1BmVstvHM";
      const data = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }
      console.log(data)
      Axios.post(url,data)
      .then(response => {
                console.log(response)

      const now = new Date().getTime();
      const expiresInMiliseconds = Number.parseInt(data.expiresIn, 10) * 1000;
      const expiresAtDate = new Date(now + expiresInMiliseconds);
          console.log(expiresAtDate);
          localStorage.setItem("token", response.idToken);
          localStorage.setItem("expiresAt", expiresAtDate);

          this.$router.replace("/");
    })      
      .catch(error => {
console.log(error.response.data.error.message)
this.errors = error.response.data.error.message
      })
    }
  }
};
</script>

<style>
.center-element {
  margin: auto;
  width: 50%;
  padding: 10px;
}
</style>

    // fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //       "Content-Type": "application/json; charset=utf-8"
    //     }
    //   })
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then(data => {
    //       //   const now = new Date();
    //       //   console.log(now);
    //       //   const year = now.getFullYear();
    //       //   const month = now.getMonth() + 1;
    //       //   const day = now.getDate();
    //       //   const h = now.getHours();
    //       //   const m = now.getMinutes();
    //       //   const s = now.getSeconds();
    //       //   if (h < 10) {
    //       //       h = "0" + h;
    //       //   }
    //       //   const expiresInString = `${year}-${month}-${day}T${h+1}:${m}:${s}`;
    //       //   console.log(expiresInString);

    //       //   const expiresIn = new Date(expiresInString);
    //       //   console.log(JSON.stringify(expiresIn));
    //       const now = new Date().getTime();
    //       const expiresInMiliseconds =
    //         Number.parseInt(data.expiresIn, 10) * 1000;
    //       const expiresAtDate = new Date(now + expiresInMiliseconds);
    //       console.log(expiresAtDate);
    //       localStorage.setItem("token", data.idToken);
    //       localStorage.setItem("expiresAt", expiresAtDate);

    //       this.$router.replace("/");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
