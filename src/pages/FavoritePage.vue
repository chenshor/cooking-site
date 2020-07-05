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

<style scop>
.title {
  color: whitesmoke;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}

</style>
