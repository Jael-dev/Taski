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
            <v-spacer></v-spacer>

            <v-icon>mdi-close</v-icon>
          </v-card-title>
          <v-divider></v-divider>

          <form class="pa-10">
            <v-text>Title</v-text>
            <v-text-field
              v-model="title"
              required
              outlined
              clearable
              color="#A544B9"
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text>Description</v-text>
            <v-text-field
              v-model="description"
              required
              color="#A544B9"
              outlined
              clearable
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>

            <v-row>
              <v-col>
                <v-dialog
                  ref="dialog"
                  v-model="modal"
                  :return-value.sync="date"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Start Date"
                      prepend-icon="mdi-calendar"
                      color="green"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" scrollable color="#A544B9">
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog.save(date)"
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
                      v-model="date2"
                      label="End Date"
                      prepend-icon="mdi-calendar"
                      color="red"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date2" scrollable color="#A544B9">
                    <v-spacer></v-spacer>
                    <v-btn text color="#A544B9" @click="modal2 = false">
                      Cancel
                    </v-btn>
                    <v-btn
                      text
                      color="#A544B9"
                      @click="$refs.dialog2.save(date2)"
                    >
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row align="space-between">
              <v-col>
                <v-text>Cancel</v-text>
              </v-col>
              <v-spacer></v-spacer>
              <v-col>
                <v-btn color="#A544B9">Let's do it</v-btn>
              </v-col>
            </v-row>
          </form>
        </v-card>
      </v-menu>
      <!-- end of menu to add a new order-->
    </v-toolbar>
    <v-card-text v-for="order in orders" :key="order.title" class="ma-0">
      <v-list flat>
        <v-list-item @click="orderDetails()">
          <v-list-item-avatar>
            <v-img :alt="`${order.title} avatar`" :src="order.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="order.name"></v-list-item-title>
            <v-list-item-subtitle v-text="order.title"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import AcceptBtn from "@/components/Buttons/Accept.vue";
import DenyBtn from "@/components/Buttons/Deny.vue";

export default {
  components: {
    AcceptBtn,
    DenyBtn,
  },
  data: () => ({
    orders: [
      {
        title: "website creation",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Jason Oner",
      },
      {
        title: "website creation",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Jason Oner",
      },
      {
        title: "website creation",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Jason Oner",
      },
    ],
    user: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        name: "Jason Oner",
      },
    ],
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    date2: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    modal: false,
    modal2: false,
  }),
  components: {},
  methods: {
    orderDetails() {},
  },
};
</script>
