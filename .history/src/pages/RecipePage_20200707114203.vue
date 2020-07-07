<template>
  <div class="containerFullRecipe" v-if="recipe">
    <div class="recipeHeader">
      <div class="RecipeContact">
        <div class="lable">Full Recipe</div>
        <h1 class="title">{{ recipe.title }}</h1>
      </div>
    </div>
    <div class="media">
      <img :src="recipe.image" class="center" />
    </div>
    <div class="recipe-body">
      <div class="previewData">
        <b-col>
          <b-row>
            <div class="data">{{recipe.readyInMinutes}} Minutes</div>
            <div class="data">{{recipe.aggregateLikes}} Likes</div>
            <div class="data">{{recipe.servings}} Services</div>
            <div class="data" v-if="recipe.glutenFree">Gluten Free</div>
            <div class="data" v-if="recipe.vegan">Vegan</div>
            <div class="data" v-if="recipe.vegetarian">Vegetarian</div>
            <div class="indication">
              <Indication v-if="$root.store.username" :recipe="this.recipe"></Indication>
            </div>
          </b-row>
        </b-col>
      </div>
      <div class="bodyData">
        <b-row align-h="between">
          <b-col cols="6">
            <h2>How To Make?</h2>
            <div class="instruction">{{ recipe.instructions }}</div>
          </b-col>
          <b-col cols="5">
            <h2>What Do You Need?</h2>>
            <b-row cols-sm="3" align-h="end">
              <b-col v-for="i in this.ingredients" :key="i.name">
                <Ingredients class="Ingredients" :ingredient="i" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
    <div v-if="!recipe">You dont have any family recipes</div>
  </div>
</template>

<script>
import Ingredients from "../components/IngredientSpoon";
import Indication from "../components/Indication";
export default {
  name: "recipe",
  components: {
    Ingredients,
    Indication
  },
  data() {
    return {
      recipe: null,
      ingredients: null
    };
  },
  async created() {
    try {
      let response;
      let seen;
      let id = this.$route.params.recipeId;
      let responseIng;
      try {
        response = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/fullRecipe/${id}`
        );

        responseIng = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/ingredients/${id}`
        );

        // console.log($root.store.username);
        if (localStorage.username) {
          seen = await this.axios.post(
            `https://ass3-2.herokuapp.com/users/recipeInfo/seen/${id}`
          );
        }

        // console.log("response.status", response.status);
        if (response.status !== 200) this.$router.replace("/NotFound");
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/");
        return;
      }

      let {
        instructions,
        aggregateLikes,
        readyInMinutes,
        image,
        vegan,
        vegetarian,
        glutenFree,
        servings,
        title,
        recipeId
      } = response.data.fullRecipe[0];

      let _recipe = {
        instructions,
        aggregateLikes,
        readyInMinutes,
        image,
        vegan,
        vegetarian,
        glutenFree,
        servings,
        title,
        id
      };
      this.ingredients = responseIng.data.ingredients.ingredients;
      this.recipe = _recipe;
      this.recipe.instructions = this.recipe.instructions.replace(
        "</li><li>",
        ""
      );
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.containerFullRecipe {
  width: 100%;
}

.recipeHeader {
  background: rgb(243, 213, 200);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
}
.title {
  color: black;
  line-height: 60px;
  font-size: 74px;
  font-family: "Barlev";
  letter-spacing: 1px;
}
.lable {
  text-align: center;
  color: whitesmoke;
  display: inline-block;
  height: 32px;
  line-height: 32px;
  background-color: brown;
  border: 1px whitesmoke solid;
  min-width: auto;
  letter-spacing: 1px;
  padding: 0 15px;
  margin-bottom: 15px;
  font-family: "Abraham";
  font-size: 16px;
  font-weight: 500;
}
.RecipeContact {
  max-width: 980px;
  text-align: center;
  margin: 40px 0;
}

.media img {
  width: 50%;
  height: 40%;
  display: block;
  margin: 0 auto;
  padding: 0;
}
.media {
  background-color: brown;
}
.previewData {
  color: rgb(243, 213, 200);
  border-bottom: 2px solid rgb(243, 213, 200);
  width: 100%;
  justify-content: space-between;
  padding-bottom: 13px;
}
.data {
  border-right: 1px solid rgb(243, 213, 200);
  height: inherit;
  float: right;
  padding: 0 18px;
  font-size: 30px;
  font-family: "Barlev";
  line-height: 30px;
  margin-top: 50px;
}
.instruction {
  color: whitesmoke;
  line-height: 40px;
  font-size: 20px;
  letter-spacing: 1px;
  margin-left: 5px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 70px;
}
.bodyData h2 {
  color: rgb(243, 213, 200);
  margin-top: 75px;
  margin-bottom: 20px;
  text-align: center;
}
.indication {
  border-right: 1px solid rgb(243, 213, 200);
  height: inherit;
  float: right;
  padding: 0 18px;
  font-size: 30px;
  font-family: "Barlev";
  margin-top: 50px;
}
</style>
