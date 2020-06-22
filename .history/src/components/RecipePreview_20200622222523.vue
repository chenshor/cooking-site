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
        <b-col>
          <b-row>
            <indication v-if="$root.store.username" :recipe="recipe"></indication>
          </b-row>
        </b-col>
        <b-col>
          <b-row>{{ recipe.readyInMinutes }} readyInMinutes</b-row>
          <b-row>{{ recipe.aggregateLikes }} likes</b-row>
          <b-row>is gluten free: {{ recipe.glutenFree }}</b-row>
          <b-row>is vegan: {{ recipe.vegan }}</b-row>
          <b-row>is vegetarian:{{ recipe.vegetarian }}</b-row>
        </b-col>
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

<style scoped>
.card-img-top {
  width: 100%;
  height: 5vw;
  object-fit: cover;
}
</style>
