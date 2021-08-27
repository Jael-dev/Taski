<template>
  <div class="pa-10 ma-15"
  >
    <v-card class="mx-auto my-12 rounded-xl" color="white"
    max-width="600">
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

      <v-card-text class="black--text mt-0 pt-0 pl-3">
        <h5 class="pt-2 ml-0">
          Welcome Back
        </h5>
        <h2>
          Login to your account
        </h2>
      </v-card-text>

      <form class="pa-3">
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          label="Password"
          required
          outlined
          clearable
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
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
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-col>
          <v-spacer></v-spacer>
          <v-col>
            <h5>Forgot Password?</h5>
          </v-col>
        </v-row>
        <v-col>
          <v-row align="center" justify="space-around"
            ><v-btn rounded-lg color="#A544B9"
            width="300">
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
    <v-text class="pa-5 ma-5">Login</v-text>
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
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.checkbox = false;
    },
  },
};
</script>
