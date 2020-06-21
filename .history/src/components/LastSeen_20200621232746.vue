<template>
  <b-container>
    <h3>
      {{ title }}:
      <slot></slot>
    </h3>
    <b-row>
      <div v-if="this.lastSeen">
        <b-col v-for="r in recipes" :key="r.id">
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </div>
      <div v-else>
        <b-col>
          <h3>You havn't seen any recipes yet!!!</h3>
        </b-col>
      </div>
    </b-row>
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
      recipes: [],
      lastSeen: Boolean
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        if (localStorage.username) {
          const response = await this.axios.get(
            "https://ass3-2.herokuapp.com/users/lastSeen"
          );
        }
        const recipes = response.data.lastSeen;
        this.lastSeen = true;

        this.recipes = [];
        this.recipes.push(...recipes);
      } catch (error) {
        // console.log(error);
        this.lastSeen = false;
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
