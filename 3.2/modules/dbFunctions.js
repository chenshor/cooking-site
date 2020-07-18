const axios = require("axios"); // supports promises

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = process.env.spooncular_apiKey;

var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("../modules/DButils");
const recipesSearchModule = require("../modules/searchRecipes");

// return "seen" and "favorite" attributes for the user
async function getUserRecipeInfo(userName, ids) {
  try {
    let information = new Array();

    const recipesSeen = await DButils.execQuery(
      `SELECT recipe_id FROM dbo.seenRecipes where username = '${userName}'`
    );
    const recipesFavorite = await DButils.execQuery(
      `SELECT recipe_id FROM dbo.favoriteRecipes where username = '${userName}'`
    );
    let index = 0;
    // var dictionary = new Object();
    return ids.map((recipeId) => {
      information[index] = new Object();
      information[index].id = recipeId;
      if (recipesSeen.find((x) => x.recipe_id === recipeId)) {
        information[index].seen = true;
      } else {
        information[index].seen = false;
      }
      if (recipesFavorite.find((x) => x.recipe_id === recipeId)) {
        information[index].favorite = true;
      } else {
        information[index].favorite = false;
      }

      var info = {
        watched: information[index].seen,
        favorite: information[index].favorite,
      };
      var dictionary = {
        [recipeId]: info,
      };
      index++;
      return dictionary;
    });
  } catch (error) {}
}

// adds a recipe_id to the seen table
async function addToDBSeen(userName, id) {
  try {
    const recipes = await DButils.execQuery(
      `SELECT TOP 3 recipe_id FROM dbo.seenRecipes where username = '${userName}' ORDER BY id DESC`
    );
    if (!recipes.find((x) => x.recipe_id === parseInt(id))) {
      await DButils.execQuery(
        `INSERT INTO dbo.seenRecipes VALUES ('${userName}', '${id}')`
      );
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

// add a recipe_id to the users favorites table
async function addToDBFavorite(userName, id) {
  try {
    const recipes = await DButils.execQuery(
      `SELECT recipe_id FROM dbo.favoriteRecipes where username = '${userName}'`
    );
    if (!recipes.find((x) => x.recipe_id === parseInt(id))) {
      await DButils.execQuery(
        `INSERT INTO dbo.favoriteRecipes VALUES ('${userName}', '${id}')`
      );
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

// returns the favorite recipes of the user
async function getFavorite(userName) {
  try {
    recipes_id_list = [];
    const recipes = await DButils.execQuery(
      `SELECT recipe_id FROM dbo.favoriteRecipes where username = '${userName}'`
    );
    recipes.map((recipe) => {
      recipes_id_list.push(recipe.recipe_id);
    });
    const details = await recipesSearchModule.getRecipesInfo(recipes_id_list);
    const viewInformation = await recipesSearchModule.extractRelevantRecipeData(
      details
    );
    return viewInformation;
  } catch (error) {}
}
//
async function getThreeSeenRecipes(userName) {
  try {
    recipes_id_list = [];
    const recipes = await DButils.execQuery(
      `SELECT TOP 3 recipe_id FROM dbo.seenRecipes where username = '${userName}' ORDER BY id DESC`
    );
    recipes.map((recipe) => {
      recipes_id_list.push(recipe.recipe_id);
    });
    const details = await recipesSearchModule.getRecipesInfo(recipes_id_list);
    const viewInformation = await recipesSearchModule.extractRelevantRecipeData(
      details
    );
    return viewInformation;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

async function getFamilyRecipe(username) {
  try {
    var familyRecipes = [];
    const recipes = await DButils.execQuery(
      `SELECT recipe_Info FROM dbo.FamilyRecipes where username = '${username}'`
    );
    recipes.map((item) => {
      var stringRecipe = JSON.parse(item.recipe_Info);
      familyRecipes.push(stringRecipe);
    });
    return familyRecipes;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

async function getMyRecipe(username) {
  try {
    var myRecipes = [];
    const recipes = await DButils.execQuery(
      `SELECT recipe_Info FROM dbo.MyRecipes where username = '${username}'`
    );
    recipes.map((item) => {
      var stringRecipe = JSON.parse(item.recipe_Info);
      myRecipes.push(stringRecipe);
    });
    return myRecipes;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

async function getMyRecipeByID(username, id) {
  try {
    var myRecipes = [];
    const recipe = await DButils.execQuery(
      `SELECT recipe_Info FROM dbo.MyRecipes where username = '${username}' AND recipe_id = '${id}'`
    );
    recipe.map((item) => {
      var stringRecipe = JSON.parse(item.recipe_Info);
      myRecipes.push(stringRecipe);
    });
    return myRecipes;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

async function getFamilyRecipeByID(username, id) {
  try {
    var myRecipes = [];
    const recipe = await DButils.execQuery(
      `SELECT recipe_Info FROM dbo.FamilyRecipes where username = '${username}' AND recipe_id = '${id}'`
    );
    recipe.map((item) => {
      var stringRecipe = JSON.parse(item.recipe_Info);
      myRecipes.push(stringRecipe);
    });
    return myRecipes;
  } catch (error) {
    console.log("Catch an error: ", error);
  }
}

async function getPreviewMyRecipe(username) {
  var myRecipes = [];
  const recipes = await DButils.execQuery(
    `SELECT recipe_Info FROM dbo.MyRecipes where username = '${username}'`
  );
  recipes.map((item) => {
    var stringRecipe = JSON.parse(item.recipe_Info);
    myRecipes.push(stringRecipe);
  });
  var preview = recipesSearchModule.extractRelevantMYRecipeData(myRecipes);
  return preview;
}

async function getPreviewFamilyRecipe(username) {
  var myRecipes = [];
  const recipes = await DButils.execQuery(
    `SELECT recipe_Info FROM dbo.FamilyRecipes where username = '${username}'`
  );
  recipes.map((item) => {
    var stringRecipe = JSON.parse(item.recipe_Info);
    myRecipes.push(stringRecipe);
  });
  var preview = recipesSearchModule.extractRelevantFamilyData(myRecipes);
  return preview;
}

module.exports = {
  getUserRecipeInfo,
  addToDBSeen,
  addToDBFavorite,
  getFavorite,
  getThreeSeenRecipes,
  getFamilyRecipe,
  getMyRecipe,
  getMyRecipeByID,
  getFamilyRecipeByID,
  getPreviewMyRecipe,
  getPreviewFamilyRecipe,
};
