<template>
  <div class="">
    <v-row>
      <v-col cols="6" md="4" align="center"> </v-col>
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
                <p>First Name</p>
                <v-text-field
                  v-model="firstname"
                  :error-messages="nameErrors"
                  label="First Name"
                  required
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.firstname.$touch()"
                  @blur="$v.firstname.$touch()"
                ></v-text-field>
              </v-col>
              <v-col>
                <p>Last Name</p>
                <v-text-field
                  v-model="lastname"
                  label="Last Name"
                  color="#A544B9"
                  outlined
                  clearable
                  @input="$v.lastname.$touch()"
                  @blur="$v.lastname.$touch()"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <p>Email</p>
                <v-text-field
                  v-model="email"
                  :error-messages="emailErrors"
                  label="xyz@gmail.com"
                  required
                  color="#A544B9"
                  outlined
                  type="email"
                  clearable
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field
              ></v-col>
              <v-col>
                <p>Phone Number</p>
                <v-text-field
                  v-model="number"
                  required
                  :error-messages="numberErrors"
                  color="#A544B9"
                  outlined
                  type="number"
                  clearable
                  @input="$v.number.$touch()"
                  @blur="$v.number.$touch()"
                ></v-text-field
              ></v-col>
            </v-row>
            <v-row>
              <v-col>
                <p>Password</p>
                <v-text-field
                  v-model="password"
                  :error-messages="passwordErrors"
                  required
                  outlined
                  type="password"
                  clearable
                  color="#A544B9"
                  @input="$v.password.$touch()"
                  @blur="$v.password.$touch()"
                ></v-text-field
              ></v-col>
              <v-col>
                <p>Confirmed Password *</p>
                <v-text-field
                  v-model="cpassword"
                  required
                  outlined
                  type="password"
                  clearable
                  color="#A544B9"
                  @input="$v.cpassword.$touch()"
                  @blur="$v.cpassword.$touch()"
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
                ><v-btn
                  rounded-lg
                  color="#A544B9"
                  width="200"
                  class="pa-7"
                  @click="
                    SignIn();
                    loader = 'loading';
                  "
                  :loading="loading"
                  :disabled="loading"
                >
                  Register
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
    firstname: { required, maxLength: maxLength(50) },
    email: { required, email },
    lastname: { required },
    password: { required, maxLength: maxLength(8) },
    cpassword: { required, maxLength: maxLength(8) },
    number: { required, maxLength: maxLength(9) },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data() {
    return {
      loader: null,
      loading: false,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpassword: "",
      number: "",
      row: "",
    };
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
      if (!this.$v.firstname.$dirty) return errors;
      !this.$v.firstname.maxLength &&
        errors.push("Name must be at most 8  characters long");
      !this.$v.firstname.required && errors.push("Name is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.maxLength &&
        errors.push("Password must be at most 8 characters long");
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    numberErrors() {
      const errors = [];
      if (!this.$v.number.$dirty) return errors;
      !this.$v.number.maxLength &&
        errors.push("number must be at most 9 characters long");
      !this.$v.number.required && errors.push("number is required.");
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
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },

  methods: {
    async SignIn() {
      try {
        let email = this.email;
        let password = this.password;
        let c_password = this.cpassword;
        let name = this.firstname + this.lastname;
        let number = this.number;
        this.$store
          .dispatch("register", { email, password, c_password, name, number })
          .then(() => this.$router.push("Dashboard"));
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>
