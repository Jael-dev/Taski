<template>
  <div>
    <div v-if="roundedBtnWithIcon">
      <v-btn
        @click="openMeeting"
        fab
        :color="color"
         elevation="0"
      >
        <v-icon> mdi-video </v-icon>
      </v-btn>
    </div>

    <div v-else>
      <v-btn elevation="0" :color="color" @click="openMeeting">{{
        btnDisplayText
      }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    roomName: String,
    email: String,
    displayName: String,
    roundedBtnWithIcon: Boolean,
    color: String,
    btnDisplayText: String,
  },
  methods: {
    // function to open meeting
    openMeeting() {
      console.log("opening window");
      window.open(
        "https://vue-jitsi-simple.vercel.app/_meet/call?roomName=" +
          this.roomName +
          "&email=" +
          this.email +
          "&displayName=" +
          this.displayName +
          "",
        "popUpWindow",
        "height=auto,width=auto,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
      );
    },
  },
};
</script>

<style scoped>
.wrap {
  margin-bottom: -10;
}
</style>
