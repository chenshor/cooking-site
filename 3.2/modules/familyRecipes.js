var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("./DButils");
const recipesSearchModule = require("./searchRecipes");

async function insertFamilyRecipe() {
  var nameChen = "chenshor";
  var nameOr = "orshosh";
  var myObject1 = {
    id: "1",
    RecipeName: "zalabya",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348534/zalabya_mdxhoz.jpg",
    RecipeOwner: "grandma Esther",
    Prepared: "occasions and holidays",
    vegan: "true",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "100 pieces",
    Ingredients: [
      {
        name: "flour",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "1000",
            unit: "g",
          },
          us: {
            value: "5",
            unit: "cups",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "dry yeast",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257636/yeast_hizsev.jpg",
        amount: {
          metric: {
            value: "10",
            unit: "g",
          },
          us: {
            value: "5",
            unit: "teaspoons",
          },
        },
      },
      {
        name: "warm water",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257792/water_ipo0xi.jpg",
        amount: {
          metric: {
            value: "106",
            unit: "ml",
          },
          us: {
            value: "3",
            unit: "cups",
          },
        },
      },
      {
        name: "sugar syrup",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257793/sugarsyrup_gjv5hi.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "ml",
          },
          us: {
            value: "15",
            unit: "cup",
          },
        },
      },
    ],
    Instuctions:
      "To make the batter: Whisk to combine flour, salt, and yeast in a large bowl. Gradually stir in water, beating vigorously until smooth and elastic, about 10 minutes. Cover with plastic wrap, and let rise in a warm place for at least 1 1/4 hours. Uncover, and beat once more. Cover, and let rise again, about 30 minutes. Heat 2 inches of oil in a deep saucepan over medium-high heat until the oil reaches 375 degrees. Dip two tablespoons in a small bowl of oil to coat. Working in batches, spoon about a tablespoon of batter into hot oil. Fry, turning occasionally, until puffed, crisp, and golden. Reduce the heat a little so that the fritters are thoroughly cooked without getting too brown. The light batter produces irregular rather than round fritters.Using a slotted spoon, remove fritters, and transfer to a paper towel-lined baking sheet to drain. Dip fritters in the cold syrup for a few seconds to coat and soak up some syrup. These are best served hot, but they may also be served at room temperature.",
  };
  var stringJson = JSON.stringify(myObject1);
  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (1, '${nameChen}', '${stringJson}')`
  );

  var myObject2 = {
    id: "2",
    RecipeName: "hamin",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348623/hamin_fxjiyj.jpg",
    RecipeOwner: "grandma Ruthi",
    Prepared: "occasions and holidays",
    vegan: "false",
    Vegetarian: "false",
    glutenFree: "false",
    servings: "5",
    Ingredients: [
      {
        name: "water",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257792/water_ipo0xi.jpg",
        amount: {
          metric: {
            value: "800",
            unit: "ml",
          },
          us: {
            value: "4",
            unit: "cups",
          },
        },
      },
      {
        name: "eggs",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "",
          },
          us: {
            value: "5",
            unit: "",
          },
        },
      },
      {
        name: "potato",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/potato_kewjtz.jpg",
        amount: {
          metric: {
            value: "400",
            unit: "g",
          },
          us: {
            value: "9",
            unit: "units",
          },
        },
      },
      {
        name: "beans",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/beans_nsvgxf.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "cup",
          },
        },
      },
      {
        name: "meat",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/beef_mbms8r.jpg",
        amount: {
          metric: {
            value: "500",
            unit: "g",
          },
          us: {
            value: "500",
            unit: "g",
          },
        },
      },
      {
        name: "onion",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/onion_axetev.jpg",
        amount: {
          metric: {
            value: "100",
            unit: "g",
          },
          us: {
            value: "2",
            unit: "units",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "peper",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/peper_hk4if5.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "cuteaspoonps",
          },
        },
      },
      {
        name: "groats",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/groats_qp76kx.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "cup",
          },
        },
      },
    ],
    Instuctions:
      "In a large slow cooker, place the potatoes in a single layer on the bottom of the cooking vessel.Sprinkle the onions over the potatoes.Place the beef in a single layer on top of the onions and potatoes. Place the two marrow bones in the meat. If you are adding a kishke, now would be the time to put it in the cooker. Sprinkle the beans and optional grains over the top of the meat. Place the three whole garlic cloves into the meat, evenly spaced. Sprinkle the whole mixture with the black pepper, tuck the eggs into the meat.Pour the liquid over the cholent.Cover the slow cooker. Cook on low heat for 16 hours. Check occasionally as it is cooking: add additional water and stir a bit if it is looking too dry. Most cookers will auto switch to warm when the cooking is complete. If yours does not, set it to warm until ready to serve.",
  };
  var stringJson2 = JSON.stringify(myObject2);

  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (2,'${nameOr}', '${stringJson2}')`
  );

  var myObject3 = {
    id: "3",
    RecipeName: "Persian Rice",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348788/Persian_Rice_feyoao.jpg",
    RecipeOwner: "grandma Shulla",
    Prepared: "Every Friday",
    vegan: "true",
    Vegetarian: "true",
    glutenFree: "true",
    servings: "5",
    Ingredients: [
      {
        name: "rice",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/rice_kirtkb.jpg",
        amount: {
          metric: {
            value: "400",
            unit: "g",
          },
          us: {
            value: "2",
            unit: "cups",
          },
        },
      },
      {
        name: "water",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257792/water_ipo0xi.jpg",
        amount: {
          metric: {
            value: "800",
            unit: "ml",
          },
          us: {
            value: "4",
            unit: "cups",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "10",
            unit: "g",
          },
          us: {
            value: "3",
            unit: "teaspoons",
          },
        },
      },
      {
        name: "oil",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/oil_lc6mcc.jpg",
        amount: {
          metric: {
            value: "10",
            unit: "ml",
          },
          us: {
            value: "5",
            unit: "teaspoons",
          },
        },
      },
      {
        name: "potato",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/potato_kewjtz.jpg",
        amount: {
          metric: {
            value: "50",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "unit",
          },
        },
      },
    ],
    Instuctions:
      "Bring water and kosher salt to a boil in a pot; add rice and cook, stirring, for exactly 7 minutes. Drain.Heat olive oil in a pot over medium high heat. Cover bottom of pot with 1 layer of potato slices. Sprinkle cumin and salt over potatoes. Cook until potatoes are sizzling, 2 to 3 minutes. top potatoes with rice to form an even layer. Reduce heat to low and place butter slices over rice.Top pot with a layer of clean paper towels and place lid over towels. Steam until rice is fluffy, about 45 minutes.",
  };
  var stringJson3 = JSON.stringify(myObject3);
  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (3,'${nameOr}', '${stringJson3}')`
  );

  var myObject4 = {
    id: "10",
    RecipeName: "Shashlik Kebabs",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348947/Shashlik_Kebabs_zsdn5z.jpg",
    RecipeOwner: "Father Boaz",
    Prepared: "Independence Day",
    vegan: "false",
    Vegetarian: "false",
    glutenFree: "true",
    servings: "3-4 serving",
    Ingredients: [
      {
        name: "lamb trimmed",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/beef_mbms8r.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "kg",
          },
          us: {
            value: "3",
            unit: "kg",
          },
        },
      },
      {
        name: "oil",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/oil_lc6mcc.jpg",
        amount: {
          metric: {
            value: "0.5",
            unit: "cup",
          },
          us: {
            value: "40",
            unit: "ml",
          },
        },
      },
      {
        name: "black pepper",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/peper_hk4if5.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "5",
            unit: "g",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "tsp",
          },
        },
      },
    ],
    Instuctions:
      "cut the meat into 2cm cubes.Cook lamb shashlik skewers on the grill or under the broiler for 10 to 12 minutes, or until desired doneness. Turn to ensure even cooking",
  };
  var stringJson4 = JSON.stringify(myObject4);
  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (10, '${nameChen}', '${stringJson4}')`
  );

  var myObject5 = {
    id: "11",
    RecipeName: "Lasagna",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348996/Lasagna_ajl2n2.jpg",
    RecipeOwner: "Mother Yael",
    Prepared: "Family Evning",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "10 serving",
    Ingredients: [
      {
        name: "Thick noodles",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591347718/noodles_rwmkg6.jpg",
        amount: {
          metric: {
            value: "0.5",
            unit: "package",
          },
          us: {
            value: "500",
            unit: "g",
          },
        },
      },
      {
        name: "tomato souce",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591347719/tomato_soce_2_mnszwh.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "package",
          },
          us: {
            value: "5",
            unit: "spoon",
          },
        },
      },
      {
        name: "black pepper",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/peper_hk4if5.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "5",
            unit: "g",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "tsp",
          },
        },
      },
      {
        name: "cottage",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591347719/cottage_ptpxb2.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "box",
          },
          us: {
            value: "500",
            unit: "g",
          },
        },
      },
      {
        name: "egg",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "2",
            unit: "",
          },
        },
      },
      {
        name: "oregano",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591347719/oregano_jcwgtt.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "5",
            unit: "g",
          },
        },
      },
      {
        name: "water",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/water_ointth.jpg",
        amount: {
          metric: {
            value: "0.5",
            unit: "cup",
          },
          us: {
            value: "0.5",
            unit: "cup",
          },
        },
      },
      {
        name: "cheese",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591347718/chease_fpfrvj.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "box",
          },
          us: {
            value: "250",
            unit: "g",
          },
        },
      },
    ],
    Instuctions:
      "cook the noodles in the large pot of boiling water according to the package directions until al dente. mix the tomato, oregano and the water in one bowl. and mix the cottage, edd, pepper and salt in another bowl. in pyrex put layer of helf of the noodles, on this layer of helf tomato souce, layer of helf chease souce and layer of half box of the chease, and return on this again. put in the oven to 20 min",
  };
  var stringJson5 = JSON.stringify(myObject5);
  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (11,'${nameOr}', '${stringJson5}')`
  );

  var myObject6 = {
    id: "12",
    RecipeName: "Schnitzel",
    image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591349082/Schnitzel_d8zdbb.jpg",
    RecipeOwner: "Mother elian",
    Prepared: "Saturday lunch",
    vegan: "false",
    Vegetarian: "false",
    glutenFree: "false",
    servings: "2-4 serving",
    Ingredients: [
      {
        name: "chicken breasts",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348381/chicken_breasts_jfcxbx.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "kg",
          },
          us: {
            value: "2",
            unit: "kg",
          },
        },
      },
      {
        name: "white flour",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "0.5",
            unit: "cup",
          },
          us: {
            value: "50",
            unit: "g",
          },
        },
      },
      {
        name: "black pepper",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/peper_hk4if5.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "5",
            unit: "g",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "tsp",
          },
        },
      },
      {
        name: "bread crumbs",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591348315/bread_crumbs_znggkp.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "cup",
          },
          us: {
            value: "100",
            unit: "g",
          },
        },
      },
      {
        name: "egg",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "2",
            unit: "",
          },
        },
      },
      {
        name: "oil",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/oil_lc6mcc.jpg",
        amount: {
          metric: {
            value: "2-3",
            unit: "cup",
          },
          us: {
            value: "2-3",
            unit: "cup",
          },
        },
      },
    ],
    Instuctions:
      "Gather the ingredients. Put flour in a shallow bowl.Beat eggs in a second shallow bowl. Put bread crumbs in a shallow bowl. Dip chicken in flour, Then dip in eggs, Then dip in seasoned crumbs. Heat oil in a large frying pan over medium heat.Fry chicken in hot oil on both sides. Fry for 1 to 2 minutes per side or until golden brown.",
  };
  var stringJson6 = JSON.stringify(myObject6);
  await DButils.execQuery(
    `INSERT INTO dbo.FamilyRecipes VALUES (12,'${nameChen}', '${stringJson6}')`
  );
}

async function insertMyRecipe() {
  var nameChen = "chenshor";
  var nameOr = "orshosh";

  var myObject1 = {
    id: "4",
    title: "Butter Cookies",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591203426/butter-cookies_jnzxyq.jpg",
    readyInMinutes: "27 minutes",
    aggregateLikes: "5478",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "50 cookies",
    Ingredients: [
      {
        name: "flour",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "250",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "cup",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "butter",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/butter_fgymyy.jpg",
        amount: {
          metric: {
            value: "230",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "cup",
          },
        },
      },
      {
        name: "sugar",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/sugar_znlaci.jpg",
        amount: {
          metric: {
            value: "100",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "cup",
          },
        },
      },
      {
        name: "egg",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "2",
            unit: "",
          },
        },
      },
      {
        name: "vanilla extract",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/vanila_fnykym.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "ml",
          },
          us: {
            value: "1",
            unit: "teaspoon",
          },
        },
      },
    ],
    instructions:
      "Measure the flour, use a scale if possible but if you do not have one make sure to fluff your flour and spoon it into your measuring cup. Add the room temperature butter to the bowl of your stand mixer.Cream the butter and sugar together until lighter in color and fluffy in consistency.Add the egg yolks and mix until fully combined.Add the flour and mix until just incorporated.Roll the cookie dough into a log and wrap in parchment paper or plastic wrap. Chill for at least an hour. The dough can be frozen for two months or refrigerated for a week. If frozen transfer to refrigerator to thaw for a few hours before using.Roll the chilled dough in sanding sugar (optional). Cut into slices and bake until just turning golden at edge.",
  };

  var stringJson1 = JSON.stringify(myObject1);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (4,'${nameChen}', '${stringJson1}')`
  );

  var myObject2 = {
    id: "5",
    title: "FRENCH TOAST",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591203637/frenchtoast_tyxa11.jpg",
    readyInMinutes: "10 minutes",
    aggregateLikes: "26751",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "4",
    Ingredients: [
      {
        name: "egg",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "",
          },
          us: {
            value: "1",
            unit: "",
          },
        },
      },
      {
        name: "vanilla extract",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/vanila_fnykym.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "ml",
          },
          us: {
            value: "1",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "milk",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255744/milk_fkrvul.jpg",
        amount: {
          metric: {
            value: "50",
            unit: "ml",
          },
          us: {
            value: "0.5",
            unit: "cup",
          },
        },
      },
      {
        name: "bread",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/bread_hutnvl.jpg",
        amount: {
          metric: {
            value: "100",
            unit: "g",
          },
          us: {
            value: "4",
            unit: "slices",
          },
        },
      },
    ],
    instructions:
      "Beat egg, vanilla and cinnamon in shallow dish. Stir in milk., Dip bread in egg mixture, turning to coat both sides evenly., Cook bread slices on lightly greased nonstick griddle or skillet on medium heat until browned on both sides. Serve with Easy Spiced Syrup recipe follows, if desired.Add 1 teaspoon Vanilla Extract and 1/4 teaspoon stir well to mix. Serve warm, if desired.",
  };
  var stringJson2 = JSON.stringify(myObject2);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (5,'${nameChen}', '${stringJson2}')`
  );

  var myObject3 = {
    id: "6",
    title: "ALFAJORES",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591203853/alfajores_chen_c_jqn7wm.jpg",
    readyInMinutes: "80 minutes",
    aggregateLikes: "2672",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "40 cookies",
    Ingredients: [
      {
        name: "flour",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1",
            unit: "cup",
          },
        },
      },
      {
        name: "cornstarch",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/cornflur_zej6mw.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1.5",
            unit: "cup",
          },
        },
      },
      {
        name: "baking powder",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591353520/powder_unksol.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "baking soda",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591353520/powder_unksol.jpg",
        amount: {
          metric: {
            value: "0",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "butter",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/butter_fgymyy.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1.5",
            unit: "cup",
          },
        },
      },
      {
        name: "sugar",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/sugar_znlaci.jpg",
        amount: {
          metric: {
            value: "200",
            unit: "g",
          },
          us: {
            value: "1.5",
            unit: "cup",
          },
        },
      },
      {
        name: "eggs",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "",
          },
          us: {
            value: "3",
            unit: "",
          },
        },
      },
      {
        name: "vanilla extract",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/vanila_fnykym.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "2",
            unit: "teaspoon",
          },
        },
      },
      {
        name: "dulce de leche",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/dulce_zv0blk.jpg",
        amount: {
          metric: {
            value: "300",
            unit: "g",
          },
          us: {
            value: "1.5",
            unit: "cup",
          },
        },
      },
      {
        name: "shredded coconut",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/cucunat_dntof4.jpg",
        amount: {
          metric: {
            value: "100",
            unit: "g",
          },
          us: {
            value: "0.5",
            unit: "cup",
          },
        },
      },
    ],
    instructions:
      " In a medium bowl, sift together flour, cornstarch, baking powder, and baking soda. Set aside. In a mixer bowl fitted with the paddle attachment, beat butter, sugar, and lemon zest on medium speed until light and fluffy, about 3 minutes. Beat in egg yolks and vanilla extract just until combined. Reduce speed to low. Add the flour mixture and beat just until combined. Do not overmix or the cookies will turn out tough. Form the dough into a ball, then flatten slightly to form a disc. Wrap with plastic wrap and refrigerate for 1-2 hours, until firm enough to roll. If you do npt want to use the dough right away, you can refrigerate it for up to 3 days or freeze it for up to a month, then thaw it overnight in the fridge. Take the dough out of the fridge and Cut out into rounds. Preheat oven to 350F/180C. Bake for 7-10 minutes, or until cookies appear golden brown at the edges. Allow cookies to cool in the pan for 10 minutes, then gently transfer to a wire rack to cool completely.Spread the bottom half of the cookies with dulce de leche (about a teaspoon). Sandwich together with remaining cookies, pressing slightly so that the caramel oozes out the sides. Roll the sides in shredded coconut.",
  };
  var stringJson3 = JSON.stringify(myObject3);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (6,'${nameOr}', '${stringJson3}')`
  );

  var myObject4 = {
    id: "7",
    title: "Gnocchi",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591337780/gnocchi_sfegog.jpg",
    readyInMinutes: "29 mins",
    aggregateLikes: "28374",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "3-4",
    Ingredients: [
      {
        name: "flour",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "100",
            unit: "g",
          },
          us: {
            value: "2",
            unit: "cup",
          },
        },
      },
      {
        name: "potatoes",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/flour-449x267_lhg9rf.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "2",
            unit: "",
          },
        },
      },
      {
        name: "egg",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/eggs_odgkhc.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "2",
            unit: "",
          },
        },
      },
      {
        name: "salt",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339158/sult_lxm1fx.jpg",
        amount: {
          metric: {
            value: "5",
            unit: "g",
          },
          us: {
            value: "3/4",
            unit: "tsp",
          },
        },
      },
    ],

    instructions:
      "Peel the potatoes and chop into chunks,Prepare a pot of boiling water and cook the potatoes until soft, about 10 to 15 minutes. Drain well, then mash well.Combine egg replacer with mashed potato until well incorporated.place the mashed potatoes and sprinkle with salt, then add the flour to the potatoes a bit at a time, kneading to incorporate.Roll our dough into long snake shapes, about an inch thick. Cut into 1 inch long pieces and quickly roll across a forkAllow to cook for about 2 to 3 minutes. ",
  };
  var stringJson4 = JSON.stringify(myObject4);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (7, '${nameOr}', '${stringJson4}')`
  );

  var myObject5 = {
    id: "8",
    title: "Creamy Pasta and Tomato Sauce",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591339440/Creamy_Pasta_and_Tomato_Sauce_xjjnwz.webp",
    readyInMinutes: "20 mins",
    aggregateLikes: "10594",
    vegan: "false",
    Vegetarian: "true",
    glutenFree: "false",
    servings: "4 to 6 servings",
    Ingredients: [
      {
        name: "olive oil",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/oil_lc6mcc.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "tsp",
          },
          us: {
            value: "2",
            unit: "tsp",
          },
        },
      },
      {
        name: "butter",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591255488/butter_fgymyy.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "10",
            unit: "g",
          },
        },
      },
      {
        name: "tomato pasta sauce",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591340502/pasta_souce_tbhomv.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "jar",
          },
          us: {
            value: "26",
            unit: "ounce",
          },
        },
      },
      {
        name: "water",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591257792/water_ipo0xi.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "tpa",
          },
          us: {
            value: "3",
            unit: "tsp",
          },
        },
      },
      {
        name: "tomatoes ",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591340431/tometo_qywons.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "",
          },
          us: {
            value: "3",
            unit: "",
          },
        },
      },
      {
        name: "spaghetti",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591340382/spagety_qafwc7.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "package ",
          },
          us: {
            value: "1",
            unit: "package ",
          },
        },
      },
      {
        name: "cream cheese",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591340606/cream_pmncdd.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "package ",
          },
          us: {
            value: "25",
            unit: "ml ",
          },
        },
      },
      {
        name: "onion",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258732/onion_axetev.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "",
          },
          us: {
            value: "1",
            unit: "",
          },
        },
      },
    ],

    instructions:
      "cook the spaghetti in the large pot of boiling water according to the package directions until al dente.heat the olive oil and butter in a large skillet over medium heat. Add the onion and cook and stir until the onion is tender and just starts to brown around the edges, about 5 to 6 minutes.Add the pasta sauce to the onion mixture. Add the water to the empty jar, close and shake to loosen rest of pasta sauce and add to the skillet along with the undrained tomatoes. Bring to a simmer stirring frequently so the mixture does not burn on the bottom.add the cream cheese to the pasta sauce. Cook and stir.Drain the pasta and immediately add to the skillet with the sauce. ",
  };

  var stringJson5 = JSON.stringify(myObject5);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (8, '${nameChen}', '${stringJson5}')`
  );

  var myObject6 = {
    id: "9",
    title: "Grilled Salmon With Lemon and Dill",
    Image:
      "https://res.cloudinary.com/di0zdzniy/image/upload/v1591341636/Grilled_Salmon_With_Lemon_and_Dill_ggsffz.jpg",
    readyInMinutes: "20 mins",
    aggregateLikes: "20679",
    vegan: "false",
    Vegetarian: "false",
    glutenFree: "true",
    servings: "4 servings",
    Ingredients: [
      {
        name: "lemons juice",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591342370/lemon_cszdng.jpg",
        amount: {
          metric: {
            value: "2",
            unit: "",
          },
          us: {
            value: "20",
            unit: "ml",
          },
        },
      },
      {
        name: "lemon zest",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591342371/lemon_zets_qs4fpo.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tsp",
          },
          us: {
            value: "0.5",
            unit: "g",
          },
        },
      },
      {
        name: "oil",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591258172/oil_lc6mcc.jpg",
        amount: {
          metric: {
            value: "3",
            unit: "tsp",
          },
          us: {
            value: "10",
            unit: "ml",
          },
        },
      },
      {
        name: "fresh dill",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591342371/bill_wahi5w.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "tpa",
          },
          us: {
            value: "1",
            unit: "tsp",
          },
        },
      },
      {
        name: "garlic",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591342370/garllic_l4ulxs.jpg",
        amount: {
          metric: {
            value: "1",
            unit: "clove",
          },
          us: {
            value: "1",
            unit: "clove",
          },
        },
      },
      {
        name: "salmon fillet",
        image:
          "https://res.cloudinary.com/di0zdzniy/image/upload/v1591342370/sallmon_nrjpjz.jpg",
        amount: {
          metric: {
            value: "4",
            unit: "fillet ",
          },
          us: {
            value: "4",
            unit: "fillet ",
          },
        },
      },
    ],

    instructions:
      "Gather the ingredients. Place salmon in a shallow, nonreactive dish.In a separate bowl, combine marinade ingredients of lemon juice, lemon zest, vegetable oil, dill, and garlic. Stir to combine. If you do not have fresh dill, dried dill can be used.Pour marinade over salmon. Cover and refrigerate for 1 to 2 hours.Grill salmon directly over medium coals, basting with the marinade, for about 4 minutes on each side or until fish flakes easily.",
  };
  var stringJson6 = JSON.stringify(myObject6);
  await DButils.execQuery(
    `INSERT INTO dbo.MyRecipes VALUES (9, '${nameOr}', '${stringJson6}')`
  );
}

// router.get('/insert',  async(req, res) => {
//   try{
//       family.insertMyRecipe();
//       res.status(200);
//   }catch(error){
//       console.log('Catch an error: ', error);
//   }
// });

module.exports = { insertFamilyRecipe, insertMyRecipe };
