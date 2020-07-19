var express = require("express");
var router = express.Router(); //make a router to user
const DButils = require("../modules/DButils");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  try {
    const users = await DButils.execQuery("SELECT username FROM dbo.users");

    if (users.find((x) => x.username === req.body.username))
      throw { status: 409, message: "Username taken" };

    // add the new username
    let hash_password = bcrypt.hashSync(
      req.body.password,
      parseInt(process.env.bcrypt_saltRounds)
    );
    await DButils.execQuery(
      `INSERT INTO dbo.users VALUES (default, '${req.body.username}', '${hash_password}','${req.body.firstName}','${req.body.lastName}'
        ,'${req.body.country}','${req.body.email}','${req.body.image}')`
    );
    res.status(201).send({ message: "user created", success: true });
  } catch (error) {
    res.status(409).send({ message: "Username taken", success: false });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const users = await DButils.execQuery("SELECT username FROM dbo.users");
    if (!users.find((x) => x.username === req.body.username))
      throw { status: 401, message: "Username or Password incorrect" };

    const user = (
      await DButils.execQuery(
        `SELECT * FROM dbo.users WHERE username = '${req.body.username}'`
      )
    )[0];

    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throw { status: 401, message: "Username or Password incorrect" };
    }

    req.session.user_id = user.user_id;

    res.status(200).send({ message: "login succeeded", success: true });
  } catch (error) {
    res
      .status(401)
      .send({ message: "Username or Password incorrect", success: false });
  }
});

router.post("/logout", function (req, res) {
  req.session = null;
  res.status(204).send({ success: true, message: "logout succeeded" });
});

module.exports = router;
