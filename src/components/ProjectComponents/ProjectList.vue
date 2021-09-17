<template>
  <v-card>
    <v-card-text v-for="(project, index) in projects" :key="project.title">
      <v-list flat>
         <v-dialog
      v-model="dialog"
    >
     <template v-slot:activator="{ on, attrs }">
        <v-list-item v-bind="attrs"
          v-on="on">
          <v-list-item-content>
            <v-row>
              <v-list-item-action>
                <v-text>{{ index + 1 }}</v-text>
              </v-list-item-action>
              <v-col>
                <v-list-item-title v-text="project.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="project.description"
                ></v-list-item-subtitle>
              </v-col>

              <v-spacer></v-spacer>

              <span v-for="project in projects" :key="project.title">
                <v-avatar class="mb-0" size="35">
                  <v-sheet
                    class="mr-0 mb-0 "
                    height="60"
                    width="60"
                    :color="generator()"
                  ></v-sheet>
                </v-avatar>
              </span>

              <v-spacer></v-spacer>
            </v-row>
          </v-list-item-content>
        </v-list-item>
        </template>
         <v-card  class="mx-auto my-12" max-width="500" :key="project.id">
        <v-card-title>
            {{project.title}}
        </v-card-title>
        <v-divider></v-divider>

      <form class="pa-10">
        <v-text>Title</v-text>
        <v-text-field
        :value="project.title"
          outlined
          disabled
          color="#A544B9"
        ></v-text-field>
        <v-text>Description</v-text>
        <v-text-field
          :value="project.description"
          color="#A544B9"
          outlined
          disabled
        ></v-text-field>

      <v-row align="space-between">
          
          <v-spacer></v-spacer>
          <v-col>
              <v-btn
               color="error"
              @click="dialog = false"
              >Pause  </v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
              <v-btn
               color="success"
              >Done</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
             <v-btn
             text
               color="primary"
              @click="dialog = false"
              >Cancel</v-btn>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
             <v-btn
             text
               color="primary"
              @click="dialog = false"
              >view</v-btn>
          </v-col>
      </v-row>
    
   
      </form>

      
    </v-card>
    </v-dialog>
      </v-list>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  components: {},
  data: () => ({
    projects: "",
        user:'',
        user_id:'',
        dialog: false,
        menuAddNewproject: false,
  }),
  methods: {
    async get_data() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/AdminProjects",
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
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user_id= (this.user.id)
    setInterval(() => {
      this.get_data();
    }, 5000);
  },
};
</script>
