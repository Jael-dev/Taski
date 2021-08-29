<template>
<div class="mt-3 ml-2">
  <v-card class="rounded-xl mb-3" max-width="374" v-for="project in projects" :key="project.id">
    <v-card-text>
        <v-col
        align-self="center"
        >
      <v-row align-content="space-between">
       <v-sheet
            shaped
            class="mr-5 mb-5"
            height="40"
            width="40"
            color="#A544B9"
          ></v-sheet>
           <div class="mt-3">
        <v-text
        
        >{{project.title}}</v-text></div>
        <v-spacer></v-spacer>
        <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
        
      </v-row>
      <v-spacer></v-spacer>
      <v-row align-content="space-between" class="mt-5">
        <v-btn disabled>Select Progress</v-btn>
        <v-btn  outlined color="purple">high priority</v-btn>
      </v-row>
      <v-spacer></v-spacer>
      <v-row align-content="space-between" class="mt-5">
        <v-row>
            <div class="ma-3">
          <v-text>
            Task Done : variable here
          </v-text>
            </div>
        </v-row>
      </v-row>
       <v-row align-content="space-between" class="mt-5 mb-5 ">
          <v-progress-linear
            color="blue"
            rounded
            value="60"
          ></v-progress-linear>
        </v-row>

      <v-row align-content="space-between" class="mt-5">
        <v-btn outlined color="green">IOS App</v-btn>
        <v-btn  outlined color="purple">Android</v-btn>
      </v-row>
      <v-row align-content="space-between" class="mt-5">
        <v-btn outlined color="orange"> DUE DATE: {{project.delivery_date}}</v-btn>
      </v-row>
      </v-col>
    </v-card-text>
  </v-card>
  </div>
</template>

<script>

export default({

  data(){
    return {
      projects : "",
    }
  },
  methods:{
    get_data(){

      axios.get('http://localhost:8001/api/AdminProjects').then( (response) =>{

        console.log(response['data']['data'])

         this.projects = response['data']['data']

         return this.projects

      })

    }
  },

   mounted(){
    this.get_data()
  },
 
})
</script>

