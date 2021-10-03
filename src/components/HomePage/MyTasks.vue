<template>
<div class="mt-3 ml-2">
  <v-card max-width="374" class="rounded-xl mt-3 task">
    <v-toolbar elevation="0" >
      <v-spacer></v-spacer>
      <p> My Tasks ({{ tasks.length }}) </p>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>
      <v-card-text v-for="(task, index) in tasks" :key="task.id" >
        <v-list flat>
          <v-list-item>
            <template v-text="scrollInvoked">
              <v-list-item-action>
                <p>{{ index + 1 }}</p>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.state === 3,
                  'text--secondary':task.state === 2,
                  'text--disabled':task.state === 1  }"
                  >{{ task.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-btn  
                :class="{
                      green: task.state === 3,
                      orange: task.state === 2,
                      red: task.state === 1,
                    }"
                    icon>
                  <v-icon
                    fab
                    color="white"
                   
                    >mdi-check</v-icon
                  >
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks:{}
    };
  },
 

  methods:{

    async get_data(){
      try{

      const response = await axios.get('http://localhost:8000/api/tasks',
       {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.$store.state.token
          }   
          })

      this.tasks = response['data']['data']

      }catch (e) {
        
      console.log(this.errors)
    }


    }
  },

   mounted(){
    setInterval(() => {
      this.get_data();
    }, 5000);
  },
  
};
</script>

<style scoped>
.task{
  /* width: 374px; */
  height:374px;/* or any height you want */
  overflow-y:auto

}
</style>
