const express = require('express');
const router = express.Router();
const Campground = require("../models/Store");
const sanitizer = require('express-sanitizer')


router.get('/campgrounds', (req,res) => {
    Campground.find({}, (err,campgrounds) => {
        if (!err) {
            res.render('campgrounds',{title:"EHC!",campgrounds:campgrounds, user : req.user})
        } else console.log(err)
    })
})

router.post('/campgrounds', isLoggedIn, (req,res) => {
    let name = req.body.name
    let image = req.body.image
    let description = req.body.description
    let author = {
        id: req.user._id,
        username: req.user.username
    }
    let newCamp = {name : name, image : image, description : description, author : author}
    Campground.create(newCamp, (err,camp) => {
        if(!err){
            console.log("new campground added",camp)
            res.redirect('/campgrounds')
        }  else console.log(err)
    })
})