const express = require('express');
const User = require("../models/user")
const passport = require('passport')

const router = express.Router();


router.get('/login', (req,res) => {
    req.flash('success', 'logged in!!!')
    res.render('login')
})

router.post('/login',passport.authenticate('local', {
    successRedirect: 'http://localhost:5000/new',
    failureRedirect: 'http://localhost:5000/new'
}), (req,res) => {
    let username = req.body.username
    let password = req.body.password
    User.create({username: username, password: password})
    req.flash('success', 'logged in!!!')

})

module.exports = router