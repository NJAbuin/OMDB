const crypto = require("crypto");
const Sequelize = require("sequelize");
const db = require("../index");

const Model = Sequelize.Model;

var User = db.define("user", {
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  salt: {
    type: Sequelize.STRING
  }
});

User.generateSalt = function() {
  return crypto.randomBytes(20).toString("hex");
};

User.prototype.encryptPassword = function(password) {
  return crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
};

User.prototype.validatePassword = function(password) {
  const hash = crypto
    .createHmac("sha1", this.salt)
    .update(password)
    .digest("hex");
  return this.password === hash;
};

User.addHook("beforeCreate", user => {
  user.salt = User.generateSalt();
  user.password = user.encryptPassword(user.password);
});

/// MODELO FAVORITOS
var Favorite = db.define("favorite", {
  idUser: {
    type: Sequelize.INTEGER
  },
  imdbID: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Poster: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Type: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

// MODELO HISTORY
var History = db.define("history", {
  idUserH: {
    type: Sequelize.INTEGER
  },
  textContent: {
    type: Sequelize.STRING,
    allowNull: false
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = { User, Favorite, History };
