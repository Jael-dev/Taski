<template>
    <div class="container1">
      <v-sparkline 
      :fill="true"
      :gradient="['#BC00FE','#A544B9','#8F00FF']"
      :line-width="2"
      :padding="0"
      :smooth="10"
      :value="[6, 2, 5, 1,  4, 0, 1, 3, 2, 9]"
      auto-draw
    >
      </v-sparkline>
    </div>

</template>
<script>

export default {

  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style scooped>

.container1 {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    background-color:transparent;
    }
  
</style>
