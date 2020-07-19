const express = require("express");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const session = require("client-sessions");

const auth = require("./routes/auth");
const users = require("./routes/users");
const recipes = require("./routes/recipes");

const app = express();
const port = process.env.PORT || 3000;

const corsConfig = {
  origin: true,
  credentials: true,
};
const cors = require("cors");
app.use(cors(corsConfig));
app.options("*", cors(corsConfig));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(
  session({
    cookieName: "session",
    secret: process.env.COOKIE_SECRET,
    Expires: 20 * 60 * 1000,
    activeDuration: 20,
    cookie:{
      httpOnly: false,
      ephemeral: false
    }
  })
  
);

app.get("/alive", (req, res) => {
  res.send("i'm alive");
});

app.use("/users", users);
app.use("/recipes", recipes);
app.use(auth);

app.use((req, res) => {
  res.sendStatus(404);
});

const server = app.listen(port, () => {
  console.log(`Server listen on port ${port}`);
});

process.on("SIGINT", function () {
  if (server) {
    server.close(() => console.log("server closed"));
  }
  process.exit();
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || "internal server error",
    },
  });
});
