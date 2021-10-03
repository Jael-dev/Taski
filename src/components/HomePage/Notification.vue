<template>
  <div class="mt-3 ml-2">
    <v-card max-width="374" class="rounded-xl mt-3 task">
      <v-toolbar elevation="0">
        <v-spacer></v-spacer>
        <p>Notifications</p>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text v-for="action in actions" :key="action.id">
        <v-list flat>
          <v-list-item>
            <template v-text="scrollInvoked">
              <v-list-item-action>
                <v-sheet
                  class="mr-0 mb-0 rounded-circle"
                  height="45"
                  width="45"
                  :color="generator()"
                >
                 <v-sheet
                  class="mr-0 mb-0 rounded-circle"
                  height="42"
                  width="42"
                  color="white"
                ></v-sheet>
                
                </v-sheet>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{action.user_id}}  </v-list-item-title>
                <v-list-item-subtitle>{{action.action_model}} {{ action.action }} </v-list-item-subtitle>
                <v-row>
                  <v-col><v-spacer></v-spacer></v-col>
                  <v-col>{{action.created_at}}</v-col>
                </v-row>
              </v-list-item-content>
              <v-list-item-action> </v-list-item-action>
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
      actions: {},
    };
  },

  methods: {
    async get_data() {
      try {
        const response = await axios.get("http://localhost:8000/api/actions", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.actions = response["data"]["data"];
      } catch (e) {
        console.log(e);
      }
    },
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
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
.task {
  /* width: 374px; */
  height: 374px; /* or any height you want */
  overflow-y: auto;
}

</style>
