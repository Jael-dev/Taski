<template>
<v-card class=" mx-auto  rounded-xl">
    <v-card-title>
      Orders
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  <v-data-table
    :search="search"
    :headers="headers"
    :items="orders"
    class="elevation-1"
  >
    <template v-slot:item.state="{ item }">
      <v-chip
        :color="getColor(item.state)"
        dark
      >
        {{getText(item.state)}}
      </v-chip>
    </template>
  </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
          search: '',
          orders:[],
        headers: [
          {
            text: 'Order Number',
            align: 'start',
            sortable: true,
            value: 'id',
          },
          { text: 'Description', value: 'description' },
          { text: 'Title', value: 'title' },
          { text: 'Status', value: 'state' },
          { text: 'User Id', value: 'user_id' },
          { text: 'Start Date', value: 'start_date' },
          { text: 'End Date', value: 'end_date' },
          { text: 'Creation Date', value: 'created_at' },
          { text: 'Submission Date', value: 'updated_at' },
        ],

      }
    },
    methods: {
          async get_data() {
      try {
        const response = await axios.get("http://localhost:8000/api/order/2021-09-23/2021-12-23", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.orders = response["data"]["data"]
      } catch (e) {
        console.log(e);
      }
    },
      getColor (state) {
        if (state ==1) return 'red'
        else if (state == 0) return 'orange'
        else return 'green'
      },
      getText (state) {
        if (state =0) return 'Pending'
        else if (state = 1) return 'Denied'
        else return 'Accepted'
      },
    },
    mounted(){
        this.get_data()
    }
  }
</script>