<template>
  <b-container>
    <h3>
      Explore these recipes:
      <slot></slot>
    </h3>
    <b-col>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
      <b-col>
        <b-button v-on:click="updateRecipes">Replace Recipes</b-button>
      </b-col>
    </b-col>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://ass3-2.herokuapp.com/recipes/randomRecipes"
        );

        console.log(response);
        const recipes = response.data.randomRecipes; /////// change to randomRecipes

        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
</style>
