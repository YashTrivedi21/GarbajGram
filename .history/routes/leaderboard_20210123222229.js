const express = require('express');
const User = require("../models/user")

router.get('/leaderboard', function(req, res){
    User.find().then(function(doc){
        console.log(doc)
    }).catch(function(err) )
});

module.exports = router