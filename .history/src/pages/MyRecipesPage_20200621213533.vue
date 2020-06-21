<template>
  <div class="container">
    <h1 class="title">My Recipes</h1>
    <MyRecipesList title="My Recipes" class="MyRecipes" />
  </div>
</template>

<script>
import MyRecipesList from "../components/MyRecipesList";
export default {
  components: {
    MyRecipesList
  }
};
</script>

<style></style>
