<template>
  <router-link :to="{ name: 'myRecipe', params: { id: recipe.id } }" class="recipePreview">
    <b-card
      :title="recipe.title"
      :img-src="recipe.image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;max-height:auto;"
      class="mb-2"
    >
      <b-card-text>
        {{ recipe.readyInMinutes }} readyInMinutes
        <br />
        {{ recipe.aggregateLikes }} likes
        <br />
        is gluten free: {{ recipe.glutenFree }}
        <br />
        is vegan: {{ recipe.vegan }}
        <br />
        is vegetarian:{{ recipe.vegetarian }}
        <!-- {{recipe}} -->
        <indication></indication>
      </b-card-text>
    </b-card>
  </router-link>
</template>

<script>
import indication from "./Indication";
export default {
  components: {
    indication
  },
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

<style>
.card-img-top {
  width: 100%;
  height: 10vw;
  object-fit: cover;
}
</style>
