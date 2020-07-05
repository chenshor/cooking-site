<template>
  <div class="containerMyRecipe">
    <h1 class="title">My Recipes</h1>
    <MyRecipesList></MyRecipesList>
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

<style scope>
.containerMyRecipe {
  width: 100%;
  height: 100%;
}

.title{
  color: whitesmoke;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 50px;
}
</style>
