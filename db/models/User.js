const Sequelize = require("sequelize");
const db = require("../index");

const Model = Sequelize.Model;

class User extends Model {}
User.init(
  {
    email: {
      type: Sequelize.STRING,
      allowNUll: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    sequelize: db,
    modelName: "user"
  }
);

module.exports = User;
