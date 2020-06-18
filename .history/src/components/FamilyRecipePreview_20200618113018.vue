<template>
  <router-link :to="{ name: 'familyRecipe', params: { id: recipe.id } }" class="recipePreview">
    <b-card
      :title="recipe.RecipeName"
      :img-src="recipe.Image"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;max-height:auto;"
      class="mb-2"
    >
      <b-card-text>
        servings:{{ recipe.servings }}
        <br />
        RecipeOwner: {{ recipe.RecipeOwner }}
        <br />
        Prepared: {{recipe.Prepared}}
        <br />
        is gluten free: {{ recipe.glutenFree }}
        <br />
        is vegan: {{ recipe.vegan }}
        <br />
        is vegetarian:{{ recipe.vegetarian }}
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

<style>
</style>
