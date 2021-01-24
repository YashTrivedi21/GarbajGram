const express = require('express');
const router = express.Router();
const Store = require("../models/Store");
const sanitizer = require('express-sanitizer')

router.get('/', (req, res) => {
    Store.find({}, (err,stores) => {
        console.log(stores)
        if (!err) {
            res.render('index')
        } else console.log(err)
    })
    res.render("index")
})

router.get('/store', (req,res) => {
    Store.find({}, (err,stores) => {
        console.log(stores)
        if (!err) {
            res.render('index')
        } else console.log(err)
    })
})

router.post('/store', isLoggedIn, (req,res) => {
    let address = req.body.address
    let storeId = req.body.uid
    let author = {
        id: req.user._id,
        username: req.user.username
    }
    let newStore = {address : address, storeId : storeId, author : author}
    Store.create(newStore, (err,camp) => {
        if(!err){
            console.log("new store added",camp)
            res.redirect('/store')
        }  else console.log(err)
    })
})


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next()
    res.redirect('/login')
}

module.exports = router