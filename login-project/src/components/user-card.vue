<template>
<div class="row py-5">

  <div class="card col-md-2 m-1" style="width: 18rem;" 
                    v-for="user in users"
                    :key="user.id"
                    :user="user">>>

  <img class="card-img-top" :src="user.image" alt="Card image cap">
  <div class="card-body" >
  
    <p class="card-text">{{ user.firstname}} {{user.lastname}}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Birthday : {{user.birthday}}</li>
    <li class="list-group-item">Description : {{user.description}}</li>   
  </ul>
 </div>

 </div>
</template>

<script>
import Axios from 'axios';
export default {
    name:"user-card",
  //props:['users'],
  data (){
return{
  users:[]

}
},
created(){
const url ='https://sedcohrid.firebaseio.com/api/students.json'

Axios.get(url)
.then(response =>{
  console.log(response)
  const data =response.data
 
  let userscards =[]
        for(let key in data){
                const user = data[key]  
                         
                userscards.push(user)
            }
console.log(userscards)
this.users = userscards


})


.catch(erorr => console.log(error))
},


}

</script>

<style>

</style>
