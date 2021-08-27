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
import SideBar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Info from "@/components/Info";

export default {
  name: "App",
  components: {
    Appbar,
    SideBar,
    Footer,
    Info
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