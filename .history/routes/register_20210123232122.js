const express = require('express');
const User = require("../models/user")
const passport = require('passport')

const router = express.Router();

router.get('/register', (req,res) =>   res.render('register'))

router.post('/register', (req,res) => {
    let username = req.body.username
    let password = req.body.password
    User.create({username: username, password: password}, (err, user) => {
        res.redirect('/')
        console.log(user)
    })
    // User.register(new User({username: req.body.username}), req.body.password, (err,user) => {
    //     if(err) {
    //         console.log(err)
    //         res.redirect('/register')
    //     } else {
    //         passport.authenticate('local')(req, res, () => res.redirect('/'))
    //     }
    // })
})

module.exports = router
