<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipePreview"
  >
    <b-card v-if="this.image_load"
      :img-src="this.recipe.image"
      img-alt="Image"
      img-top
      img-fluid="fluid"
      tag="article"
      class="mb-2"
    >
      <b-card-text id="data-content">
        <b-col>
          <b-row align-h="center">
          <h4 class="headline">{{recipe.title}}</h4>
          </b-row>
          <b-row align-h="center">
            <small  v-if="$root.store.username">
             <indication
              :recipe="recipe"
            ></indication>
          </small>
          <small>{{ recipe.readyInMinutes }} Minutes </small>
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
import indication from "./Indication";
export default {
  components: {
    indication,
  },
  data() {
    return {
      image_load: false,
    };
  },
  props: {
    recipe: {
      type: Object,
      required: true,
    },
  },
  mounted(){
    this.checkImg()

  },
  methods:{
    checkImg(){
      if(this.recipe.image === undefined){
        
      this.recipe.image = "https://res.cloudinary.com/di0zdzniy/image/upload/v1593766214/imgUndifine_obezhq.jpg"
     }
     this.image_load = true;
      

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
 
}
h4{
  color: black;
  text-align: center;
  padding-bottom: 5px;
}
.recipePreview{
    text-decoration: none;

}



</style>
