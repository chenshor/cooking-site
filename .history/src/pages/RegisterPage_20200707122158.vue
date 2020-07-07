<template>
  <div>
    <b-card-group columns>
      <h1 class="title">Register</h1>
      <b-card class="registerContainer">
        <b-form @submit.prevent="onRegister" @reset.prevent="onReset">
          <b-form-group
            id="input-group-username"
            label-cols-sm="3"
            label="Username:"
            label-for="username"
          >
            <b-form-input
              id="username"
              v-model="$v.form.username.$model"
              type="text"
              :state="validateState('username')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.username.required">Username is required</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.form.username.length">
              Username length should be between 3-8 characters
              long
            </b-form-invalid-feedback>
            <b-form-invalid-feedback
              v-if="!$v.form.username.alpha"
            >Username must contains only letters</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-firstName"
            label-cols-sm="3"
            label="First Name:"
            label-for="firstName"
          >
            <b-form-input
              id="firstName"
              v-model="$v.form.firstName.$model"
              type="text"
              :state="validateState('firstName')"
            ></b-form-input>
            <b-form-invalid-feedback
              v-if="!$v.form.firstName.alpha"
            >firstName must contains only letters</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-lastName"
            label-cols-sm="3"
            label="Last Name:"
            label-for="lastName"
          >
            <b-form-input
              id="lastName"
              v-model="$v.form.lastName.$model"
              type="text"
              :state="validateState('lastName')"
            ></b-form-input>
            <b-form-invalid-feedback
              v-if="!$v.form.lastName.alpha"
            >lastName must contains only letters</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-email" label-cols-sm="3" label="Email:" label-for="email">
            <b-form-input
              id="email"
              v-model="$v.form.email.$model"
              type="email"
              :state="validateState('email')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.email.email">email is not valid</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-country"
            label-cols-sm="3"
            label="Country:"
            label-for="country"
          >
            <b-form-select
              id="country"
              v-model="$v.form.country.$model"
              :options="countries"
              :state="validateState('country')"
            ></b-form-select>
            <b-form-invalid-feedback>Country is required</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-Password"
            label-cols-sm="3"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              type="password"
              v-model="$v.form.password.$model"
              :state="validateState('password')"
            ></b-form-input>
            <b-form-invalid-feedback v-if="!$v.form.password.required">Password is required</b-form-invalid-feedback>
            <b-form-text v-else-if="$v.form.password.$error" text-variant="info">
              Your password should be
              <strong>strong</strong>.
              <br />For that, your password should be also:
            </b-form-text>
            <b-form-invalid-feedback
              v-if="$v.form.password.required && !$v.form.password.length"
            >Have length between 5-10 characters long</b-form-invalid-feedback>
            <b-form-invalid-feedback
              v-if="$v.form.password.required && !$v.form.password.goodPassword"
            >containe at least one letter, one number and special character</b-form-invalid-feedback>
          </b-form-group>

          <b-form-group
            id="input-group-confirmedPassword"
            label-cols-sm="3"
            label="Confirm Password:"
            label-for="confirmedPassword"
          >
            <b-form-input
              id="confirmedPassword"
              type="password"
              v-model="$v.form.confirmedPassword.$model"
              :state="validateState('confirmedPassword')"
            ></b-form-input>
            <b-form-invalid-feedback
              v-if="!$v.form.confirmedPassword.required"
            >Password confirmation is required</b-form-invalid-feedback>
            <b-form-invalid-feedback v-else-if="!$v.form.confirmedPassword.sameAsPassword">
              The confirmed password is not equal to the original
              password
            </b-form-invalid-feedback>
          </b-form-group>

          <b-form-group id="input-group-image" label-cols-sm="3" label="image:" label-for="image">
            <input type="file" class="form-control-file" id="exampleFormControlFile1" />
          </b-form-group>

          <b-button type="reset" variant="danger">Reset</b-button>
          <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Register</b-button>
          <div class="mt-2">
            You have an account already?
            <router-link to="login">Log in here</router-link>
          </div>
        </b-form>
      </b-card>
      <b-card-img
        id="imgCard1"
        src="https://res.cloudinary.com/di0zdzniy/image/upload/v1594112794/cooking-apps_tztcvo.jpg"
        alt="Image"
      ></b-card-img>
    </b-card-group>
    <b-alert
      class="mt-2"
      v-if="form.submitError"
      variant="warning"
      dismissible
      show
    >Register failed: {{ form.submitError }}</b-alert>
    <!-- <b-card class="mt-3 md-3" header="Form Data Result">
      <pre class="m-0"><strong>form:</strong> {{ form }}</pre>
      <pre class="m-0"><strong>$v.form:</strong> {{ $v.form }}</pre>
    </b-card>-->
  </div>
</template>

<script>
import countries from "../assets/countries";
import {
  required,
  minLength,
  maxLength,
  alpha,
  sameAs,
  email
} from "vuelidate/lib/validators";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        submitError: undefined,
        image: ""
      },
      countries: [{ value: null, text: "", disabled: true }],
      errors: [],
      validated: false
    };
  },
  validations: {
    form: {
      username: {
        required,
        length: u => minLength(3)(u) && maxLength(8)(u),
        alpha
      },
      firstName: {
        required,
        alpha
      },
      lastName: {
        required,
        alpha
      },
      country: {
        required
      },
      password: {
        required,
        length: p => minLength(5)(p) && maxLength(10)(p),
        goodPassword: password =>
          (/[a-z]/.test(password) || /[A-Z]/.test(password)) &&
          /[0-9]/.test(password) &&
          /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)
      },
      confirmedPassword: {
        required,
        sameAsPassword: sameAs("password")
      },
      email: {
        email
      }
    }
  },
  mounted() {
    // console.log("mounted");
    this.countries.push(...countries);
    // console.log($v);
  },
  methods: {
    validateState(param) {
      const { $dirty, $error } = this.$v.form[param];
      return $dirty ? !$error : null;
    },
    async Register() {
      try {
        const response = await this.axios.post(
          "https://ass3-2.herokuapp.com/register",
          {
            username: this.form.username,
            password: this.form.password,
            firstName: this.form.firstName,
            lastName: this.lastName,
            email: this.email,
            image: this.Image,
            country: this.country
          }
        );
        this.$router.push("/login");
        // console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    onRegister() {
      // console.log("register method called");
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      // console.log("register method go");
      this.Register();
    },
    onReset() {
      this.form = {
        username: "",
        firstName: "",
        lastName: "",
        country: null,
        password: "",
        confirmedPassword: "",
        email: "",
        image: ""
      };
      this.$nextTick(() => {
        this.$v.$reset();
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.registerContainer {
  width: 40%;
  margin-left: -80%;
  margin-top: 15%;
}

.title {
  color: rgb(219, 212, 212);
  margin-top: 0%;
  margin-left: 30%;
}

#imgCard1 {
  width: 100%;
  height: 100%;
  margin-top: -120%;
}
</style>
