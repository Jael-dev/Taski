<template>
  <v-card class="mx-auto rounded-xl" color="#F7F7F4" >
    <v-toolbar color="#A544B9" dark>
      <v-toolbar-title>Orders</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-toolbar>

    <v-list>
      <v-list-item v-for="order in orders" :key="order.title">
        <v-list-item-avatar>
          <v-img :alt="`${order.title} avatar`" :src="order.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="order.name"></v-list-item-title>
          <v-list-item-subtitle v-text="order.title"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-row>
            <v-col><AcceptBtn /></v-col>
            <v-col><DenyBtn /></v-col>
          </v-row>
        </v-list-item-action>
      </v-list-item>
      <v-divider dark></v-divider>
    </v-list>
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
  }),
};
</script>
