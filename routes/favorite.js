var express = require("express");
var router = express.Router();

var { Favorite } = require("../db/models/User");
const passport = require("../db/passport");

router.post("/", function(req, res, next) {
  let data = req.body;
  data.idUser = req.session.passport.user.id;

  console.log(data, "DATA BODY");
  Favorite.create(data)
    .then(user => {
      res.send(user);
    })
    .catch(err => console.log(err, "ERROR"));
});

router.get("/", function(req, res) {
  let Session = req.session.passport;
  let session = {
    id: Session ? Session.user.id : 0
  };

  Favorite.findAll({
    where: {
      idUser: session.id
    }
  }).then(result => {
    res.send(result);
  });
});

router.get("/:id/users", function(req, res) {
  let Session = req.params.id;
  let session = {
    id: Session ? req.params.id : 0
  };

  Favorite.findAll({
    where: {
      idUser: session.id
    }
  }).then(result => {
    res.send(result);
  });
});

router.get("/:id/delete", function(req, res) {
  let Session = req.session.passport;
  let session = {
    id: Session ? Session.user.id : 0
  };

  Favorite.destroy({
    where: {
      idUser: session.id,
      imdbID: req.params.id
    }
  });
  res.send("eliminado");
  // .then(result=>{
  //     res.send(result)
  // })
});

module.exports = router;
