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
* {
  font-family: "Times New Roman", Times, serif;
}
a:hover{
  text-decoration: none;
  color: #a544b9 !important;
}
</style>