<template>
  <div id="app">

    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand to="/">NavBar</b-navbar-brand>

      <!-- <router-link to="/">Vue Recipes</router-link>| -->
      <router-link to="/search">Search Recipes</router-link>|
      <router-link to="/about">About</router-link>|
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link to="/register">Register</router-link>|
        <router-link to="/login">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}:
        <b-nav-item-dropdown text="Personal">
          <b-dropdown-item to="/FamilyList">Family Recipes</b-dropdown-item>
          <b-dropdown-item to="/myRecipes">My Recipes</b-dropdown-item>
          <b-dropdown-item to="/favorite">My Favorite</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <router-link to="/FamilyList">Family Recipes</router-link>|
        <router-link to="/myRecipes">My Recipes</router-link>|
        <router-link to="/favorite">My Favorite</router-link>-->
        <button @click="Logout">Logout</button>|
      </span>
    </div>

</template>

<script>
export default {
  name: "App",
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  width: 100%;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
