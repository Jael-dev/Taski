<template>
  <v-card>
    <v-card-text v-for="order in orders" :key="order.title">
      <v-list flat>
        <v-list-item>
          <v-list-item-content>
            <v-row>
              <v-col>
                <v-list-item-title v-text="order.name"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="order.title"
                ></v-list-item-subtitle>
              </v-col>

              <v-spacer></v-spacer>

              <span v-for="order in orders" :key="order.title">
                <v-avatar class="mb-0" size="35">
                  <img :src="order.avatar" :alt="order.title" />
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
</template>

<script>
export default {
  components: {},
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
