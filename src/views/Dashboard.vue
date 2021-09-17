 <template>
 <div class="dashboard"> <Info/>
   <v-row>
     <v-col><Project/></v-col>
     <v-col>
       <MyTasks/>
       <Projects/>
      </v-col>
     <v-col>
       <Calendar/>
       <p>Trend</p>
       <Chart/>
       <Chart/>
       <Chart/>
     </v-col>
   </v-row>
 </div>
</template>

<script>
import Project from '@/components/HomePage/Project.vue'
import Projects from '@/components/HomePage/Projects.vue'
import MyTasks from '@/components/HomePage/MyTasks.vue'
import Calendar from '@/components/HomePage/Calendar.vue'
import Chart from '@/components/ChartsComponent/D3SlicesChart.vue'
import Info from '@/components/Info.vue'
export default ({

  components:{
    Project,
    MyTasks,
    Calendar,
    Projects,
    Chart,
    Info
  },
  //  props: {
  //   userId: id,
  //   userToken: token 
  // },

})
</script>

<style scoped>
.dashboard{
  
}
</style>