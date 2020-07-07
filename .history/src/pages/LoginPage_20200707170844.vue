<template>
  <div>
    <b-card-group columns>
      <h1 class="LItitle">Login</h1>
      <b-card class="loginContainer">
        <b-form @submit.prevent="onLogin">
          <b-form-group
            id="input-group-Username"
            label-cols-sm="3"
            label="Username:"
            label-for="Username"
          >
            <b-form-input
              id="Username"
              v-model="$v.form.username.$model"
              type="text"
              :state="validateState('username')"
              placeholder="username"
            ></b-form-input>

            <b-form-invalid-feedback>Username is required</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-Password"
            label-cols-sm="3"
            label="Password:"
            label-for="Password"
          >
            <b-form-input
              class="Linput"
              id="Password"
              type="password"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
              placeholder="password"
            ></b-form-input>
            <b-form-invalid-feedback>Password is required</b-form-invalid-feedback>
          </b-form-group>
          <b-button
            squared
            variant="danger"
            type="submit"
            style="width:100px;display:block;"
            class="mx-auto w-50 BTNlogin"
          >Login</b-button>
          <div class="mt-2">
            Do not have an account yet?
            <router-link to="register">Register in here</router-link>
          </div>
        </b-form>
        <b-alert
          class="mt-2"
          v-if="form.submitError"
          variant="warning"
          dismissible
          show
        >Login failed: {{ form.submitError }}</b-alert>
      </b-card>
      <h3 class="title2">Continue to discover the magical</h3>
      <h3 class="title3">world of cooking</h3>
      <b-card-img
        id="imageC"
        src="https://res.cloudinary.com/di0zdzniy/image/upload/v1594129471/Cooking-Baking-Substitutes_fqcp04.jpg"
        alt="Image"
      ></b-card-img>
    </b-card-group>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        submitError: undefined
      }
    };
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Login() {
      try {
        const response = await this.axios.post(
          "https://ass3-2.herokuapp.com/login",
          {
            username: this.form.username,
            password: this.form.password
          }
        );

        this.$root.store.login(this.form.username);
        this.$router.push("/");
      } catch (err) {
        this.form.submitError = err.response.data.message;
      }
    },
    onLogin() {
      this.form.submitError = undefined;
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      this.Login();
    }
  }
};
</script>
<style>
.loginContainer {
  width: 40%;
  left: -80%;
  margin-top: 30%;
  background-color: TRANSPARENT;
  color: rgb(204, 135, 135);
}
#imageC {
  width: 40%;
  height: 50%;
  position: absolute;
  top: 33%;
  /* margin-top: 25%; */
  left: 47%;
}

.LItitle {
  position: relative;
  color: rgb(219, 212, 212);
  top: 20%;
  left: 60%;
}

.title2 {
  position: absolute;
  color: rgb(219, 212, 212);
  top: 20%;
  left: 52%;
}
.title3 {
  position: absolute;
  color: rgb(219, 212, 212);
  top: 25%;
  left: 59%;
}
</style>
