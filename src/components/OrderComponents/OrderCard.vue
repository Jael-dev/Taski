<template>
    <v-card  class="mx-auto my-12" max-width="500">
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
        <v-date-picker
          v-model="date"
          scrollable
          color="#A544B9"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="#A544B9"
            @click="modal = false"
          >
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
          <v-col> <v-dialog
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
        <v-date-picker
          v-model="date2"
          scrollable
          color="#A544B9"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="#A544B9"
            @click="modal2 = false"
          >
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
              <v-btn
              color="#A544B9"
              >Let's do it</v-btn>
          </v-col>
      </v-row>
    
   
      </form>

      
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      modal: false,
      modal2: false,
    }),

    
  }
</script>