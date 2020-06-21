<template>
  <b-container>
    <b-icon class="icon" icon="heart" v-on:click="addToFavorite"></b-icon>
  </b-container>
</template>

<script>
export default {
  name: "favorite",
  methods: {
    async addToFavorite(event) {
      try {
        const id = this.$route.params.recipeId;
        console.log(id);
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
.icon {
  cursor: default;
}
</style>