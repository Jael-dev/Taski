 <template>
 <div>
   <v-row>
     <v-col><Project/></v-col>
     <v-col><MyTasks/></v-col>
     <v-col>
       <v-row><Calendar/></v-row>
       <v-row></v-row>
     </v-col>
   </v-row>
 </div>
</template>

<script>
import Project from '@/components/HomePage/Project.vue'
import MyTasks from '@/components/HomePage/MyTasks.vue'
import Calendar from '@/components/HomePage/Calendar.vue'
import Sparkline from '@/components/HomePage/Sparkline.vue'
export default ({

  components:{
    Project,
    MyTasks,
    Calendar,
    Sparkline
  }

})
</script>
