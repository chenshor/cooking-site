<template>
  <div id="app">
    <b-navbar position: sticky toggleable="lg" type="dark" class="nav">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/search">Search Recipes</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

      <b-navbar-brand 
      class="ml-auto mb-0"
       tag="h1" 
       to="/">
      <logo></logo>Forkoolar   
      </b-navbar-brand>

        <b-navbar-nav class="ml-auto mb-2">
          <b-navbar-nav v-if="!$root.store.username">
            <b-nav-text>
            Hello Guest:
            </b-nav-text> 
            <b-nav-item to="/register">Register</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else>
               <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <b-avatar variant="dark" size="sm"></b-avatar>
                <em> {{ $root.store.username }}</em>
                
              </template>
              <b-dropdown-item to="/myRecipes">My Recipes</b-dropdown-item>
              <b-dropdown-item to="/favorite">My Favorite</b-dropdown-item>
              <b-dropdown-item to="/FamilyList">Family Recipes</b-dropdown-item>
              <b-dropdown-item @click="Logout">Log Out</b-dropdown-item>
            </b-nav-item-dropdown>

          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="page">
    <router-view />
    </div>
  </div>
</template>

<script>
import logo from "./components/Logo";
export default {
  name: "App",
  components: {
    logo
  },
  methods: {
    async Logout() {
      this.$root.store.logout();
      const response = await this.axios.post(
        "https://ass3-2.herokuapp.com/logout"
      );
      this.$root.toast("Logout", "User logged out successfully", "success");

      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    }
  }
};
</script>

<style lang="scss">
html, body{
    width: 100%;
    height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  

}
 .page{
   background-image: url("https://res.cloudinary.com/di0zdzniy/image/upload/v1593699232/back2_jrhibg.png");
  background-repeat: inherit;
  background-size: cover;
  width: 100%;
  min-height: 100%;
background-color: black;
 }

#nav {
  padding: 30px;

}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav {
  background-color: #a52a2a;
   top: 0;
   height: 60px;
}
#home{
  text-align: center;
}



</style>
