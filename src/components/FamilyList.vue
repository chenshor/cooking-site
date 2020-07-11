<template>
  <b-container>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <FamilyRecipePreview class="familyPreview" :recipe="r" />
      </b-col>
    </b-row>
    <div v-if="!isFound">
         <b-alert show variant="danger">
            <h1> Get your first Family Recipe:</h1>
            <hr>
            <h3> 3 cups of forgiveness </h3>
            <h3> 1 gallon of friendship </h3>
            <h3> a pinch of hope </h3>
            <h3> a spoonful of laughter </h3>
            <h2> endless of -L-O-V-E- </h2>
          </b-alert>
    </div>
  </b-container>
</template>

<script>
import FamilyRecipePreview from "./FamilyRecipePreview";
export default {
  name: "FamilyList",
  components: {
    FamilyRecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: [],
      isFound: Boolean
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          "https://ass3-2.herokuapp.com/users/FamilyRecipePreview"
        );
        
        const recipes = response.data.userRecipeInfo;

        this.recipes = [];
        this.recipes.push(...recipes);
        if(this.recipes.length > 0){
          this.isFound = true;
        }
        else{
          this.isFound = false;
        }
      } catch (error) {
        this.isFound = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 400px;
}
.container .alert{
  text-align: center;
  font-family: "Barlev";
  letter-spacing: 1px;
  width: 550px;
  margin-left: 25%;

}

</style>
