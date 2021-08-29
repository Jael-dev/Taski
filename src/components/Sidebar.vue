<template>
  <v-app>
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
            <v-sheet height="20" width="5" shaped color="purple"></v-sheet>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn 
          color="purple"
          block
          >
            Logout
          </v-btn>
        </div>
      </template>
      <!--  -->
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import Appbar from "@/components/Appbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Appbar,
    Footer,
  },
  data() {
    return {
      hover: false,
      drawer: true,
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
};
</script>

