const express = require('express');
const User = require("../models/user")
const Store = require("../models/Store")

router.get('/leaderboard', function(req, res){
    S.find().then(function(doc){
        console.log(doc)
        res.send("Hello Bois!!!!!!")
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router