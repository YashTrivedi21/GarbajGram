const express = require('express');
const { getStores, addStore } = require('../controllers/stores');
const User = require("../models/user")
const passport = require('passport')
const localStrategy = require('passport-local')
const passportLocalMongoose = require('passport-local-mongoose')
const Store = require('../models/Store')
const router = express.Router();


router
  .route('/api/v1/stores')
  .get(getStores)
  .post(isLoggedIn ,addStore);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/login')
}

function auth(req, res, next) {
    if(req.isAuthenticated()) {
        Store.findById(req.params.id, (err, camp) => {
            if(err) res.redirect('/')
            if(camp.author.id.equals(req.user._id)) return next()
            else res.redirect('/')
        })
    } else res.redirect('/')
}
module.exports = router;
