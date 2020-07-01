<template>
  <div class="container">
    <h1 class="title">Favorite Recipes</h1>
    <FavoriteRecipesList title="Favorite Recipes" class="favorite Recipes" />
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

<style>
h1 {
  color: #a52a2a;
}
</style>
