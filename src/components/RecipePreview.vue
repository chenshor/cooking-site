<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipePreview"
  >
    <b-card
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
          <h3 class="headline">{{recipe.title}}</h3>
          </b-row>
          <b-row align-h="center">
            <small>
             <indication
              v-if="$root.store.username"
              :recipe="recipe"
            ></indication>
          </small>
          <small>{{ recipe.readyInMinutes }} Minutes </small>
          <small>{{ recipe.aggregateLikes }} likes </small>
          <small v-if="recipe.glutenFree">no-gluten</small>
          <small v-if="recipe.vegan">vegan</small>
          <small v-if="recipe.vegetarian">vegetarian</small>
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
        
        this.recipe.image = "https://res.cloudinary.com/di0zdzniy/image/upload/v1593707582/Picture1_cpn8ys.png"
     console.log(this.recipe.image);
     }


    }
  }
};
</script>

<style scoped>
.card{
  width: 365px;
  height: 500px;
  border-style:none;
  background-color: #fff2e6;
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
  padding-left: 5px;
  padding-right: 5px;
  height: 1.5em;
  bottom: 0;
 
}
h3{
  color: black;
  text-align: center;
  padding-bottom: 10px;
}



</style>
