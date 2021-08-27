<template>

    <div ref="container" class="container">
      <div 
      :key="icon.icon" 
      class="icon" 
      v-for="icon in icon"
      ref="icon"
      fab
      >
        <v-icon
        color="#A544B9">{{icon.icon}}</v-icon>
      
      </div>
      <Sparkline/>
      <TechGirl/>
      <AppBar/>
      <OrderButton/>
    </div>
</template>

<script>
import Sparkline from "@/components/LandingPage/Sparkline"
import TechGirl from "@/components/LandingPage/TechGirl"
import AppBar from "@/components/LandingPage/AppBar"
import OrderButton from "@/components/LandingPage/OrderButton"
  export default {
  async mounted() {
    await this.$nextTick()

    this.$refs.icon.forEach(icon => {
      icon.style.left = Math.random() * (this.$refs.container.clientWidth - icon.clientWidth)+ 'px'
      icon.style.top = Math.random() * (this.$refs.container.clientHeight - icon.clientHeight) + 'px'
    })
  },
  components:{

      Sparkline,
      TechGirl,
      AppBar,
      OrderButton
  },
  data () {
      return {
        icon: [
          // {icon: 'mdi-view-dashboard-outline mdi-spin'},
          // {icon: 'mdi-reorder-horizontal mdi-spin'},
          // {icon: 'mdi-folder-multiple-outline mdi-spin'},
          // {icon: 'mdi-chart-bell-curve-cumulative mdi-spin'},
          // {icon: 'mdi-account-group-outline mdi-spin'},
          // {icon: 'mdi-forum-outline mdi-spin'}, 
          // {icon: 'mdi-folder-zip-outline mdi-spin'},
          // {icon: 'mdi-cog-outline mdi-spin'},
          // {icon: 'mdi-file-tree mdi-spin'},
          // {icon: 'mdi-calendar-check-outline mdi-spin'},
          // {icon: 'mdi-calendar-check mdi-spin'},
          // {icon: 'mdi-calendar-blank-multiple mdi-spin'},
          // {icon: 'mdi-calendar-multiple-check mdi-spin'},
          // {icon: 'mdi-format-list-checks mdi-spin'}, 
          // {icon: 'mdi-chart-box-outline mdi-spin'},
          // {icon: 'mdi-finance mdi-spin'},
          // {icon: 'mdi-timer-off-outline mdi-spin'},
          // {icon: 'mdi-calendar-cursor mdi-spin'},
          // {icon: 'mdi-chart-timeline-variant-shimmer mdi-spin'},
          {icon: 'mdi-chart-multiline mdi-spin'},
          {icon: 'mdi-chart-pie mdi-spin'},
          {icon: 'mdi-chart-box mdi-spin'}, 
          {icon: 'mdi-chart-box-plus-outline mdi-spin'},
          {icon: 'mdi-cahart-box-outline mdi-spin'},
          {icon: 'mdi-cahart-timeline-variant mdi-spin mdi-spin'},
          {icon: 'mdi-timer-10 mdi-spin'},
          {icon: 'mdi-av-timer mdi-spin'},
          {icon: 'mdi-archive-clock-outline mdi-spin'},
          {icon: 'mdi-timer-sand-empty mdi-spin'},
          {icon: 'mdi-timer-sand-full mdi-spin'}, 
          {icon: 'mdi-timer-3 mdi-spin'},
          {icon: 'mdi-timer-outline mdi-spin'},
        ],
      }
    },
}
</script>

<style scooped>

.container {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: #ffffff;
    }
    .icon {
  width: 30px;
  height: 30px;
  position: absolute;
  /* parent width - box width */
}
</style>