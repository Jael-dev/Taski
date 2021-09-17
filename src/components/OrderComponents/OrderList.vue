<template>
  <v-card>
    <v-toolbar color="transparent" dark elevation="0">
      <v-spacer></v-spacer>
      <!-- menu to add a new order -->
      <v-menu
        v-model="menuAddNewOrder"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
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
            <v-icon color="purple">mdi-plus</v-icon>
          </v-btn>
        </template>

        <v-card class="mx-auto my-12" max-width="500">
          <v-card-title>
            Add an order
          </v-card-title>
          <v-divider></v-divider>

          <form class="pa-10">
            <p>Title</p>
            <v-text-field
              v-model="title"
              required
              outlined
              clearable
              color="#A544B9"
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            ></v-text-field>
            <p>Description</p>
            <v-text-field
              v-model="description"
              required
              color="#A544B9"
              outlined
              clearable
              @input="$v.description.$touch()"
              @blur="$v.description.$touch()"
            ></v-text-field>

            <v-row>
              <v-col>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date1"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                       v-model="start_date"
                      color="green"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="start_date"
                    scrollable
                    color="#A544B9"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog.save(start_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col>
                <v-dialog
                  ref="dialog2"
                  v-model="modal2"
                  :return-value.sync="date2"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      label="End Date"
                      prepend-icon="mdi-calendar"
                      color="red"
                       v-model="end_date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="end_date" scrollable color="#A544B9">
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog2.save(end_date)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row align="space-between">
              <v-col>
                <v-btn text color="#A544B9" @click="menuAddNewOrder = false">
                  Cancel
                </v-btn>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn color="#A544B9" @click="newOrder()">Let's do it</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card>
      </v-menu>
      <!-- end of menu to add a new order-->
    </v-toolbar>
    <v-card-text
      v-for="(order, index) in orders"
      :key="order.title"
      class="ma-0"
    >
      <v-list flat>
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ on, attrs }">
            <v-list-item v-bind="attrs" v-on="on">
              <v-list-item-action>
                <p>{{ index + 1 }}</p>
              </v-list-item-action>
              <v-list-item-avatar>
                <v-sheet
                  class="mr-0 mb-5 "
                  height="60"
                  width="60"
                  :color="generator()"
                ></v-sheet>
              </v-list-item-avatar>

              <v-list-item-content class="ml-3">
                <v-list-item-title v-text="order.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="order.description"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-card class="mx-auto my-12" max-width="500" :key="order.id">
            <v-card-title>
              {{ order.title }}
            </v-card-title>
            <v-divider></v-divider>

            <form class="pa-10">
              <p>Title</p>
              <v-text-field
                :value="order.title"
                outlined
                disabled
                color="#A544B9"
              ></v-text-field>
              <p>Description</p>
              <v-text-field
                :value="order.description"
                color="#A544B9"
                outlined
                disabled
              ></v-text-field>

              <v-row>
                <v-col>
                  <v-dialog ref="dialog" v-model="modal" width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="order.start_date"
                        label="Start Date"
                        prepend-icon="mdi-calendar"
                        color="green"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      :v-model="order.start_date"
                      scrollable
                      readonly
                      color="green"
                    >
                    </v-date-picker>
                  </v-dialog>
                </v-col>
                <v-col>
                  <v-dialog ref="dialog2" v-model="modal2" width="290px">
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="order.end_date"
                        label="End Date"
                        prepend-icon="mdi-calendar"
                        color="red"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="order.end_date"
                      :show-current="order.end_date"
                      scrollable
                      readonly
                      color="red"
                    >
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
              <v-row align="space-between">
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn color="error" @click="dialog = false">Deny </v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn color="success">Accept</v-btn>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn text color="primary" @click="dialog = false"
                    >Cancel</v-btn
                  >
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
  data() {
    return {
      user: "",
      user_id: "",
      dialog: false,
      orders: "",
      modal: false,
      modal2: false,
      menuAddNewOrder: false,
      title: "",
      description: "",
      state: 0,
      start_date: "",
      end_date: "",
      validation_date: "",
      date2:"",
      date1:""
    };
  },
  methods: {
    async get_data() {
      try {
        const response = await axios.get("http://localhost:8000/api/orders", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.$store.state.token,
          },
        });

        this.orders = response["data"]["data"];
      } catch (e) {
        console.log(e);
      }
    },
    generator() {
      this.mycolor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
      return this.mycolor;
    },
    async newOrder() {
      try {
        const headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.$store.state.token,
        };
        const order = {
          title: this.title,
          description: this.description,
          state: this.state,
          validation_date: this.end_date,
          start_date: this.start_date,
          end_date: this.end_date,
          user_id: this.user_id,
        };

       await axios.post("http://localhost:8000/api/orders", order, {
          headers,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.user_id = this.user.id;
    setInterval(() => {
      this.get_data();
    }, 5000);
  },
};
</script>
