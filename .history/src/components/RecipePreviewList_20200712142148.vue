<template>
  <b-container class="listPre">
    <div class="title">
      <div>Explore new recipes:</div>
    </div>
    <b-col>
      <b-row v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-row>
      <b-row>
        <b-button id="btnRandom" v-on:click="updateRecipes">
          <b-icon-arrow-repeat></b-icon-arrow-repeat>Replace Recipes
        </b-button>
      </b-row>
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

        const recipes = response.data.randomRecipes;

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
.title {
  color: antiquewhite;
  text-align: left;
  font-size: 40px;
  font-family: "BlinkMacSystemFont";
}
#btnRandom {
  background-color: brown;
  margin-bottom: 30px;
  margin-left: 20%;
}
.recipePreview {
  padding-bottom: 30px;
}
.listPre {
  height: 100%;
}
</style>
