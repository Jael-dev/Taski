<template>
  <div class="mx-auto my-2">
    <v-card class="mx-auto my-6 rounded-xl" color="white" max-width="550">
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
        <p>Welcome Back</p>
        <h2>
          Login to your account
        </h2>
      </v-card-text>

      <form class="pa-10">
        <p>Email</p>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          required
          type="email"
          color="#A544B9"
          outlined
          clearable
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <p>Password</p>
        <v-text-field
          v-model="password"
          type="password"
          :error-messages="passwordErrors"
          required
          outlined
          clearable
          color="#A544B9"
          @input="$v.password.$touch()"
          @blur="$v.password.$touch()"
        ></v-text-field>
        <v-row>
          <v-col>
            <v-checkbox
              v-model="checkbox"
              :error-messages="checkboxErrors"
              label="Remember me"
              color="#A544B9"
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
          </v-col>
        </v-row>
        <v-col>
          <v-row align="center" justify="space-around"
            ><v-btn
              rounded-lg
              color="#A544B9"
              width="300"
              :loading="loading"
              :disabled="loading"
              @click="Login(); loader = 'loading'"
            >
              Login
            </v-btn></v-row
          >
          <v-spacer class="pa-5 "></v-spacer>
          <v-row align="center" justify="space-around">
            <v-btn rounded-lg color="#2D3748" width="300">
              <v-icon color="white" left>
                mdi-github
              </v-icon>
              Or login with github
            </v-btn>
          </v-row>
        </v-col>
      </form>

      <v-row align="center" justify="space-around">
        <div>
          Don't have an acount?<v-btn text color="#A544B9"
            >Join free today</v-btn
          >
        </div>
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
    password: { required, maxLength: maxLength(8) },
    email: { required, email },
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
      checkbox: false,
      user: null,
      password: "",
      email: "",
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
  },

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
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
      this.password = "";
      this.email = "";
      this.checkbox = false;
    },
    async Login(e) {
      this.$v.$touch()
      try {
        let email = this.email;
        let password = this.password;
        this.$store
          .dispatch("login", { email, password })
          .then(() => this.$router.push("Dashboard"));
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>
<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
