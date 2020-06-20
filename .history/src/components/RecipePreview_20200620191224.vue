<template>
  <router-link :to="{ name: 'recipe', params: { recipeId: recipe.id } }" class="recipePreview">
    <b-card
      :title="recipe.title"
      :img-src="recipe.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem; max-height: 30rem"
      class="mb-2"
    >
      <b-card-text>
        <b-row>
          <b-col>{{ recipe.readyInMinutes }} readyInMinutes</b-col>
          <b-col>{{ recipe.aggregateLikes }} likes</b-col>
          <b-col>is gluten free: {{ recipe.glutenFree }}</b-col>
          <b-col>is vegan: {{ recipe.vegan }}</b-col>
          <b-col>is vegetarian:{{ recipe.vegetarian }}</b-col>
        </b-row>
        <!-- {{recipe}} -->
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      image_load: false
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 5vw;
  object-fit: cover;
}
</style>
