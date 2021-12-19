const express = require("express");
const bodyParser = require("body-parser");
const controller = require("../controllers/userController");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: false }));
const jwtAuth = (req, res, next) => {
  let token = req.headers.authorization;
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRATE_KEY, function (err, decoded) {
    if (err) {
      res.send({ message: "Invalid token" });
    } else {
      next();
    }
  });
};

router.post("/sign-up", controller.createUser);
router.post("/login", controller.login);
router.get("/usersList", jwtAuth, controller.getUser);

module.exports = router;
