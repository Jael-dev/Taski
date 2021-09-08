<template>
  <v-card>
    <v-toolbar color="transparent" elevation="0">
      <v-spacer></v-spacer>
      <!-- menu to add a new order -->
      <v-menu
        v-model="menuAddNewRole"
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

        <v-card max-width="374">
          <v-toolbar elevation="0">
            <v-toolbar-title>Create Role</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="mt-0">
            <v-text-field label="Role Name" color="purple"></v-text-field>
            <v-text>User</v-text>

            <v-container fluid>
              <v-select
                v-model="selectedFruits"
                :items="fruits"
                label="Favorite Fruits"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action>
                      <v-icon
                        :color="
                          selectedFruits.length > 0 ? 'indigo darken-4' : ''
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

                    <v-list-item-content v-if="likesAllFruit">
                      <v-list-item-title>
                        You've just created an admin role
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-else-if="likesSomeFruit">
                      <v-list-item-title>
                        Privileges Count
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ selectedFruits.length }}
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
            <v-text>Permissions</v-text>

            <v-container fluid>
              <v-select
                v-model="selectedFruits"
                :items="fruits"
                label="Favorite Fruits"
                multiple
              >
                <template v-slot:prepend-item>
                  <v-list-item ripple @click="toggle">
                    <v-list-item-action>
                      <v-icon
                        :color="
                          selectedFruits.length > 0 ? 'indigo darken-4' : ''
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

                    <v-list-item-content v-if="likesAllFruit">
                      <v-list-item-title>
                        You've just created an admin role
                      </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-content v-else-if="likesSomeFruit">
                      <v-list-item-title>
                        Privileges Count
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ selectedFruits.length }}
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
              <v-btn color="#A544B9">Done</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-menu>
      <!-- end of menu to add a new order-->
    </v-toolbar>

    <v-container fluid class="">
      <v-row dense>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <User />
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
    cards: [
      {
        title: "Pre-f",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Favorite trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Best ",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },

      {
        title: "Pre-fab homes",
        src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
        flex: 4,
      },
      {
        title: "Favorite road trips",
        src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
        flex: 4,
      },
      {
        title: "Best airlines",
        src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
        flex: 4,
      },
    ],
    fruits: [
      "Apples",
      "Apricots",
      "Avocado",
      "Bananas",
      "Blueberries",
      "Blackberries",
      "Boysenberries",
      "Bread fruit",
      "Cantaloupes (cantalope)",
      "Cherries",
      "Cranberries",
      "Cucumbers",
      "Currants",
      "Dates",
      "Eggplant",
      "Figs",
      "Grapes",
      "Grapefruit",
      "Guava",
      "Honeydew melons",
      "Huckleberries",
      "Kiwis",
      "Kumquat",
      "Lemons",
      "Limes",
      "Mangos",
      "Mulberries",
      "Muskmelon",
      "Nectarines",
      "Olives",
      "Oranges",
      "Papaya",
      "Peaches",
      "Pears",
      "Persimmon",
      "Pineapple",
      "Plums",
      "Pomegranate",
      "Raspberries",
      "Rose Apple",
      "Starfruit",
      "Strawberries",
      "Tangerines",
      "Tomatoes",
      "Watermelons",
      "Zucchini",
    ],
    selectedFruits: [],
  }),
  computed: {
    likesAllFruit() {
      return this.selectedFruits.length === this.fruits.length;
    },
    likesSomeFruit() {
      return this.selectedFruits.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    },
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedFruits = [];
        } else {
          this.selectedFruits = this.fruits.slice();
        }
      });
    },
  },
};
</script>
