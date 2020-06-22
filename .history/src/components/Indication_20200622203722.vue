<template>
  <b-container></b-container>
</template>

<script>
export default {
  name: "indication",
  data() {
    return {
      isSeen: Boolean,
      isFavorite: Boolean
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.checkIndication();
  },
  methods: {
    async checkIndication() {
      try {
        const id = this.recipe.id;
        console.log(id);
        const response = await this.axios.get(
          `https://ass3-2.herokuapp.com/users/recipeInfo/[${id}]`
        );

        console.log(response.userRecipeInfo);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.icon {
  cursor: default;
}
</style>