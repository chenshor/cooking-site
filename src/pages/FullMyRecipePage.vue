<template>
  <b-container>
    <b-row class="text-center" align-v="stretch">
      <b-col class="title">
        <h5>{{recipe.title}}</h5>
      </b-col>
    </b-row>
    <b-row align-v="stretch">
      <b-col class="Image">
        <b-img class="foodImg" :src="recipe.Image" fluid alt="Responsive image" center></b-img>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="text-center">
        <h1>{{ recipe.RecipeName }}</h1>
      </b-col>
    </b-row>
        <b-row>
      <b-col>
        Time: {{recipe.readyInMinutes}}
      </b-col>
      <b-col>
        Likes: {{recipe.aggregateLikes}}
      </b-col>
      <b-col>
        Servings: {{recipe.servings}}
      </b-col>
      <b-col>
        Is Vegan: {{recipe.vegan}}
      </b-col>
      <b-col>
        Is Vegetarian: {{recipe.Vegetarian}}
      </b-col>
      <b-col>
        Is Gluten Free: {{recipe.glutenFree}}
      </b-col>
    </b-row>
    <b-row class="ingredentsBox">
      <div v-for="i in recipe.Ingredients" :key="i.name">
        <b-col>
          <Ingredients class="Ingredients" :ingredient="i" />
        </b-col>
      </div>

   <b-row>
       <b-col >
       instructions:
       {{recipe.instructions}}
     </b-col>
     </b-row>
    
   </b-row>    
  </b-container>
</template>

<script>
import Ingredients from "../components/Ingredients";
export default {
  name: "MyRecipe",
  components: {
    Ingredients
  },

  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      response = this.$route.params.response;
      let id = this.$route.params.id;
      try {
        response = await this.axios.get(
          `https://ass3-2.herokuapp.com/users/myRecipes/${id}`
        );
        console.log(response);

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        Ingredients,
        instructions,
        aggregateLikes,
        title,
        Vegetarian,
        glutenFree,
        Image,
        vegan,
        servings,
        readyInMinutes
      } = response.data.userRecipeInfo[0];

      let _recipe = {
        Ingredients,
        instructions,
        aggregateLikes,
        title,
        Vegetarian,
        glutenFree,
        Image,
        vegan,
        servings,
        readyInMinutes
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.foodImg {
  width: 70%;
  height: auto;
}
.container {
  max-width: 100%;
}
.title {
  height: 100px;
  background-color: yellow;
}
.ingredentsBox{
  width: 70%;
  margin-left:0;
  /* padding: 50px;
  margin: 20px; */
  
}
</style>
