<template>
  <div>
    <v-app-bar 
      app
      color="#A544B9"
      dense
      dark
    >

      <v-toolbar-title>{{}}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-video</v-icon>
      </v-btn>

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
  </div>
</template>


<script>

export default({
    methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark) {
        this.defaultAppBarColour = "#272727";
      } else {
        this.defaultAppBarColour = "#f15a24";
      }
    },
  },
   mini: false,
 })

</script>