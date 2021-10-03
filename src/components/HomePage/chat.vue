<template>
<div class="mt-3 ml-2">
  <v-card max-width="374" height="74" class="rounded-xl mt-3 task">
      <v-card-text>
         <div  color="transparent" height="72" inset>
      <v-row>
        <v-col cols="12" sm="10">
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
          ></v-text-field
        ></v-col>
        <v-col cols="12" sm="2">
          <v-btn icon>
            <v-icon color="#a544b9" @click="sendMessage()">mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
      </v-card-text>
  </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
        message:""
    };
  },
 

  methods:{

    async sendMessage() {
      const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
      }
      const sms = {
          action:this.message,
      }
      await axios.post("http://localhost:8000/api/actions/",sms, {
        headers,
      });
      this.message = "";
    },
  },

  
};
</script>

<style scoped>
.task{
  /* width: 374px; */
  height:374px;/* or any height you want */
  overflow-y:auto

}
</style>
