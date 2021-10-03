<template>
  <v-card max-width="374" class="rounded-xl ma-3 ">
    <v-toolbar elevation="0"
      >Project Activity <v-spacer></v-spacer>
      <v-app-bar-nav-icon></v-app-bar-nav-icon
    ></v-toolbar>
    <v-progress-circular
      :rotate="360"
      :size="200"
      :width="45"
      value="100"
      color="teal"
    >
      <v-progress-circular
        :rotate="-90"
        :size="200"
        :width="35"
        :value="value"
        color="primary"
      >
        <v-progress-circular
          :rotate="90"
          :size="200"
          :width="25"
          :value="value1"
          color="red"
        >
          <v-progress-circular
            :rotate="180"
            :size="200"
            :width="15"
            :value="value2"
            color="pink"
          >
          </v-progress-circular>
        </v-progress-circular>
      </v-progress-circular>
    </v-progress-circular>
    <div class="text-center">
      <v-row>
        <v-col>
          
          <v-progress-circular
            :rotate="360"
            :size="20"
            :width="15"
            value="100"
            color="teal"
          >
          </v-progress-circular>
          <p>pro</p></v-col
        >
        <v-col>
          <v-progress-circular
            :rotate="-90"
            :size="20"
            :width="15"
            :value="value"
            color="primary"
          >
          </v-progress-circular>
          <p>pro</p></v-col
        >
      
        <v-col>
          <v-progress-circular
            :rotate="90"
            :size="20"
            :width="15"
            :value="value1"
            color="red"
          >
          </v-progress-circular>
          <p>pro</p></v-col
        >
        <v-col>
          <v-progress-circular
            :rotate="180"
            :size="20"
            :width="15"
            :value="value2"
            color="pink"
          >
          </v-progress-circular>
          <p>pro</p></v-col
        >
      </v-row>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      value1: 0,
      value2: 0,
      value3: 0,
    };
  },
  methods: {
    async get_pause() {
      try {
        const response = await axios.get("http://localhost:8000/api/Pause", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.value = (response["data"] / this.value3) * 100;
        console.log(this.value);
      } catch (e) {
        console.log(e);
      }
    },
    async get_all() {
      try {
        const response = await axios.get("http://localhost:8000/api/allCount", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.value3 = response["data"];
        console.log(this.value3);
      } catch (e) {
        console.log(e);
      }
    },
    async get_done() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/AdminArchives",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );

        this.value1 = (response["data"] / this.value3) * 100;
        console.log(this.value1);
      } catch (e) {
        console.log(e);
      }
    },
    async get_inProgress() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/progressArchives",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );

        this.value2 = (response["data"] / this.value3) * 100;
        console.log(this.value2);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.get_all();
    this.get_pause();
    this.get_done();
    this.get_inProgress();
  },
};
</script>

<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>
