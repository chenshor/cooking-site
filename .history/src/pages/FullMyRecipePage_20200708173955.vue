<template>
  <div class="containerMyRecipe" v-if="recipe">
    <div class="recipeHeader">
      <div class="MyRecipeContact">
        <div class="lable">Full Recipe</div>
        <h1 class="title">{{ recipe.title }}</h1>
      </div>
    </div>
    <div class="media">
      <img :src="recipe.Image" class="center" />
    </div>
    <div class="recipe-body">
      <div class="previewData">
        <b-col>
          <b-row>
            <div class="data">{{recipe.readyInMinutes}}</div>
            <div class="data">{{recipe.aggregateLikes}} Likes</div>
            <div class="data">{{recipe.servings}}</div>
            <div class="data" v-if="recipe.glutenFree">Gluten Free</div>
            <div class="data" v-if="recipe.vegan">Vegan</div>
            <div class="data" v-if="recipe.Vegetarian">Vegetarian</div>
          </b-row>
        </b-col>
      </div>
      <div class="bodyData">
        <b-row align-h="between">
          <b-col cols="6">
            <h2>How To Make?</h2>
            <div class="instruction">{{recipe.instructions}}</div>
          </b-col>
          <b-col>
            <h2>What Do You Need?</h2>>
            <b-row cols-sm="3" align-h="end">
              <b-col v-for="i in recipe.Ingredients" :key="i.name">
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
.containerMyRecipe {
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
.MyRecipeContact {
  max-width: 980px;
  text-align: center;
  margin: 40px 0;
}
.subTitle {
  margin-top: 5px;
  font-weight: 300;
  font-family: "Abraham";
  height: 20px;
  line-height: 20px;
  margin-bottom: 20px;
  font-size: 16px;
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
</style>
