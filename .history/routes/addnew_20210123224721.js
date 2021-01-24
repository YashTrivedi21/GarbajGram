const express = require('express');
const User = require("../models/user")
const passport = require('passport')
const {render} = require("ejs");

const router = express.Router();

router.get('/new', isLoggedIn, (req,res) => {
    res.render('add')
})


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/login')
}
module.exports = router