<template>
  <div class="container">
    <h1 class="title">Main Page</h1>
    <div class="grid">
      <div class="random">
        <RecipePreviewList title="Randome Recipes" class="RandomRecipes center" />
      </div>
      <div class="lastview">
        <LastSeen
          title="Last Viewed Recipes"
          :class="{
            RandomRecipes: true,
            blur: !$root.store.username,
            center: true,
          }"
          disabled
        ></LastSeen>
      </div>
      <div class="buttonLogin">
        <router-link
          v-if="!$root.store.username"
          to="/login"
          tag="button"
        >You need to Login to vue this</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import LastSeen from "../components/LastSeen";
export default {
  components: {
    RecipePreviewList,
    LastSeen
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}
.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}
::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
.grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-gap: 3%;
  height: 100%;
  width: 100%;
}
.random {
  grid-row: 2/-1;
  padding: 1%;
  overflow: auto;
}
.lastview {
  grid-row: 2/-1;
  padding: 1%;
  overflow: auto;
}
.buttonLogin {
  grid-row: 2/-1;
  padding-top: 1%;
  overflow: auto;
  margin-top: 5%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
