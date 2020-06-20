<template>
  <b-container class="container">
    <b-row>
      <b-col>
        <h1 class="titleS">Search</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit.prevent="searchRecipe">
          <b-form-group label="search" label-for="search">
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
                      variant="info"
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
                    <option disabled value>Choose a tag...</option>
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
                      variant="info"
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
                    <option disabled value>Choose a tag...</option>
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
              class="mb-2"
            >
              <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
                <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
                  <li v-for="tag in tags" :key="tag" class="list-inline-item">
                    <b-form-tag
                      @remove="removeTag(tag)"
                      :title="tag"
                      :disabled="disabled"
                      variant="info"
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
                    <option disabled value>Choose a tag...</option>
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
          <b-button type="submit" variant="primary" style="width:250px;" class="ml-5 w-75">Search</b-button>
        </b-form>
        <b-row v-if="recipes.length>0">
          <b-form-group label="Sort by:" v-model="sort">
            <b-form-radio
              v-on:change="sortArrays"
              v-model="sort"
              name="some-radios"
              value="aggregateLikes"
            >Likes</b-form-radio>
            <b-form-radio
              v-on:change="sortArrays"
              v-model="sort"
              name="some-radios"
              value="readyInMinutes"
            >Time</b-form-radio>
          </b-form-group>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="recipesSearch">
      <div v-for="r in recipes" :key="r.id">
        <b-col>
          <RecipePreview class="recipePreview" :recipe="r" />
        </b-col>
      </div>
    </b-row>
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
      sort: "",

      selected: "5", // Must be an array reference!
      options: [
        { text: "5", value: "5" },
        { text: "10", value: "10" },
        { text: "15", value: "15" }
      ],
      recipes: []
    };
  },
  methods: {
    async searchRecipe() {
      try {
        let query = this.search;
        for (let i in this.valueCuisine) {
          query = query.concat(" " + this.valueCuisine[i]);
        }
        for (let i in this.valueDiet) {
          query = query.concat(" " + this.valueDiet[i]);
        }
        for (let i in this.valueIntolerance) {
          query = query.concat(" " + this.valueIntolerance[i]);
        }

        let number = this.selected;

        const response = await this.axios.get(
          `https://ass3-2.herokuapp.com/recipes/search/query/${query}/amount/${number}`
        );
        const recipes = response.data.data;
        this.recipes = [];
        this.recipes.push(...recipes);
        sessionStorage.removeItem("recipes");
        sessionStorage.recipes = JSON.stringify(this.recipes);
      } catch (err) {
        console.log(err.response + "error");
      }
    },
    sortArrays(event) {
      console.log(this.sort);
      this.recipes = orderBy(this.recipes, this.sort, "asc");
    }
  },

  mounted() {
    this.cuisine.push(...cuisine);
    this.diet.push(...diet);
    this.intolerance.push(...intolerance);
    console.log(this.recipes.length);
    if (sessionStorage.recipes) {
      this.recipes = JSON.parse(sessionStorage.getItem("recipes"));
    }
  }
};
</script>

<style>
.container {
  width: 100%;
}
</style>