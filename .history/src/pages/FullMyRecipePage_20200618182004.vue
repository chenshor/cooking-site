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
      <div v-for="i in recipe.Ingredients" :key="i.name">
        <b-col align-h="end">
          <Ingredients class="Ingredients" :ingredient="i" />
        </b-col>
      </div>
      <br />
      Time: {{recipe.readyInMinutes}}
      <br />
      Likes: {{recipe.aggregateLikes}}
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
    </b-row>
  </b-container>
</template>

<script>
import Ingredients from "../components/Ingredients";
export default {
  name: "MyRecipe",
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
          `https://ass3-2.herokuapp.com/users/myRecipes/${id}`
        );
        console.log(response);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        Ingredients,
        instructions,
        aggregateLikes,
        title,
        Vegetarian,
        glutenFree,
        Image,
        vegan,
        servings,
        readyInMinutes
      } = response.data.userRecipeInfo[0];

      let _recipe = {
        Ingredients,
        instructions,
        aggregateLikes,
        title,
        Vegetarian,
        glutenFree,
        Image,
        vegan,
        servings,
        readyInMinutes
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.foodImg {
  width: 100%;
  height: auto;
}
.container {
  max-width: 100%;
}
.title {
  height: 100px;
  background-color: yellow;
}
.h5 {
  font-size: 1000px;
}
</style>
