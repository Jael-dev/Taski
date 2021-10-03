<template>
  <v-card max-width="374" class="rounded-xl ma-3 ">
    <v-toolbar elevation="0"
      >Weekly Progress <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon
    ></v-toolbar>
    <p class="ml-4">Starts from to</p>
    <v-card-text>
      <v-progress-circular
        :rotate="360"
        :size="250"
        :width="25"
        :value="value"
        color="#A544B9"
      >
        {{ value }}% Tasks Completed
      </v-progress-circular>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      tasks: 0,
      todos: 0,
      value: 0,
    };
  },
  methods: {
    async get_tasks() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/tasks/2021-09-23/2021-12-23",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );

        this.tasks = response["data"];
      } catch (e) {
        console.log(e);
      }
    },
    async get_todos() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/todos/2021-09-23/2021-12-23",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );

        this.todos = response["data"];

        console.log(this.tasks)
        console.log(this.todos)
        this.value=(this.todos/this.tasks)*100
        console.log(this.value)
      } catch (e) {
        console.log(e);
      }
    },
  },

  mounted() {
    this.get_tasks();
    this.get_todos();
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
