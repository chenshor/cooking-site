<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">Home Page</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- 
    <div id="nav">
      <router-link to="/">Vue Recipes</router-link>|
      <router-link to="/search">Search Recipes</router-link>|
      <router-link to="/about">About</router-link>|
      <span v-if="!$root.store.username">
        Hello Guest:
        <router-link to="/register">Register</router-link>|
        <router-link to="/login">Login</router-link>|
      </span>
      <span v-else>
        {{ $root.store.username }}:
        <b-nav-item-dropdown text="Personal" >
          <b-dropdown-item to="/FamilyList">Family Recipes</b-dropdown-item>
          <b-dropdown-item to="/myRecipes">My Recipes</b-dropdown-item>
          <b-dropdown-item to="/favorite">My Favorite</b-dropdown-item>
        </b-nav-item-dropdown>
        <!-- <router-link to="/FamilyList">Family Recipes</router-link>|
        <router-link to="/myRecipes">My Recipes</router-link>|
    <router-link to="/favorite">My Favorite</router-link>-->
    <!-- <button @click="Logout">Logout</button>|
      </span>
    </div>-->
    -->
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
