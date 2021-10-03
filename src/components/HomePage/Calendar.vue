<template>
  <div class="mt-3 ml-2">
    <v-date-picker
      width="374"
      v-model="date"
      :event-color="generator()"
      :events="arrayEvents"
      color="#A544B9"
      scrollable
      class="rounded-xl"
    ></v-date-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arrayEvents:[],
      orders: "",
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      mycolor: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
    };
  },

  methods: {

    async get_orders() {
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
        this.orders = response["data"]["data"];
        for(let i=0; i<this.orders.length; i++){
          this.arrayEvents[2*i]=this.orders[i]["start_date"]
          this.arrayEvents[2*(i+1)]=this.orders[i]["end_date"]
        }
        console.log(this.arrayEvents)
      } catch (e) {
        console.log(e);
      }
    },
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
  },
  mounted(){
   this.get_orders()
  },
};
</script>
