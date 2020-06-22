<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Home Page</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/search">Search Recipes</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav v-if="!$root.store.username">
            Hello Guest:
            <b-nav-item to="/register">Register</b-nav-item>
            <b-nav-item to="/login">Login</b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav v-else>
            <b-nav-item v-text="$root.store.username"></b-nav-item>
            <b-button @click="Logout">Logout</b-button>
            <b-nav-item-dropdown text="Personal">
              <b-dropdown-item to="/FamilyList">Family Recipes</b-dropdown-item>
              <b-dropdown-item to="/myRecipes">My Recipes</b-dropdown-item>
              <b-dropdown-item to="/favorite">My Favorite</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item to="/" @click="Logout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
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
