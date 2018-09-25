<template>
  <div>
     <header-comp  ></header-comp>
    <router-view></router-view>
    <app-footer class="footer"></app-footer>
    
  
  
  </div>
</template>

<script>
import HeaderComp from'./components/headercomp.vue'
import AppFooter from './components/app-footer.vue'
import UserCard from './components/user-card.vue'

export default {
    name: "App",
  data() {
    return {
    
    };
  },
  components:{
    HeaderComp,
    AppFooter,
  }
  
}
</script>

<style>
.footer {
    position: absolute;
    width: 100%;
    height: 15%;
    right: 0;
    bottom: 0;
    left: 0;
    clear: both;
}



</style>
