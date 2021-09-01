<template>
    <v-card >
        <v-toolbar
        color="transparent"
        elevation="0"
        >
        <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      </v-toolbar>


    <v-container fluid class="">
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >

         <User/>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
</template>

<script>

import User from '@/components/TeamComponent/User.vue'

export default({

    components:{
        User
    },
    data: () => ({
      cards: [
        { title: 'Pre-f', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex:4 },
        { title: 'Favorite trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex:4 },
        { title: 'Best ', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex:4 },

        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex:4 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex:4 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex:4 },
      ],
    }),
    
})
</script>
