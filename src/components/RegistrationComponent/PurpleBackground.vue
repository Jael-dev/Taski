<template>


    <div ref="purple" class="purple">
      <div 
      :key="icon.title" 
      class="icon" 
      v-for="icon in icon"
      ref="icon"
      fab
      >
        <v-icon
        color="white"
        size="30"
        fab>{{icon.icon}}</v-icon>
      
      </div>
      <RegistrationCard/>
    </div>
</template>

<script>
import RegistrationCard from '@/components/RegistrationComponent/RegistrationCard.vue'

  export default {
  async mounted() {
    await this.$nextTick()

    this.$refs.icon.forEach(icon => {
      icon.style.left = Math.random() * (this.$refs.purple.clientWidth - icon.clientWidth)+ 'px'
      icon.style.top = Math.random() * (this.$refs.purple.clientHeight - icon.clientHeight) + 'px'
    })
  },
  components:{
    RegistrationCard,
  },
  data () {
      return {
        icon: [
        {icon: 'mdi-view-dashboard-outline mdi-spin'},
          {icon: 'mdi-reorder-horizontal mdi-spin'},
          {icon: 'mdi-folder-multiple-outline mdi-spin'},
          {icon: 'mdi-chart-bell-curve-cumulative mdi-spin'},
          {icon: 'mdi-account-group-outline mdi-spin'},
          {icon: 'mdi-forum-outline mdi-spin'}, 
          {icon: 'mdi-folder-zip-outline mdi-spin'},
          {icon: 'mdi-cog-outline mdi-spin'},
          {icon: 'mdi-file-tree mdi-spin'},
          {icon: 'mdi-calendar-check-outline mdi-spin'},
          {icon: 'mdi-calendar-check mdi-spin'},
          {icon: 'mdi-calendar-blank-multiple mdi-spin'},
          {icon: 'mdi-calendar-multiple-check mdi-spin'},
          {icon: 'mdi-format-list-checks mdi-spin'}, 
          {icon: 'mdi-chart-box-outline mdi-spin'},
          {icon: 'mdi-finance mdi-spin'},
          {icon: 'mdi-timer-off-outline mdi-spin'},
          {icon: 'mdi-calendar-cursor mdi-spin'},
          {icon: 'mdi-chart-timeline-variant-shimmer mdi-spin'},
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

.purple {
    position: relative;
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    background-color: #A544B9;
  }
    .icon {
  width: 20px;
  height: 20px;
  position: absolute;
  /* parent width - box width */
}
</style>