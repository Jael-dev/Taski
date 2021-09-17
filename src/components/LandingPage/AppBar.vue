<template>
  <v-app-bar color="transparent" elevation="0" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-img
      class="pa-0 ml-0 "
      src="/Tasky.png"
      max-height="80"
      max-width="80"
    ></v-img>
    <v-spacer></v-spacer>
    <v-app-bar-title>Welcome Here: We are Ntec Labs</v-app-bar-title>

    <v-btn text class="ml-10" outlined color="#A544B9" elevation="0">
      About
    </v-btn>
    <v-btn text class="ml-10" outlined color="#A544B9" elevation="0">
      Features
    </v-btn>

    <v-btn text class="ml-10" outlined color="#A544B9" elevation="0">
      Downloads
    </v-btn>
    <v-btn text class="ml-10" outlined color="#A544B9" elevation="0">
      Support
    </v-btn>
    <v-btn text class="ml-10" outlined color="#A544B9" elevation="0">
      Partners
    </v-btn>
    <v-btn class="ml-10" outlined color="#A544B9" elevation="0" to="/login">
      Sign In
    </v-btn>
    <v-btn class="ml-10" outlined color="#A544B9" elevation="0" to="/registration">
      Sign Up
    </v-btn>
  </v-app-bar>
</template>
