<template>
  <div class="container">
    <h1 class="title">Family Recipes</h1>
    <FavoriteRecipesList title="Family Recipes" class="family Recipes" />
  </div>
</template>

<script>
import FavoriteRecipesList from "../components/FavoriteRecipesList";
export default {
  components: {
    FavoriteRecipesList
  }
};
</script>

<style></style>
