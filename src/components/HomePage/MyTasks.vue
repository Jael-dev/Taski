<template>
<div class="mt-3 ml-2">
  <v-card max-width="374" class="rounded-xl mt-3 task">
    <v-toolbar elevation="0" >
      <v-spacer></v-spacer>
      <v-title> My Tasks ({{ tasks.length }}) </v-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-divider></v-divider>
      <v-card-text v-for="(task, index) in tasks" :key="task.id" >
        <v-list flat>
          <v-list-item>
            <template v-text="scrollInvoked">
              <v-list-item-action>
                <v-text>{{ index + 1 }}</v-text>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  :class="{ 'text-decoration-line-through': task.state === 1 }"
                  >{{ task.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon>
                  <v-icon
                    fab
                    color="white"
                    :class="{
                      green: task.state === 1,
                      orange: task.state === 2,
                      red: task.state === 3,
                    }"
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
      tasks: [
        {
          id: 1,
          title: "lol1",
          description: "lol 2",
          state: 1,
        },
        {
          id: 2,
          title: "lol2",
          description: "lol 2",
          state: 1,
        },
        {
          id: 4,
          title: "lol3",
          description: "lol 2",
          state: 2,
        },
        {
          id: 3,
          title: "lol4",
          description: "lol 2",
          state: 3,
        },
        {
          id: 4,
          title: "lol5",
          description: "lol 2",
          state: 1,
        },
        
      ],
    };
  },
 

  /*methods:{

    async get_data(){
      try{

      const response = await axios.get('http://localhost:8001/api/tasks')

      this.tasks = response['data']['data']

      }catch (e) {
        
      this.errors.push(e)
    }


    }
  },

   mounted(){
    this.get_data()
  },
  */
};
</script>

<style scoped>
.task{
  /* width: 374px; */
  height:374px;/* or any height you want */
  overflow-y:auto

}
</style>
