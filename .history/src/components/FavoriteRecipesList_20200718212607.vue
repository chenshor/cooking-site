<template>
  <b-container>
    <b-row cols-sm="3">
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="favoritePreview" :recipe="r" />
      </b-col>
    </b-row>
    <div v-if="recipes.length === 0">
      <b-alert show variant="danger">
        <h1>You did not liked any recipes yet ?</h1>
        <hr />
        <h3>Find your recipes and discover the magical of cooking</h3>
      </b-alert>
    </div>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "FamilyList",
  components: {
    RecipePreview,
  },

  data() {
    return {
      recipes: [],
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "http://localhost:3000/users/favoriteRecipes"
        );

        const recipes = response.data.ids;

        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
}
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
.container .alert {
  text-align: center;
  font-family: "Barlev";
  letter-spacing: 1px;
  width: 550px;
  margin-left: 25%;
}
</style>
