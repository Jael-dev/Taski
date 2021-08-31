<template>
  <center>
    <v-footer class="__footer">
      <v-flex
        class="text-xs-center"
      >Copyright &copy; Taski {{ new Date().getFullYear() }}. Powered by Jael Kalvin.me</v-flex>
    </v-footer>
  </center>
</template>
<style scoped>
.__footer {
  color: #5f6368;
  font-size: 14.5px;
  background: #5f6368;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>