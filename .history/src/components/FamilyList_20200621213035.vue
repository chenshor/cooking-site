<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <FamilyRecipePreview class="familyPreview" :recipe="r" />
      </b-col>
    </b-row>
    <div v-if="isFound">You dont have any familt recipes yet!</div>
  </b-container>
</template>

<script>
import FamilyRecipePreview from "./FamilyRecipePreview";
export default {
  name: "FamilyList",
  components: {
    FamilyRecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: [],
      isFound: Boolean
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://ass3-2.herokuapp.com/users/FamilyRecipePreview"
        );

        console.log(response);
        const recipes = response.data.userRecipeInfo;

        this.recipes = [];
        this.recipes.push(...recipes);
        // console.log(this.recipes);
      } catch (error) {
        this.isFound = false;
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
