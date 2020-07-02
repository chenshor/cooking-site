<template>
  <b-container>
    <b-row>
      <span class="hears" >
        <b-icon v-if="isFavorite" icon="heart-fill" class="h5 mb-2"></b-icon>
        <b-icon
          id="favorite"
          class="h5 mb-2 hvr-grow"
          v-else
          icon="heart"
          style="cursor: pointer;"
          v-on:click="addToFavorite"
        ></b-icon>
      </span>
      <span class="indication">
        <b-icon  v-if="isSeen" icon="eye-fill" class="h5 mb-2"></b-icon>
        <b-icon v-else icon="eye-slash" class="h5 mb-2 "></b-icon>
      </span>
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
.indication{
  border: none;
  border-left: 1px solid rgb(179, 178, 178);
  padding-left: 5px;
  padding-right: 5px;
  height: 1.5em;
}
.hears{
  padding-right: 5px;
}
</style>
