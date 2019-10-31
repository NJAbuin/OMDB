const api = require("express").Router();
const { User } = require("../db/models/User");
const passport = require("passport");

//DELETE THIS ROUTES BEFORE DEPLOYING/////////////////
//EDIT THE SEED TO SUIT YOUR MODEL REQUIREMENTS
api.get("/seed", (req, res) => {
  User.bulkCreate([
    {
      firstName: "Pepe",
      age: 23
    },
    {
      firstName: "Caro",
      age: 23
    },
    {
      firstName: "Fede",
      age: 36
    }
  ])
    .then(data => res.json(data))
    .catch(err => console.log(`Failed to seed db :: ERROR: ${err}`));
});

api.get("/destroydb", (req, res) => {
  User.destroy({ where: {} })
    .then(data => res.redirect("/"))
    .catch(err => err => console.log(`Failed to destroy db :: ERROR: ${err}`));
});

//////////////////////////////////////////////////////////

api.post("/register", function(req, res, next) {
  User.create(req.body)
    .then(user => {
      res.send(user);
    })
    .catch(err => console.log(err, "ERROR"));
});

api.get("/logout", function(req, res) {
  req.logout();
  res.send(200);
});

api.get("/users", (req, res) => {
  User.findAll({})
    .then(data => {
      res.json(data);
    })
    .catch(err => console.log("Failed to retrieve users at /api/users"));
});

api.post("/login", passport.authenticate("local"), function(req, res, next) {
  res.send(req.user);
});

api.get("/isLogin", function(req, res) {
  console.log("USER");
  console.log(req.user);
  res.send(req.user);
});

api.get("/signout", function(req, res) {
  req.session.destroy();
  res.send("Deslogueado..");
});

module.exports = api;
