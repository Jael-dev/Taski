<template>
  <div class="">
    <v-row>
      <v-col cols="6" md="4" align="center">
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card
          class="mr-0 ml-auto mt-0 mb-0 rounded-xl"
          color="white"
          max-width="1000"
        >
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

          <form class="pa-15">
            <v-row>
              <v-col>
                <v-text>Password</v-text>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="*********"
                  required
                  outlined
                  clearable
                  color="#A544B9"
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field
              ></v-col>
              <v-col>
                <v-text>Password</v-text>
                <v-text-field
                  v-model="name"
                  :error-messages="nameErrors"
                  label="*********"
                  required
                  outlined
                  clearable
                  color="#A544B9"
                  @input="$v.name.$touch()"
                  @blur="$v.name.$touch()"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text>Email</v-text>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="xyz@gmail.com"
                  required
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text>Email</v-text>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="xyz@gmail.com"
                  required
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-text>Email</v-text>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="xyz@gmail.com"
                  required
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field
              ></v-col>
              <v-col>
                <v-text>Email</v-text>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="xyz@gmail.com"
                  required
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field
              ></v-col>
            </v-row>

            <v-row>
              <v-col class="pa-5">
                <v-radio-group class="float-right" v-model="row" row>
                  <v-radio label="male" value="male" color="#A544B9"></v-radio>
                  <v-radio
                    label="female"
                    value="female"
                    color="#A544B9"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-col>
              <v-spacer class="pa-5"></v-spacer>
              <v-row align="center" justify="space-around" class="float-right"
                ><v-btn rounded-lg color="#A544B9" width="200" class="pa-7">
                  <v-text>Register</v-text>
                </v-btn>
              </v-row>
            </v-col>
            <v-spacer class="pa-2"></v-spacer>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required },
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
