<template>
  <v-app>
    <!-- app bar -->
    <Appbar />
    <!-- / app bar -->

    <!-- info -->
    <Info/>
    <!-- / info -->

    <v-main>
      <router-view />
    </v-main>

    <!-- side bar -->
    <SideBar />
    <!-- / side bar -->

    <!-- footer -->
    <Footer/>
    <!-- / footer -->



  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import Info from "@/components/Info";
import SideBar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Appbar,
    Info,
    SideBar,
    Footer,
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