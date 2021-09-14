<template>

<!-- It is always better to put the appBar and Sidebar in the same view. This reduces view problems. -->

  <span>
    <v-app-bar 
      app
      color="#A544B9"
      dense
      dark
      height="56"
    >

      <v-toolbar-title>{{}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <!-- video component -->
      <Video 
        roomName="testing"
        email="teste@gmail.com"
        displayName="fotiecodes"
        color="#A544B9"
        roundedBtnWithIcon/>
        
      <!-- / video component -->
      <!-- Dark option -->
      <div>
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn elevation="0" v-on="on" color="grey" x-small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn elevation="0" v-on="on" color="info" x-small fab @click="darkMode">
              <v-icon color="white">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div>
      <!-- / Dark option -->

      
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      app
    >
      <v-list-item to="/u/profile" class="px-2" color="#A544B9">
        <v-list-item-avatar>
          <v-img src="/jael.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Jaël Kalvin</v-list-item-title>

         <!-- <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>  -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
           <v-list-item-action>
             <v-spacer></v-spacer>
            <v-sheet shaped color="#A544B9" width="5" height="20"></v-sheet>
        </v-list-item-action>
        </v-list-item>
      </v-list>
               <template v-slot:append>
        <div class="pa-2">
          <v-btn 
          color="#A544B9"
          block
          @click="Login()"
          >
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    
     <!-- <Footer/> -->
  </span>
</template>


<script>
import Footer from '@/components/Footer.vue'
import Video from '@/components/VideoComponents/Video.vue'

export default({
  components:{
    Footer,
    Video
  },
  data() {
    return {
      hover: false,
      drawer: true,
      mini: false,
      items: [
        {
          id:1,
          title: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          to: "/dashboard",
        },
        { 
          id:2,
          title: "Orders", 
          icon: "mdi-reorder-horizontal", 
          to: "/orders" 
        },
        {
          id:3,
          title: "Projects",
          icon: "mdi-folder-multiple-outline",
          to: "/projects",
        },
        {
          id:4,
          title: "Reports",
          icon: "mdi-chart-bell-curve-cumulative",
          to: "/reports",
        },
        { 
          id:5,
          title: "Teams", 
          icon: "mdi-account-group-outline", 
          to: "/teams" 
        },
        { 
          id:6,
          title: "Chat", 
          icon: "mdi-forum-outline", 
          to: "/chat" 
        },
        { 
          id:7,
          title: "Archives", 
          icon: "mdi-folder-zip-outline", 
          to: "/archives" 
        },
        { 
          id:8,
          title: "Users", 
          icon: "mdi-account-circle-outline", 
          to: "/users" 
        },
        { 
          id:9,
          title: "Settings", 
          icon: "mdi-cog-outline", 
          to: "/settings" 
        },
      ],
      user:[
        {
          id:1,
          permissions:[
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ]
        }
      ],
      mini: false,
    };
  },
    methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.defaultAppBarColour = "#272727";
      } else {
        this.defaultAppBarColour = "#f15a24";
      }
    },
    Login(){
      let route = this.$router.resolve({ path: "/dashboard" });
      window.open(route.href);
    }
  },
   
 })
</script>