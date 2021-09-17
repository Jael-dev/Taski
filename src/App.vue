<template>
  <v-app id="app">
    
    <!-- app bar -->
    <Appbar v-if="hasDashboard()"/>
    <!-- / app bar -->
   
    <!-- Where all the routes are loaded -->
     <v-main>  
       <router-view />
    </v-main>
    <!-- Where all the routes are loaded -->

  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
export default {
  name: "App",
  components: {
    Appbar,
  },

  methods:{
   hasDashboard(){
     
     return (!(this.$router.history.current.path === '/registration' || this.$router.history.current.path === '/login' || this.$router.history.current.path === '/'))
     
    }
  },

};
</script>

<style>
* {
  font-family: "Times New Roman", Times, serif;
}
a:hover{
  text-decoration: none;
  color: #a544b9 !important;
}
</style>