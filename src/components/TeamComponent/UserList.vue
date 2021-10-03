<template>
  <v-card>
    <v-toolbar color="transparent" elevation="0">
      <v-spacer></v-spacer>
      <v-menu
        v-model="menuAddNewRole"
        :close-on-content-click="false"
        :nudge-width="400"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="mr-n4"
            small
            plain
            fab
            elevation="0"
          >
            <v-icon color="#A544B9">mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card max-width="374">
          <v-toolbar elevation="0">
            <v-toolbar-title>Create Role</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="mt-0">
            <v-text-field label="Role Name" color="#A544B9" v-model="role"></v-text-field>

            <v-container fluid>
              <v-select
                v-model="selectedUsers"
                :items="userName"
                label="Select users"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action>
                      <v-icon
                        :color="
                          selectedUsers.length > 0 ? 'indigo darken-4' : ''
                        "
                      >
                        {{ icon }}
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Select All
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:append-item>
                  <v-divider class="mb-2"></v-divider>
                  <v-list-item disabled>
                    <v-list-item-avatar color="grey lighten-3">
                      <v-icon>
                        mdi-food-apple
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content v-if="likesAllUsers">
                      <v-list-item-title>
                        You've just created an admin role
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-else-if="likesSomeUsers">
                      <v-list-item-title>
                        Privileges Count
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ selectedUsers.length }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-content v-else>
                      <v-list-item-title> </v-list-item-title>
                      <v-list-item-subtitle>
                        Go ahead, make a selection above!
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
            </v-container>
            <v-spacer></v-spacer>

            <v-container fluid>
              <v-select
                v-model="selectedPrivileges"
                :items="privileges"
                label="Select permissions"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggleP">
                    <v-list-item-action>
                      <v-icon
                        :color="
                          selectedPrivileges.length > 0 ? 'indigo darken-4' : ''
                        "
                      >
                        {{ iconP }}
                      </v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>
                        Select All
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider class="mt-2"></v-divider>
                </template>
                <template v-slot:append-item>
                  <v-divider class="mb-2"></v-divider>
                  <v-list-item disabled>
                    <v-list-item-avatar color="grey lighten-3">
                      <v-icon>
                        mdi-food-apple
                      </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content v-if="likesAllPrivileges">
                      <v-list-item-title>
                        You've just created an admin role
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-else-if="likesSomePrivileges">
                      <v-list-item-title>
                        Privileges Count
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ selectedPrivileges.length }}
                      </v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-content v-else>
                      <v-list-item-title> </v-list-item-title>
                      <v-list-item-subtitle>
                        Go ahead, make a selection above!
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-select>
            </v-container>

            <div class="text-center">
              <v-btn color="#A544B9" @click="info()">Done</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
    </v-toolbar>

    <v-container fluid class="">
      <v-row dense>
        <v-col v-for="user in users" :key="user.id" :cols="4">
          <User
          :user="user" 
          />
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import User from "@/components/TeamComponent/User.vue";

export default {
  components: {
    User,
  },
  data: () => ({
    role:'',
    users: "",
    userName:[],
    menuAddNewRole:"",
    selectedUsers: [],
    selectedPrivileges: [],
    privileges:[],
    role_id:""
  }),
  computed: {
    likesAllUsers() {
      return this.selectedUsers.length === this.userName.length;
    },
    likesSomeUsers() {
      return this.selectedUsers.length > 0 && !this.likesAllUsers;
    },
    icon() {
      if (this.likesAllUsers) return "mdi-close-box";
      if (this.likesSomeUsers) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
    likesAllPrivileges() {
      return this.selectedPrivileges.length === this.privileges.length;
    },
    likesSomePrivileges() {
      return this.selectedPrivileges.length > 0 && !this.likesAllPrivileges;
    },
    iconP() {
      if (this.likesAllPrivileges) return "mdi-close-box";
      if (this.likesSomePrivileges) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllUsers) {
          this.selectedUsers = [];
        } else {
          this.selectedUsers = this.userName.slice();
        }
      });
    },
    toggleP() {
      this.$nextTick(() => {
        if (this.likesAllPrivileges) {
          this.selectedPrivileges = [];
        } else {
          this.selectedPrivileges = this.privileges.slice();
        }
      });
    },
       async get_data() {
      try {
        const response = await axios.get("http://localhost:8000/api/users", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.users = response["data"]["data"];
        for(let i=0;i<this.users.length;i++){
        this.userName[i] = response["data"]["data"][i]["id"];
        }
      } catch (e) {
        console.log(e);
      }
    },
      async get_permissions() {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/permissions",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token,
            },
          }
        );
      let priv = response["data"]["data"]
        for(let i=0;i<priv.length;i++){
       this.privileges[i] = response["data"]["data"][i]["name"];
        }
      } catch (e) {
        console.log(e);
      }
    },
    async info(){
      console.log(this.role)

         try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        };
        let roleCreation = "http://localhost:8000/api/roles" ;
       let response = await axios.post(
          roleCreation,
          {
            name:this.role,
            guard_name: "api"
          },
          {
            headers
          }
        )
        this.role_id = response["data"]["data"]["id"]
        console.log(this.role_id)
        console.log(this.selectedPrivileges.length)
        console.log("assignwww")
        for(var i=0; i<this.selectedPrivileges.length;i++){
        console.log("http://localhost:8000/api/role/"+this.role_id+"/" +this.selectedPrivileges[i])
        let privelegeAssignation = "http://localhost:8000/api/role/"+this.role_id+"/" +this.selectedPrivileges[i];
         await axios.put(
          privelegeAssignation,
          {},
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + this.$store.state.token, //the token is a variable which holds the token
            },
          }
        )
        }
        console.log("assigning privileges")
        console.log(this.selectedUsers.length)
        console.log("assign")
        for(var i=0; i<this.selectedUsers.length;i++){
        let roleAssignation = "http://localhost:8000/api/roles/" +this.selectedUsers[i]+"/"+this.role_id;
        await axios.put(
          roleAssignation ,
          {},
          {headers}
        )
        }
        console.log("assigning Roles")
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted(){
    this.get_data()
    this.get_permissions()
  }
};
</script>
