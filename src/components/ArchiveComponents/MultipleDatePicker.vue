<template>
  <div class="mt-3">
    <v-row>
      <v-col
        cols="12"
        lg="6"
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date1"
              label="Start Date"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
              color="#A544B9"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date1"
            no-title
            color="#A544B9"
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

      <v-col
        cols="12"
        lg="6"
      >
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date2"
              label=" End Date"
              persistent-hint
              prepend-icon="mdi-calendar"
              color="#A544B9"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date2"
            no-title
            color="#A544B9"
            @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    data: vm => ({
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
    }),


    methods: {
      
    },
  }
</script>