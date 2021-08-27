<template>
  <v-card class="rounded-xl" max-width="374" elevation="34">
    <v-card-text class="user">
      <v-sheet
      class="user"
        rounded="circle"
        color="#A544B9"
        elevation="2"
        width="140"
        height="140"
      >
    
          <v-avatar
          class=" ma-1"
          color="white"
          size="130"
          >
            <v-img max-height="236" max-width="236" src="/jael.png"> </v-img>
          </v-avatar>
        </v-sheet>
     
      <v-card-title
      class="user"
      >Jael Ngouzong</v-card-title>
      <v-card-subtitle
        >Full Stack Developer and Project Manager</v-card-subtitle
      >
      <v-rating
        v-model="rating"
        icon-label="custom icon label text {0} of {1}"
        color="#A544B9"
      ></v-rating>
      <v-spacer></v-spacer>
      <v-btn color="#A544B9" elevation="1" rounded-lg>Edit Priviledges</v-btn>
    </v-card-text>
    <v-sheet class="user" color="#A544B9" elevation="2" height="5" width="300" shaped outlined></v-sheet>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
export default {};
</script>
<style>
.user {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
