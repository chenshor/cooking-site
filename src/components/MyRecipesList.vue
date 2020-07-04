<template>
  <b-container>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <MyRecipePreview class="MyRecipePreview" :recipe="r" />
      </b-col>
    </b-row>
    <div v-if="!isFound">You dont have any recipes yet!</div>
  </b-container>
</template>

<script>
import MyRecipePreview from "./MyRecipePreview";
export default {
  name: "MyRecipeList",
  components: {
    MyRecipePreview
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
          "https://ass3-2.herokuapp.com/users/myRecipePreview"
        );
        this.isFound = true;
        const recipes = response.data.userRecipeInfo;
        this.recipes = [];
        this.recipes.push(...recipes);
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
