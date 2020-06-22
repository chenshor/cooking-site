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
  methods: {
    async checkIndication(event) {
      try {
        const id = this.$route.params.recipeId;
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