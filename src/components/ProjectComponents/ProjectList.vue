<template>
<div>
 <v-dialog v-model="dialog">
          <v-card class="mx-auto my-12" max-width="500">
            <v-card-title>
              {{ projectDetails.title }}
            </v-card-title>
            <v-divider></v-divider>

            <form class="pa-10">
              <p>Title</p>
              <v-text-field
                :value="detailsProjet.title"
                disabled
                color="#A544B9"
              ></v-text-field>
              <p>Description</p>
              <v-text-field
                :value="detailsProjet.description"
                color="#A544B9"
                disabled
              ></v-text-field>

              <v-row align="space-between">
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn color="error" @click="pauseProject(detailsProjet.id)"
                    >Pause
                  </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn color="success" @click="doneProject(detailsProjet.id)"
                    >Done</v-btn
                  >
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn text color="primary" @click="dialog = false"
                    >Cancel</v-btn
                  >
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn
                    text
                    color="primary"
                    :projectId="detailsProjet.id"
                    @click.stop="
                      $router.push({
                        name: 'Tasks',
                        params: { projectId: detailsProjet.id },
                      })
                    "
                    >view</v-btn
                  >
                </v-col>
              </v-row>
            </form>
          </v-card>
  </v-dialog>
  <v-card>

    <v-card-text
      v-for="(project, index) in projects"
      :key="project.id"
      id="project.id"
    >
      <v-list flat>
            <v-list-item @click="(projectDetails(project)),(dialog=!dialog)"  >
              <v-list-item-content>
                <v-row>
                  <v-list-item-action>
                    <p text--black>{{ index + 1 }}</p>
                  </v-list-item-action>
                  <v-col>
                    <v-list-item-title
                      v-text="project.title"
                    ></v-list-item-title>
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
      </v-list>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    projects: "",
    detailsProjet:{
      id:'',
      title:'',
      description:''
    },
    user: "",
    user_id: "",
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
        console.log(e);
      }
    },
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
    async doneProject(id) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        };
        console.log(headers);
        let baseURI = "http://localhost:8000/api/projects/" + id + "/done";
        await axios.put(
          baseURI,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token, //the token is a variable which holds the token
            },
          }
        );
      } catch (e) {
        console.log(e.response);
      }
    },
    async pauseProject(id) {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        };
        console.log(headers);
        let baseURI = "http://localhost:8000/api/projects/" + id + "/pause";
        await axios.put(
          baseURI,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token, //the token is a variable which holds the token
            },
          }
        );
      } catch (e) {
        console.log(e.response);
      }
    },
    projectDetails(item){
      console.log(item)
      this.detailsProjet.id=item.id
      this.detailsProjet.title=item.title
      this.detailsProjet.description=item.description
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user_id = this.user.id;
    setInterval(() => {
      this.get_data();
      console.log(this.projects);
    }, 5000);
  },
};
</script>
