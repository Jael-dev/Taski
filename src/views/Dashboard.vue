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
       <Notification/>
       <Chat/>
     </v-col>
   </v-row>
 </div>
</template>

<script>
import Project from '@/components/HomePage/Project.vue'
import Projects from '@/components/HomePage/Projects.vue'
import MyTasks from '@/components/HomePage/MyTasks.vue'
import Calendar from '@/components/HomePage/Calendar.vue'
import Notification from '@/components/HomePage/Notification.vue'
import Chat from '@/components/HomePage/chat.vue'
import Info from '@/components/Info.vue'
export default ({

  components:{
    Project,
    MyTasks,
    Calendar,
    Projects,
    Notification,
    Info,
    Chat
  },
})
</script>

<style scoped>
.dashboard{
  
}
</style>