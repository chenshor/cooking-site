<template>
  <b-container>
    <b-row cols-sm="3">
      <b-col v-for="r in recipes" :key="r.id">
        <MyRecipePreview class="MyRecipePreview" :recipe="r" />
      </b-col>
    </b-row>
    <div v-if="recipes.length === 0">
        <b-alert show variant="danger">
            <h1> You don't have recipes yet ?</h1>
            <hr>
            <h3> Write your recipes and share the magic with us </h3>
          </b-alert>
      </div>
  </b-container>
</template>

<script>
import MyRecipePreview from "./MyRecipePreview";
export default {
  name: "MyRecipeList",
  components: {
    MyRecipePreview
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
  width: 100%;
  height: 100%;
}

.container .alert{
  text-align: center;
  font-family: "Barlev";
  letter-spacing: 1px;
  width: 550px;
  margin-left: 25%;

}
</style>
