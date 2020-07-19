const axios = require("axios"); // supports promises

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = process.env.spooncular_apiKey;

var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("../modules/DButils");

// 1. get query parameters after "?"
function getOtherPerameter(queryParams, searchParams) {
  const paramsList = ["diet", "cuisine", "intolerance"];
  paramsList.forEach((param) => {
    if (queryParams[param]) {
      searchParams[param] = queryParams[param];
    }
  });
}

// 2. returns all info of the suitable recipes
async function searchRecipe(search_params) {
  try {
    const search_response = await axios.get(`${api_domain}/search`, {
      params: {
        query: search_params.query,
        cuisine: search_params["cuisin"],
        diet: search_params["diet"],
        intolerances: search_params["intolerances"],
        number: search_params.number,
        instructionsRequired: true,
        apiKey: process.env.spooncular_apiKey,
      },
    });
    const recipiesIds = getRecipesID(search_response);
    let infoRecipes = await getRecipesInfo(recipiesIds);
    let information = await extractRelevantRecipeData(infoRecipes);
    return information;
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

// 3. returns the ids of the suitable recipes
function getRecipesID(search_query) {
  let recipes = search_query.data.results;
  recipes_id_list = [];
  recipes.map((recipe) => {
    console.log(recipe.title);
    recipes_id_list.push(recipe.id);
  });
  return recipes_id_list;
}

// 4. return the info from the ids of the recipes
async function getRecipesInfo(recipes_id_list) {
  try {
    let promises = [];

    recipes_id_list.map((id) =>
      promises.push(
        axios.get(`${api_domain}/${id}/information`, {
          params: {
            includeNutrition: false,
            apiKey: process.env.spooncular_apiKey,
          },
        })
      )
    );
    let info_response1 = await Promise.all(promises);
    // relevantRecipesData = await extractRelevantRecipeData(info_response1);
    return info_response1;
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

// 5. returns the info of the preview recipe
function extractRelevantRecipeData(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      vegetarian,
      vegan,
      glutenFree,
      image,
    } = recipe_info.data;

    return {
      id: id,
      title: title,
      readyInMinutes: readyInMinutes,
      aggregateLikes: aggregateLikes,
      vegetarian: vegetarian,
      vegan: vegan,
      glutenFree: glutenFree,
      image: image,
    };
  });
}

// 5. returns the info of the preview recipe
function extractRelevantMYRecipeData(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      Vegetarian,
      vegan,
      glutenFree,
      Image,
    } = recipe_info;

    return {
      id: id,
      title: title,
      readyInMinutes: readyInMinutes,
      aggregateLikes: aggregateLikes,
      vegetarian: Vegetarian,
      vegan: vegan,
      glutenFree: glutenFree,
      image: Image,
    };
  });
}

function extractRelevantFamilyData(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const {
      id,
      RecipeName,
      RecipeOwner,
      Prepared,
      Vegetarian,
      vegan,
      glutenFree,
      servings,
      image,
    } = recipe_info;

    return {
      id: id,
      RecipeName: RecipeName,
      RecipeOwner: RecipeOwner,
      Prepared: Prepared,
      vegetarian: Vegetarian,
      vegan: vegan,
      glutenFree: glutenFree,
      servings: servings,
      Image: image,
    };
  });
}

// returns random recipes
async function getRandomRecipes(Number) {
  try {
    const promise = await axios.get(`${api_domain}/random`, {
      params: {
        includeNutrition: false,
        apiKey: process.env.spooncular_apiKey,
        number: Number,
      },
    });
    let ids = await extractRandomRecipeId(promise.data.recipes);
    let arrayIds = [];
    ids.map((i) => {
      arrayIds.push(i.id);
    });
    let getfullInfo = await getRecipesInfo(arrayIds);
    let getReview = await extractRelevantRecipeData(getfullInfo);
    return getReview;
  } catch (e) {
    console.log("Catch an error: ", e);
  }
}

// returns the id attribute
function extractRandomRecipeId(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const { id } = recipe_info;

    return {
      id,
    };
  });
}

// eturns the full attributes
function extractFullRecipeData(recipes_Info) {
  return recipes_Info.map((recipe_info) => {
    const {
      id,
      title,
      readyInMinutes,
      aggregateLikes,
      vegetarian,
      vegan,
      glutenFree,
      image,
      servings,
      instructions,
    } = recipe_info.data;

    return {
      id: id,
      title: title,
      readyInMinutes: readyInMinutes,
      aggregateLikes: aggregateLikes,
      vegetarian: vegetarian,
      vegan: vegan,
      glutenFree: glutenFree,
      image: image,
      servings: servings,
      instructions: instructions,
    };
  });
}

// returns the full recipe
async function getFullRecipes(id) {
  recipes_id_list = [];
  recipes_id_list.push(id);
  let infoRecup = await getRecipesInfo(recipes_id_list);
  console.log(infoRecup);
  let fullRecipe = await extractFullRecipeData(infoRecup);
  
  return fullRecipe;
}

// returns the ingrediants of the recipe
async function getIngrediants(id) {
  try {
    const promise = await axios.get(
      `${api_domain}/${id}/ingredientWidget.json`,
      {
        params: {
          includeNutrition: false,
          apiKey: process.env.spooncular_apiKey,
        },
      }
    );
    return promise.data;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

module.exports = {
  getOtherPerameter,
  searchRecipe,
  getRandomRecipes,
  getFullRecipes,
  getIngrediants,
  extractRelevantFamilyData,
  getRecipesInfo,
  extractRelevantRecipeData,
  extractRelevantMYRecipeData,
};
