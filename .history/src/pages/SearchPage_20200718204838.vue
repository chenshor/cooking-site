<template>
  <b-container class="containerSearch">
    <div class="title">Search Recipes</div>

    <b-row>
      <b-col>
        <b-form class="formSearch" @submit.prevent="searchRecipe">
          <b-form-group label="Search" label-for="search">
            <b-form-input id="search" v-model="search" placeholder="Search here.."></b-form-input>
          </b-form-group>

          <b-form-group label="Cuisine">
            <b-form-tags v-model="valueCuisine" size="lg" add-on-change no-outer-focus class="mb-2">
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="danger"
                    >{{ tag }}</b-form-tag>
                  </li>
                </ul>
                <b-form-select
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  :disabled="disabled"
                  :options="cuisine"
                >
                  <template v-slot:first>
                    <option disabled value>Choose a cuisine...</option>
                  </template>
                </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>

          <b-form-group label="Diet">
            <b-form-tags v-model="valueDiet" size="lg" add-on-change no-outer-focus class="mb-2">
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="danger"
                    >{{ tag }}</b-form-tag>
                  </li>
                </ul>
                <b-form-select
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  :disabled="disabled"
                  :options="diet"
                >
                  <template v-slot:first>
                    <option disabled value>Choose a diet...</option>
                  </template>
                </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>
          <b-form-group label="Intolerance">
            <b-form-tags
              v-model="valueIntolerance"
              size="lg"
              add-on-change
              no-outer-focus
              variant="danger"
              class="mb-2"
            >
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="danger"
                    >{{ tag }}</b-form-tag>
                  </li>
                </ul>
                <b-form-select
                  v-bind="inputAttrs"
                  v-on="inputHandlers"
                  :disabled="disabled"
                  :options="intolerance"
                >
                  <template v-slot:first>
                    <option disabled value>Choose a intolerance...</option>
                  </template>
                </b-form-select>
              </template>
            </b-form-tags>
          </b-form-group>

          <b-form-group label="Number of results:">
            <b-form-radio-group
              id="numberSearch"
              v-model="selected"
              :options="options"
              name="numberOfResults"
            ></b-form-radio-group>
          </b-form-group>
          <b-button type="submit" variant="danger" style="width:250px;" class="btnForm w-50">Search</b-button>
        </b-form>

        <b-row>
          <div v-if="isFound || recipes.length > 0" class="resultHead">
            <h2>Found {{recipes.length}} Recipes</h2>
            <b-form-group label="Sort By">
              <b-form-radio-group
                v-model="sortSelect"
                name="radio-inline"
                :options="sortOptions"
                v-on:change="sortArrays"
              ></b-form-radio-group>
            </b-form-group>
          </div>
        </b-row>
        <b-row class="recipesSearch" cols-sm="3">
          <div v-for="r in recipes" :key="r.id">
            <b-col>
              <RecipePreview class="recipePreview" :recipe="r" />
            </b-col>
          </div>
        </b-row>
      </b-col>
    </b-row>
    <div v-if="(isFound === false & recipes.length ===0)">
      <h2 class="noResult">Found {{recipes.length}} Recipes</h2>
    </div>
  </b-container>
</template>

<script>
import cuisine from "../assets/cuisine";
import diet from "../assets/diet";
import intolerance from "../assets/intolerance";
import RecipePreview from "../components/RecipePreview";

export default {
  name: "SearchPage",
  components: {
    RecipePreview
  },
  data() {
    return {
      cuisine: [{ value: null, text: "", disabled: true }],
      diet: [{ value: null, text: "", disabled: true }],
      intolerance: [{ value: null, text: "", disabled: true }],
      valueCuisine: [],
      valueDiet: [],
      search: "",
      valueIntolerance: [],
      errors: [],
      isFound: undefined,

      selected: "5",
      options: [
        { text: "5", value: "5" },
        { text: "10", value: "10" },
        { text: "15", value: "15" }
      ],
      recipes: [],
      sortSelect: "",
      sortOptions: [
        { text: "Time", value: "time" },
        { text: "Likes", value: "likes" }
      ]
    };
  },
  methods: {
    async searchRecipe() {
      try {
        let query = "";
        console.log(this.search);
        if (this.search != undefined) {
          query = this.search;
        }
        console.log(query);
        query = query.concat(this.search);
        for (let i in this.valueCuisine) {
          query = query.concat(" " + this.valueCuisine[i]);
        }
        console.log(query);
        for (let i in this.valueDiet) {
          query = query.concat(" " + this.valueDiet[i]);
        }
        for (let i in this.valueIntolerance) {
          query = query.concat(" " + this.valueIntolerance[i]);
        }

        let number = this.selected;

        let response = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/search/query/${query}/amount/${number}`
        );

        this.isFound = true;
        const recipes = response.data.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        if (localStorage.getItem("username")) {
          sessionStorage.removeItem("recipes");
          sessionStorage.recipes = JSON.stringify(this.recipes);
          sessionStorage.search = this.search;
          sessionStorage.cuisine = this.valueCuisine;
          sessionStorage.diet = this.valueDiet;
          sessionStorage.intolerance = this.valueIntolerance;
        }
      } catch (err) {
        this.isFound = false;
        this.recipes = [];
        if (localStorage.getItem("username"))
          sessionStorage.recipes = JSON.stringify(this.recipes);
        sessionStorage.search = this.search;
        sessionStorage.cuisine = this.valueCuisine;
        sessionStorage.diet = this.valueDiet;
        sessionStorage.intolerance = this.valueIntolerance;
      }
    },
    sortArrays(event) {
      if (event === "time") {
        this.recipes.sort((a, b) => {
          return a.readyInMinutes < b.readyInMinutes ? -1 : 1;
        });
      }
      if (event === "likes") {
        this.recipes.sort((a, b) => {
          return a.aggregateLikes < b.aggregateLikes ? -1 : 1;
        });
      }
    }
  },

  mounted() {
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolerance.push(...intolerance);
    if (localStorage.getItem("username")) {
      this.recipes = JSON.parse(sessionStorage.getItem("recipes"));
      if (sessionStorage.search !== "undefined") {
        this.search = sessionStorage.search;
      }
      if (sessionStorage.cuisine !== "undefined") {
        this.valueCuisine = sessionStorage.cuisine;
      }
      if (sessionStorage.diet !== "undefined") {
        this.valueDiet = sessionStorage.diet;
      }
      if (sessionStorage.intolerance !== "undefined") {
        this.valueIntolerance = sessionStorage.intolerance;
      }
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Acme&family=Dancing+Script&family=Fondamento&family=Montserrat:wght@100&family=Shadows+Into+Light&display=swap");
.containerSearch {
  width: 100%;
  height: 100%;
}
.title {
  color: whitesmoke;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 50px;
  font-family: "Shadows Into Light", cursive;
  font-size: 70px;
  letter-spacing: 1px;
}

.containerSearch .formSearch {
  background-color: rgb(243, 213, 200);
  padding: 10px;
  width: 60%;
  margin-bottom: 20px;
  margin-left: 20%;
}
.resultHead {
  background-color: brown;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.btnForm {
  margin-left: 25%;
}
.containerSearch h1 {
  color: whitesmoke;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
}
.noResult {
  background-color: brown;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.form-group .lable {
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}
</style>