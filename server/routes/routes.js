const express = require("express");
const signUpTemplateCopy = require("../models/SignUpModels");

const router = express.Router();

router.post("/sign-up", (req, res) => {
    const signUpUser = new signUpTemplateCopy({
        fullName: req.body.fullName,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    signUpUser.save().then(data => {
        res.json(data)
    }).catch(error => {
        res.json(error)
    })
})

module.exports = router;
