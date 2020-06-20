<template>
  <b-container>
    <b-row class="text-center" align-v="stretch">
      <b-col class="title">
        <h5>{{recipe.title}}</h5>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col class="Image">
        <b-img class="foodImg" :src="recipe.Image" fluid alt="Responsive image" center></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <h1>{{ recipe.RecipeName }}</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>Time: {{recipe.readyInMinutes}}</b-col>
      <b-col>Likes: {{recipe.aggregateLikes}}</b-col>
      <b-col>Servings: {{recipe.servings}}</b-col>
      <b-col>Is Vegan: {{recipe.vegan}}</b-col>
      <b-col>Is Vegetarian: {{recipe.Vegetarian}}</b-col>
      <b-col>Is Gluten Free: {{recipe.glutenFree}}</b-col>
    </b-row>
    <b-row class="ingredentsBox">
      <div v-for="i in ingredients" :key="i.name">
        <b-col>
          <Ingredients class="Ingredients" :ingredient="i" />
        </b-col>
      </div>

      <b-row>
        <b-col>
          instructions:
          {{recipe.instructions}}
        </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>

<script>
import Ingredients from "../components/Ingredients";
export default {
  name: "recipe",
  components: {
    Ingredients
  },
  data() {
    return {
      recipe: null,
      ingredients: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;
      let id = this.$route.params.recipeId;
      let responseIng;
      try {
        response = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/fullRecipe/${id}`
        );

        responseIng = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/ingredients/${id}`
        );

        console.log(responseIng.data.ingredients.ingredients);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        instructions,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data.fullRecipe[0];

      let _recipe = {
        instructions,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };
      this.ingredients = responseIng.data.ingredients.ingredients;
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
/* .recipe-header{

} */
</style>
