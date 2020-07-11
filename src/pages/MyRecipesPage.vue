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
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Dancing+Script&family=Fondamento&family=Shadows+Into+Light&display=swap");

.containerMyRecipe {
  width: 100%;
  height: 100%;
}

.title{
  color: whitesmoke;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: 'Shadows Into Light', cursive;
  font-size: 70px;
 letter-spacing: 1px;

}
</style>
