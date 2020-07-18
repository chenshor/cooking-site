var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("../modules/DButils");
const bcrypt = require("bcrypt");
const axios = require("axios"); // supports promises

const api_domain = "https://api.spoonacular.com/recipes";
const api_key = process.env.spooncular_apiKey;
const autho = require("../modules/authoCode");
const recipesSearchModule = require("../modules/searchRecipes");
const dbModule = require("../modules/dbFunctions");

router.use(async (req, res, next) => {
  if (req.session && req.session.user_id) {
    const userId = req.session.user_id;
    const user = await autho.checkCookie(userId);
    if (user) {
      req.user = user;
      next();
    }
  } else {
    res.status(401).send({ message: "You need to log in", success: false });
  }
});

router.get("/favoriteRecipes", async (req, res) => {
  try {
    const userName = req.user.username;
    const ids = await dbModule.getFavorite(userName);
    if (ids.length >= 1) {
      res.status(200).send({ ids, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

router.get("/recipeInfo/:ids", async (req, res) => {
  try {
    const ids = JSON.parse(req.params.ids);
    const userName = req.user.username;
    console.log(ids, userName);
    const userRecipeInfo = await dbModule.getUserRecipeInfo(userName, ids);
    res.send({ userRecipeInfo });
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

router.post("/recipeInfo/seen/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  let success = await dbModule.addToDBSeen(user.username, id);
  res.send(success);
});

router.post("/recipeInfo/favorite/:id", async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  let success = await dbModule.addToDBFavorite(user.username, id);
  res.send(success);
});

router.get("/lastSeen", async (req, res) => {
  try {
    const user = req.user.username;
    let lastSeen = await dbModule.getThreeSeenRecipes(user);
    if (lastSeen.length >= 1) {
      res.status(200).send({ lastSeen, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

router.get("/familyRecipe", async (req, res) => {
  try {
    const user = req.user.username;
    let familyRecipes = await dbModule.getFamilyRecipe(user);
    if (familyRecipes.length >= 1) {
      res.status(200).send({ familyRecipes, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

router.get("/myRecipes", async (req, res) => {
  try {
    const user = req.user.username;
    let myRecipes = await dbModule.getMyRecipe(user);
    if (myRecipes.length >= 1) {
      res.status(200).send({ myRecipes, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "recipes not found", success: false });
  }
});

router.get("/myRecipes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user.username;
    const userRecipeInfo = await dbModule.getMyRecipeByID(user, id);
    res.send({ userRecipeInfo });
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

router.get("/familyRecipes/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = req.user.username;
    const userRecipeInfo = await dbModule.getFamilyRecipeByID(user, id);
    res.send({ userRecipeInfo });
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

router.get("/myRecipePreview", async (req, res) => {
  try {
    const user = req.user.username;
    const userRecipeInfo = await dbModule.getPreviewMyRecipe(user);
    if (userRecipeInfo.length >= 1) {
      res.status(200).send({ userRecipeInfo, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

router.get("/FamilyRecipePreview", async (req, res) => {
  try {
    const user = req.user.username;
    const userRecipeInfo = await dbModule.getPreviewFamilyRecipe(user);
    if (userRecipeInfo.length >= 1) {
      res.status(200).send({ userRecipeInfo, success: true });
    } else {
      res.status(404).send({ message: "recipes not found", success: false });
    }
  } catch (error) {
    res.status(404).send({ message: "ids not found", success: false });
  }
});

module.exports = router;
