<template>
  <b-container>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="familyPreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "FamilyList",
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
          "https://ass3-2.herokuapp.com/users/favoriteRecipes"
        );

        console.log(response);
        const recipes = response.data.ids;

        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
}
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
</style>
