<template>
  <div class="mx-auto my-2"
  >
    <v-card class="mx-auto my-6 rounded-xl" color="white"
    max-width="550">
      <v-app-bar flat color="rgba(0, 0, 0, 0)">
        <v-spacer></v-spacer>
        <v-btn rounded color="#A544B9" dark outlined>
          Home
        </v-btn>
      </v-app-bar>
      <v-img
        class="pa-auto ma-auto"
        max-height="90"
        max-width="90"
        src="/Tasky.png"
      ></v-img>

      <v-card-text class="black--text mt-0 pt-3 pl-10">
        <v-text>Welcome Back</v-text>
        <h2>
          Login to your account
        </h2>
      </v-card-text>

      <form class="pa-10" @submit="Login()" method="post">
        <v-text name="password">Password</v-text>
        <v-text-field
          v-model="info.name"
          name="name"
          :error-messages="nameErrors"
          label="*********"
          required
          outlined
          clearable
          color="#A544B9"
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text>Email</v-text>
        <v-text-field
          v-model="info.email"
          name="email"
          :error-messages="emailErrors"
          label="xyz@gmail.com"
          required
          color="#A544B9"
          outlined
          clearable
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-row>
          <v-col>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Remember me"
              required
               color="#A544B9"
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-col>
          
        </v-row>
        <v-col>
          <v-row align="center" justify="space-around"
            ><v-btn rounded-lg color="#A544B9"
            width="300" type="submit">
              <v-text>Login</v-text>
            </v-btn></v-row
          >
          <v-spacer class="pa-5 "></v-spacer>
          <v-row align="center" justify="space-around">
            <v-btn rounded-lg color="#2D3748" width="300" >
              <v-icon 
              color="white"
              left>
                mdi-github
              </v-icon>
             <v-text>Or login with github</v-text>
            </v-btn>
          </v-row>
        </v-col>
      </form>

      <v-row
    align="center"
    justify="space-around"
  >
    <v-text class="pa-5 ma-5">Don't have an acount?<v-text class="purple--text mt-0 pt-3 pl-1">Join free today</v-text></v-text>
  </v-row>
      
    </v-card>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required},
    email: { required, email },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data(){
    return {
      info:{
        name:null,
        email:null
      }
    }
  },


  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.checkbox = false;
    },
    Login(e){

      console.log(this.info);
      e.preventDefault();

    }
  },
};
</script>
