<template>
  <v-card class="rounded-xl" max-width="374" elevation="34">
    <v-card-text class="user">
      <v-sheet
      class="user"
        rounded="circle"
        color="#A544B9"
        elevation="2"
        width="140"
        height="140"
      >
    
          <v-avatar
          class=" ma-1"
          color="white"
          size="130"
          >
            <v-img max-height="236" max-width="236" src="/jael.png"> </v-img>
          </v-avatar>
        </v-sheet>
     
      <v-card-title
      class="user"
      >Jael Ngouzong</v-card-title>
      <v-card-subtitle
        >Full Stack Developer and Project Manager</v-card-subtitle
      >
      <v-rating
        v-model="rating"
        icon-label="custom icon label text {0} of {1}"
        color="#A544B9"
      ></v-rating>
      <v-spacer></v-spacer>
      <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-x
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Edit Privileges
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="/jael.png"
                alt="John"
              >
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Jael Ngouzong</v-list-item-title>
              <v-list-item-subtitle>Full Stack Developer and Project Manager</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                :class="fav ? 'red--text' : ''"
                icon
                @click="fav = !fav"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
<!--  Here I take the list of privileges from the db -->
        <v-list v-for="privilege in privileges" :key="privilege.title">
          <v-list-item>
            <v-list-item-action>
              <v-switch
                color="purple"
              ></v-switch>
            </v-list-item-action>
            <v-list-item-title>{{privilege.title}}</v-list-item-title>
          </v-list-item>

        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            color="purple"
            text
            @click="menu = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
    </v-card-text>
    <v-sheet class="user" color="#A544B9" elevation="2" height="5" width="300" shaped outlined></v-sheet>
    <v-spacer></v-spacer>
  </v-card>
</template>

<script>
export default {
data: () => ({
      rating: 4,
        fav: true,
      menu: false,
      message: false,
      hints: true,
      privileges:[
        { 
          title: "edit name,1"
        },
        { 
          title: "edit name,2"
        },
        { 
          title: "edit name,3"
        },
        { 
          title: "edit name,4"
        },
        { 
          title: "edit name,5"
        },
      ]
    }),
};
</script>
<style>
.user {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
