const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const db = require("../db");
const DIST_DIR = path.join(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("../db/passport");

const app = express();
const port = process.env.PORT || 3000;

// SESSION
app.use(session({ secret: "omdb" }));
app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

//bodyparsing middleware
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//logger
app.use(morgan("tiny"));

app.use(express.static(DIST_DIR));

//use modular routes
app.use("/api", require("../routes/api"));

app.get("/*", (req, res) => {
  res.sendFile(HTML_FILE);
});

//sync database then start server
db.sync()
  .then(() => {
    console.log("Connected to database...");
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch(console.error); //error catcher
