
  <template>
    <div class="mx-auto mt-2">
    <v-card class="rounded-xl" 
    max-width="344"
    outlined
    elevation
    color="White">

           <v-app-bar
            flat
            color="rgba(0, 0, 0, 0)"
          >
            <v-toolbar-title class="text-h5 black--text pl-0">
              Task Name
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn
              color="black"
              icon
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </v-app-bar>

          <v-card-text class="black--text mt-0 pt-0 pl-10">
            <h5 class="pt-2 ml-0">
              Task Description
            </h5>
            <div class="caption">
            <a href="#">#</a>
            opend by Jael Kalvin
          </div>
          </v-card-text>
        

            <v-divider></v-divider>
            <v-card-actions>
              <v-btn icon>
                <v-icon>mdi-paperclip</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-flag-variant-outline</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-information-variant</v-icon>
              </v-btn>

              <v-spacer></v-spacer>

               <v-avatar size="26">
              <img
                alt="user"
                src="https://png.pngtree.com/png-clipart/20190629/original/pngtree-pretty-african-girl-with-afro-hair-png-image_4123048.jpg"
              >
            </v-avatar>

              

            </v-card-actions>
    
    </v-card> 
  </div>
  </template>