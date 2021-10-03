<template>
  <div class="mt-3 ml-2">
    <v-card max-width="374" class="rounded-xl mt-3 project">
      <v-toolbar elevation="0">
        <v-spacer></v-spacer>
        <p>Projects ({{ projects.length }})</p>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-for="project in projects" :key="project.id">
        <v-list flat>
          <v-list-item @click="get_time(project.id)">
            <template>
              <v-list-item class="ma-0">
                <v-alert
                  class="ma-0"
                  color="white"
                  :class="{
                    green: get_time(project.id) > 10,
                    orange: get_time(project.id) === 5,
                    red: get_time(project.id) < 5,
                    grey: get_time(project.id) < 0,
                  }"
                  dark
                  icon="mdi-timer"
                  border="left"
                  prominent
                >
                  <v-row class="ml-1 mt-2">
                    <v-list-item-title>{{ project.title }}</v-list-item-title>

                    <p>{{ get_time(project.id) }} Days Remaining</p></v-row
                  >
                </v-alert>
              </v-list-item>
            </template>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
var moment = require("moment");
export default {
  data() {
    return {
      projects: "",
    };
  },
  computed: function(x) {
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

      const dateDiff = (start_date, end_date) => {
        let start = moment(start_date);
        let end = moment(end_date);
        let duration = moment.duration(end.diff(start));
        let days = duration.asDays();
        return Math.round(days);
      };
      return dateDiff(date, project.end_date);
    },

    async get_data() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/orderproj",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );

        this.projects = response["data"]["data"];
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
  mounted() {
    setInterval(() => {
      this.get_data();
    }, 5000);
  },
};
</script>

<style scoped>
.project {
  height: 374px; /* or any height you want */
  overflow-y: auto;
}
</style>
