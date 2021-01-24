const express = require('express');
const { getUsers} = require('../controllers/users');
const User = require("../models/user")
const router = express.Router();
router
  .route('/api/v1/users')
  .get(getUsers)

router.get('/leaderboard', function(req, res){
    User.find().then(function(doc){
        console.log(typeof(doc))
        res.render("leaderboard", {users: doc})
    }).catch((err) => {
        console.log(err)
    })
});

module.exports = router