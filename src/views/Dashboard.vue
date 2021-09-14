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
       <v-text>Trend</v-text>
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
import Sparkline from '@/components/HomePage/Sparkline.vue'
import Chart from '@/components/ChartsComponent/D3SlicesChart.vue'
import Info from '@/components/Info.vue'
export default ({

  components:{
    Project,
    MyTasks,
    Calendar,
    Sparkline,
    Projects,
    Chart,
    Info
  }

})
</script>

<style scoped>
.dashboard{
  
}
</style>