<template>

<!-- It is always better to put the appBar and Sidebar in the same view. This reduces view problems. -->

  <span>
    <v-app-bar 
      app
      color="#A544B9"
      dense
      dark
      height="56"
      v-if="isLoggedIn"
    >

      <v-toolbar-title>{{routeName}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <!-- video component -->
      <Video 
        roomName="testing"
        email="teste@gmail.com"
        displayName="jael"
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
          <v-img :alt="`${this.user.name} avatar`" :src=this.user.avatar></v-img>
        </v-list-item-avatar>

        <v-list-item-title> {{this.user.name}}</v-list-item-title>

         <!-- <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>  -->
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item  v-for="item in items" :key="item.title" :to="item.to" :target="item.target" link>
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
          @click="logout()"
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
import Video from '@/components/VideoComponents/video.vue'
export default({
  components:{
    Footer,
    Video
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
    },
  data() {
    return {
      user:'',
      hover: false,
      drawer: true,
      mini: false,
      routeName:"",
      items: [
        {
          id:1,
          title: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          to: "/dashboard",
          target:""
        },
        { 
          id:2,
          title: "Orders", 
          icon: "mdi-reorder-horizontal", 
          to: "/orders",
          target:"" 
        },
        {
          id:3,
          title: "Projects",
          icon: "mdi-folder-multiple-outline",
          to: "/projects",
          target:""
        },
        {
          id:4,
          title: "Reports",
          icon: "mdi-chart-bell-curve-cumulative",
          to: "/reports",
          target:""
        },
        { 
          id:5,
          title: "Teams", 
          icon: "mdi-account-group-outline", 
          to: "/teams" ,
          target:""
        },
        { 
          id:6,
          title: "Archives", 
          icon: "mdi-folder-zip-outline", 
          to: "/archives",
          target:"" 
        },
        { 
          id:7,
          title: "Users", 
          icon: "mdi-account-circle-outline", 
          to: "/users" ,
          target:""
        },
        { 
          id:9,
          title: "Settings", 
          icon: "mdi-cog-outline", 
          to: "/settings" ,
          target:""
        },
      ],
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
      logout: function () {
        this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
      }
  },
  watch:{
    '$route'(to,from){
      this.routeName=this.$route.name

    }

  },
  mounted(){
   this.user = JSON.parse(localStorage.getItem("user"));
  }

   
 })
</script>