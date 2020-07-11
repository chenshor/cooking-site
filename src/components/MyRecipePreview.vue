<template>
  <router-link :to="{ name: 'myRecipe', params: { id: recipe.id } }" class="recipePreview">

    <b-card
       :img-src="recipe.image"
      img-alt="Image"
      img-top
      img-fluid="fluid"
      tag="article"
      class="mb-2"
    >
      <b-card-text >
        <b-col>
          <b-row align-h="center">
          <h3 class="headline">{{recipe.title}}</h3>
          </b-row>
          <b-row align-h="center">
          <small>{{ recipe.readyInMinutes }} </small>
          <small>{{ recipe.aggregateLikes }} Likes </small>
          <small v-if="recipe.glutenFree">Gluten Free</small>
          <small v-if="recipe.vegan">Vegan</small>
          <small v-if="recipe.vegetarian">Vegetarian</small>
        </b-row>

        </b-col>
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
.card{
  width: 365px;
  height: 500px;
  border-style:none;
  background-color: #fee6c2;
}

.card-img-top {
  width: 100%;
  height: 65%;
  object-fit: cover;
}
small{
    color: black;
  border: none;
  border-left: 1px solid rgb(179, 178, 178);
  padding-left: 10px;
  padding-right: 10px;
  height: 1.5em;
  bottom: 0;
  font-family: sans-serif;
  letter-spacing: 1px;
 
}
h3{
  color: black;
  text-align: center;
  padding-bottom: 5px;
  font-family: monospace;
  font-weight: bold;
}
.recipePreview{
    text-decoration: none;

}
</style>
