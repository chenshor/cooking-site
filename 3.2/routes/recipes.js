const axios = require("axios"); // supports promises

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = process.env.spooncular_apiKey;

var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("../modules/DButils");
const recipesSearchModule = require("../modules/searchRecipes");
const dbModule = require("../modules/dbFunctions");

//// delete
const family = require("../modules/familyRecipes");

router.get(
  "/search/query/:searchQuery/amount/:number",
  async (req, res, next) => {
    try {
      const { searchQuery, number } = req.params;
      search_params = {};
      search_params.query = searchQuery;
      search_params.number = number;
      search_params.instractionsRequired = true;

      recipesSearchModule.getOtherPerameter(req.query, search_params);
      let searchResults = await recipesSearchModule.searchRecipe(search_params);
      if (searchResults.length > 0) {
        res.status(200).send({ data: searchResults });
      } else {
        res.status(404).send({ message: "recipes not found", success: false });
      }
    } catch (error) {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  }
);

router.get("/randomRecipes", async (req, res) => {
  try {
    let randomRecipes = await recipesSearchModule.getRandomRecipes(3);
    res.status(200).send({ randomRecipes, success: true });
  } catch (error) {
    res.status(400).send({ message: "invalid request", success: false });
  }
});

router.get("/fullRecipe/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let fullRecipe = await recipesSearchModule.getFullRecipes(id);
    res.status(200).send({ fullRecipe, success: true });
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

router.get("/ingredients/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let ingredients = await recipesSearchModule.getIngrediants(id);
    res.status(200).send({ ingredients, success: true });
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

//////////////////////////////////// delete
router.get("/FamilyRecipePreview", async (req, res) => {
  try {
    const user = "chenshor";
    const userRecipeInfo = await dbModule.getPreviewFamilyRecipe(user);
    res.send({ userRecipeInfo });
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

module.exports = router;
