const express = require('express');
const User = require("../models/user")
const passport = require('passport')

const router = express.Router();


router.get('/login', (req,res) => {
    req.flash('success', 'logged in!!!')
    res.render('login')
})

router.post('/login',passport.authenticate('local', {
    successRedirect: 'http://localhost:5000/',
    failureRedirect: '/login'
}), (req,res) => {
    req.flash('success', 'logged in!!!')

})

module.exports = router