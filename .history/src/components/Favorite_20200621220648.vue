<template>
  <b-container>
    <b-icon icon="heart" v-on:click="favorite"></b-icon>
  </b-container>
</template>

<script>
export default {
  methods: {
    async addToFavorite(event) {
      try {
        const id = this.$route.params.recipeId;
        const response = await this.axios.post(
          `https://ass3-2.herokuapp.com/users/recipeInfo/favorite/${id}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>