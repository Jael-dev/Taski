<template>
  <v-card class="rounded-xl" max-width="374">
    <v-toolbar>
      <v-toolbar-title>Create Role</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <v-text>Role name</v-text>
      <v-text-field label="Role Name" color="purple"></v-text-field>
      <v-text>User</v-text>
      <v-card>
        <v-toolbar>
          <v-toolbar-title>Select User</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon color="#A544B9">
               <v-icon>mdi-account-plus</v-icon></v-btn>
        </v-toolbar>
      </v-card>
      <v-spacer></v-spacer>
      <v-text>Permissions</v-text>
      <v-list>
        <v-card>
          <v-toolbar>
            <v-card-title>Permission Name</v-card-title>
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-btn>
                <v-switch
                  v-model="people"
                  color="purple"
                  value="True"
                  inset
                  flat
                ></v-switch>
              </v-btn> </v-list-item-action
          ></v-toolbar>
        </v-card>
      </v-list>
      <div class="text-center">
          <v-btn
      color="#A544B9"
      >Done</v-btn>
      </div>
      
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>
