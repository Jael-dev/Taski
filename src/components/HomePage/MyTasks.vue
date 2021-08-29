<template>
    <v-card max-width="374" class="rounded-xl mt-3">
        <v-toolbar elevation="0">
            <v-spacer></v-spacer>
            <v-title >
                My Tasks {variable here}
            </v-title>
             <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>

              <v-list
      flat
    >

    
        <v-list-item>
          <template v-slot:default="{ active, }">
            <v-list-item-action>
              <v-checkbox
                :input-value="active"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title> 
            </v-list-item-content>
          </template>
        </v-list-item>

   

    </v-list>
        </v-card-text>
    </v-card>
</template>