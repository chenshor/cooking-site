<template>
  <b-container>
    <div class="title">{{ title }}:</div>
    <b-col md="3" offset-md="3">
      <div v-if="this.lastSeen">
        <b-row v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-row>
      </div>
      <div v-else>
        <b-col>
          <b-alert show variant="danger">
            <h2>You havn't seen any recipes yet !</h2>
            <hr />
            <h5>Find your recipes and discover the magic of cooking</h5>
          </b-alert>
        </b-col>
      </div>
    </b-col>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recipes: [],
      lastSeen: Boolean,
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        let username = localStorage.getItem("username");
        if (username) {
          const response = await this.axios.get(
            "https://ass3-2.herokuapp.com/users/lastSeen"
          );

          const recipes = response.data.lastSeen;
          this.lastSeen = true;

          this.recipes = [];
          this.recipes.push(...recipes);
        }
      } catch (error) {
        this.lastSeen = false;
      }
    },
    async getFunc() {
      return await this.axios.get("http://localhost:3000/users/lastSeen");
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: antiquewhite;
  text-align: right;
  font-size: 40px;
  font-family: "BlinkMacSystemFont";
  letter-spacing: 1px;
}
.container .alert {
  text-align: center;
  font-family: "Barlev";
  letter-spacing: 1px;
  width: 350px;
}
h5 {
  color: black;
}
.container .recipePreview {
  padding-bottom: 30px;
}
</style>
