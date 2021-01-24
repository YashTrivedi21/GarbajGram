const express = require('express');
const { getUsers} = require('../controllers/users');
const User = require("../models/user")

const router = express.Router();

router.get('/leaderboard', function(req, res){
    Store.find().then(function(doc){
        console.log(doc)
        res.send("yay")
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router