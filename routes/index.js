const router = require("express").Router();

const User = require("../db/models/User");
const favorite = require("./favorite");

const passport = require("../db/passport");

module.exports = router;
