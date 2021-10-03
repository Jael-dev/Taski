<template>

  <div class="mt-3 ml-2"
      v-if="isLoggedIn">
    <v-card
      class="rounded-xl mb-3"
      max-width="374"
      v-for="project in projects"
      :key="project.id"
    >
      <v-card-text>
        <v-col align-self="center">
          <v-row align-content="space-between">
            <v-sheet
              shaped
              class="mr-5 mb-5"
              height="40"
              width="40"
              :color=generator()
            ></v-sheet>
            <div class="mt-3">
              <p name="projectTitle">{{ project.title }}</p>
            </div>
            <v-spacer></v-spacer>
            <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
          </v-row>
          <v-spacer></v-spacer>
          <v-row align-content="space-between" class="mt-5">
            <v-btn disabled>Proj Priority </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="purple">high priority</v-btn>
          </v-row>
          <v-spacer></v-spacer>
          <v-row align-content="space-between" class="mt-5">
            <v-row>
              <div class="ma-3">
                <p>
                  Task Done : variable here
                </p>
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
            <v-btn outlined color="purple">Android</v-btn>
          </v-row>
          <v-row align-content="space-between" class="mt-5">
            <v-btn outlined color="orange">
              DUE DATE: {{ project.delivery_date }}</v-btn
            >
          </v-row>
        </v-col>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: "",
    };
  },
  methods: {
    async get_data() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/AdminProjects",
          {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.$store.state.token
          }   
          }
        );

        this.projects = response["data"]["data"];
      } catch (e) {
        console.log((e));
      }
    },
    
generator(){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return this.mycolor;
      
    },
  },
  computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },

  mounted() {
    setInterval(() => {
      this.get_data();
    }, 5000);
  },
};
</script>
