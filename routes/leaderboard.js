const express = require('express');
const User = require("../models/user")
const Store = require("../models/Store")

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