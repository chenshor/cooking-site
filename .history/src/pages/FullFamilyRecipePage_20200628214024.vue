<template>
  <div class="container" v-if="recipe">
    <div v-if="recipe">
      <div class="recipe-header mt-3 mb-4">
        <h1 id="title">{{ recipe.RecipeName }}</h1>
        <img :src="recipe.image" class="center" />
      </div>
      <div class="recipe-body">
        <b-row>
          <b-col v-for="i in recipe.Ingredients" :key="i.name">
            <Ingredients class="Ingredients" :ingredient="i" />
          </b-col>
        </b-row>
        <br />
        Recipe Owner: {{recipe.RecipeOwner}}
        <br />
        Prepared at {{recipe.Prepared}}
        <br />
        Servings: {{recipe.servings}}
        <br />
        Is Vegan: {{recipe.vegan}}
        <br />
        Is Vegetarian: {{recipe.Vegetarian}}
        <br />
        Is Gluten Free: {{recipe.glutenFree}}
        <br />Instructions:
        <br />
        {{recipe.Instuctions}}
      </div>
      <div v-if="!isFound">You dont have any family recipes</div>
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
      }

      let {
        Ingredients,
        Instuctions,
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
        Instuctions,
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
#title {
  color: #e43d3d;
}
/* .recipe-header{

} */
</style>
