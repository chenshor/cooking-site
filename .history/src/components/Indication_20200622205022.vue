<template>
  <b-container>
    <b-col>
      <b-row>
        <b-icon v-if="isFavorite" icon="heart-fill"></b-icon>
        <b-icon v-else icon="heart"></b-icon>
      </b-row>
    </b-col>
  </b-container>
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
        const response = await this.axios.get(
          `https://ass3-2.herokuapp.com/users/recipeInfo/[${id}]`
        );
        console.log(response.data.userRecipeInfo[0][id].favorite);
        this.isSeen = response.data.userRecipeInfo[0][id].watched;
        this.isFavorite = response.data.userRecipeInfo[0][id].favorite;
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