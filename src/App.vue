<template>
  <v-app id="app">
    <div>
    <!-- app bar -->
    <Appbar />
    <!-- / app bar -->
   
    <!-- Where all the routes are loaded -->
     <v-main>  
       <router-view />
    </v-main>
    <!-- Where all the routes are loaded -->
</div>

  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
export default {
  name: "App",
  components: {
    Appbar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a:hover{
  text-decoration: none;
  color: #a544b9 !important;
}
</style>