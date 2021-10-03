<!--<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4 mr-2 " :color="generator()" size="64"></v-avatar>
        {{ username }}
      </v-sheet>

      <v-divider></v-divider>

      <v-list v-model="selected" @change="$emit('userSelected', selected)">
        <template v-for="user in users">
          <v-list-item :key="user.id" @click="currentUserRoom(user.id)" :value="user" >
            <v-list-item-avatar>
              <v-sheet
                class="rounded-circle"
                height="40"
                width="40"
                :color="generator()"
              ></v-sheet>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title v-html="user.name"></v-list-item-title>
              <v-list-item-subtitle
                >Here I should put the last message</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-main class="ma-0 pa-0" 
    :recievers="users"
    :currentReciever="currentUser"
    v-on:userSelected="currentUserRoom($event)"
    
    >
      <div v-for="message in messages" :key="message.id">
      <v-row class="mt-2" v-if="message.from_id===user_id">
        <v-spacer></v-spacer>
        <v-col>
          <v-card
            class="rounded-xl ml-2 pa-2 white--text"
            color="#4A148C"
            max-width="400"
          >{{message.body}}
          </v-card>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col ml-2>
          <v-card class="rounded-xl ma-2  pa-2 white--text" color="#6A1B9A" max-width="400">{{message.body}}
          </v-card>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
      </div>
    </v-main>
    <v-footer app color="transparent" height="72" inset>
      <v-row>
        <v-col cols="12" sm="11">
          <v-text-field
            v-model="message"
            background-color="grey lighten-1"
            dense
            flat
            hide-details
            rounded
            solo
            prepend-icon="mdi-paperclip"
            @keyup.enter="sendMessage()"
            :reciever="currentUser"
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="1">
          <v-btn icon>
            <v-icon color="#a544b9" @click="sendMessage()">mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import Pusher from "pusher-js";
export default {
  props:['reciever','recievers','currentReciever'],
  data: () => ({
    messages:"",
    selected:"",
    currentUser:"",
    username: "",
    message: "",
    user_id: "",
    files: [],
    drawer: null,
    users: "",
    user:""
  }),
watch:{
  currentUserRoom() {
      this.connect();
    },
},
  methods: {
    async sendMessage() {
      const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
      }
      const sms = {
           type:"Message",
          from_id:this.user_id,
          body:this.message,
          attachment:"string",
          seen:1
      }
      await axios.post("http://localhost:8000/api/message/"+this.currentUser,sms, {
        headers,
      });
      this.message = "";
      this.get_messages()
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
        this.currentUserRoom(response["data"]["data"][0])
      } catch (e) {
        console.log(this.errors);
      }
    },
    async get_messages($currentUser) {
      try {
        console.log(this.currentUser)
        const response = await axios.get("http://localhost:8000/api/message/"+this.currentUser, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.messages = response["data"]["data"];
        console.log(this.messages)
      } catch (e) {
        console.log(e);
      }
    },
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
    currentUserRoom(reciever) {
      this.currentUser = reciever;
      this.get_messages(reciever);
      this.connect()
    },
    connect(){
      if(this.currentUser){
         Pusher.logToConsole = true;

    const pusher = new Pusher("39ebcbda7c8ebae490a9", {
      cluster: "eu",
    });
    const channel = pusher.subscribe("Tasky."+this.currentUser);
    channel.bind("message", (data) => {
      message.push(data);
    });
        let vm =this
      window.Echo.private("Tasky."+this.currentUser)
      .listen('.message.new', e=>{
        vm.get_messages()
      })
      }
    }
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.username = this.user.name;
    this.user_id = this.user.id;
    this.selected = this.currentUser;
    this.get_data();
   
  },
};
</script>
