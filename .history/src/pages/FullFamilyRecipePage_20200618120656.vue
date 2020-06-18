<template>
  <div class="container">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1>{{ recipe.RecipeName }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        {{Ingredients}}
        <b-col v-for="i in recipe.Ingredients" :key="i.name">
          <Ingredients class="Ingredients" :Ingredient="i" />
        </b-col>
        <br />
        {{recipe.Instructions}}
        <br />
        {{recipe.Prepare}}
        <br />
        {{recipe.RecipeName}}
        <br />
        <!-- RecipeOwner,
        Vegetarian,
        glutenFree,
        image,
        vegan,
        servings}}-->
        <!-- <div class="wrapper">
          <div class="wrapped">
            <div class="mb-3">
              <div>Ready in {{ recipe.readyInMinutes }} minutes</div>
              <div>Likes: {{ recipe.aggregateLikes }} likes</div>
            </div>Ingredients:
            <ul>
              <li
                v-for="(r, index) in recipe.extendedIngredients"
                :key="index + '_' + r.id"
              >{{ r.original }}</li>
            </ul>
          </div>
          <div class="wrapped">
            Instructions:
            <ol>
              <li v-for="s in recipe._instructions" :key="s.number">{{ s.step }}</li>
            </ol>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Ingredients from "../components/Ingredients";
export default {
  name: "familyRecipe",
  components: {
    Ingredients
  },

  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      response = this.$route.params.response;
      let id = this.$route.params.id;
      try {
        response = await this.axios.get(
          `https://ass3-2.herokuapp.com/users/familyRecipes/${id}`
        );
        console.log(response.data.userRecipeInfo[0]);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        Ingredients,
        Instructions,
        Prepared,
        RecipeName,
        RecipeOwner,
        Vegetarian,
        glutenFree,
        image,
        vegan,
        servings
      } = response.data.userRecipeInfo[0];

      let _recipe = {
        Ingredients,
        Instructions,
        Prepared,
        RecipeName,
        RecipeOwner,
        Vegetarian,
        glutenFree,
        image,
        vegan,
        servings
      };

      this.recipe = _recipe;
      console.log(recipe);
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}
.wrapped {
  width: 50%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
/* .recipe-header{

} */
</style>
