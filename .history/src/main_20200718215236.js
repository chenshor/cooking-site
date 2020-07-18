import Vue from "vue";
import App from "./App.vue";
import VueAxios from "vue-axios";
import axios from "axios";
import routes from "./routes";
import VueRouter from "vue-router";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  // if the user logged in and than the cookie expired thus the local storage contains username but there is no cookie
  console.log("cookie" + Vue.$cookies.get("session"));
  if (shared_data.username !== undefined && !Vue.$cookies.get("session")) {
    // logout force
    shared_data.logout();
    // redirect to home page
    if (to.name !== "main") next({ name: "main" });
    else next();
  } else {
    next();
  }
});

import Vuelidate from "vuelidate";
import "hover.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import {
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ImagePlugin,
  TabsPlugin,
  FormCheckboxPlugin,
  FormRadioPlugin,
  FormTagsPlugin,
  IconsPlugin,
  AvatarPlugin,
} from "bootstrap-vue";
[
  FormGroupPlugin,
  FormPlugin,
  FormInputPlugin,
  ButtonPlugin,
  CardPlugin,
  NavbarPlugin,
  FormSelectPlugin,
  AlertPlugin,
  ToastPlugin,
  LayoutPlugin,
  ImagePlugin,
  TabsPlugin,
  FormCheckboxPlugin,
  FormRadioPlugin,
  FormTagsPlugin,
  IconsPlugin,
  AvatarPlugin,
].forEach((x) => Vue.use(x));

Vue.use(Vuelidate);
Vue.use(VueAxios, axios);
axios.defaults.withCredentials = true;
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const shared_data = {
  username: localStorage.username,
  login(username) {
    localStorage.setItem("username", username);
    this.username = username;
    console.log("login", this.username);
  },
  logout() {
    console.log("logout");
    localStorage.removeItem("username");
    sessionStorage.removeItem("recipes");
    sessionStorage.removeItem("search");
    sessionStorage.removeItem("cuisine");
    sessionStorage.removeItem("diet");
    sessionStorage.removeItem("intolerance");

    this.username = undefined;
  },
};

console.log(shared_data);
// Vue.prototype.$root.store = shared_data;

new Vue({
  router,
  data() {
    return {
      store: shared_data,
    };
  },
  methods: {
    toast(title, content, variant = null, append = false) {
      this.$bvToast.toast(`${content}`, {
        title: `${title}`,
        toaster: "b-toaster-top-center",
        variant: variant,
        solid: true,
        appendToast: append,
        autoHideDelay: 3000,
      });
    },
  },
  render: (h) => h(App),
}).$mount("#app");
