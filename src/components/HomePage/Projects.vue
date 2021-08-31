<template>
  <div class="mt-3 ml-2">
    <v-card max-width="374" class="rounded-xl mt-3 project">
      <v-toolbar elevation="0">
        <v-spacer></v-spacer>
        <v-title> Projects ({{ projects.length }}) </v-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-for="project in projects" :key="project.id">
        <v-list flat>
          <v-list-item @click="get_time(project.id)">
            <template>
              <v-list-item-action>
                <v-icon
                  fab
                  :class="{
                    green: get_time(project.id) > 10,
                    orange: get_time(project.id) === 5,
                    red: get_time(project.id) < 5,
                  }"
                  >mdi-timer</v-icon
                >
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title
                  >{{ project.title }}</v-list-item-title
                >
              </v-list-item-content>
              <v-text>{{get_time(project.id)}} Days Remaining</v-text>
              <v-list-item-action>
                <v-btn icon>
                 <v-app-bar-nav-icon></v-app-bar-nav-icon>
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
var moment = require('moment');
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "lol1",
          description: "lol 2",
          state: 1,
          end_date: "2020-11-20",
        },
        {
          id: 2,
          title: "lol2",
          description: "lol 2",
          state: 1,
          end_date: "2021-11-1",
        },
        {
          id: 4,
          title: "lol3",
          description: "lol 2",
          state: 2,
          end_date: "2012-10-22",
        },
        {
          id: 3,
          title: "lol4",
          description: "lol 2",
          state: 3,
          end_date: "2021-1-21",
        },
        {
          id: 4,
          title: "lol5",
          description: "lol 2",
          state: 1,
          end_date: '2001-8-2',
        },
      ],
    };
  },
   computed: function (x) {
    this.get_time(x);
  },

  methods: {
    get_time(id) {
      let project = this.projects.filter((project) => project.id === id)[0];

      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();

        const dateDiff= (start_date, end_date) => {
        let start = moment(start_date);
        let end = moment(end_date);
        let duration = moment.duration(end.diff(start));
        let days = duration.asDays();
        return Math.round(days);
        }
        return dateDiff(date, project.end_date)
      
    },

    /*methods:{

    async get_data(){
      try{

      const response = await axios.get('http://localhost:8001/api/projects')

      this.projects = response['data']['data']

      }catch (e) {
        
      this.errors.push(e)
    }


    }
  },

   mounted(){
    this.get_data()
  },
  */
  },
};
</script>

<style scoped>
.project {
  height: 374px; /* or any height you want */
  overflow-y: auto;
}
</style>
