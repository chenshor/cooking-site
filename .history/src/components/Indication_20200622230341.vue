<template>
  <b-container>
    <b-row>
      <b-col>
        <b-icon v-if="isFavorite" icon="heart-fill" class="h3 mb-2"></b-icon>
        <b-icon
          id="favorite"
          class="h3 mb-2"
          v-else
          icon="heart"
          v-on:click="addToFavorite"
        ></b-icon>
      </b-col>
      <b-col>
        <b-icon v-if="isSeen" icon="eye-fill" class="h2 mb-2"></b-icon>
        <b-icon v-else icon="eye-slash" class="h2 mb-2 hvr-grow"></b-icon>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "indication",
  data() {
    return {
      isSeen: Boolean,
      isFavorite: Boolean,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.checkIndication();
  },
  methods: {
    async checkIndication() {
      try {
        console.log(this.recipe);
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
    },

    async addToFavorite(event) {
      try {
        const id = this.recipe.id;
        console.log(id);
        const response = await this.axios.post(
          `https://ass3-2.herokuapp.com/users/recipeInfo/favorite/${id}`
        );
        this.isFavorite = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
#favorite {
  pointer-events: none;
  cursor: pointer;
}
</style>
