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
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: 'Shadows Into Light', cursive;
  font-size: 70px;
 letter-spacing: 1px;
}

</style>
