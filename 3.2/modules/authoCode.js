const axios = require("axios"); // supports promises

var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("./DButils");


async function checkCookie(id){
    const users = await DButils.execQuery("SELECT user_id FROM dbo.users");
    if (!users.find((x) => x.user_id === id)){
        return null;
    } else{
        const user = (
            await DButils.execQuery(
              `SELECT * FROM dbo.users WHERE user_id = '${id}'`
            )
          )[0];
          return user;
    }
}

module.exports={checkCookie};