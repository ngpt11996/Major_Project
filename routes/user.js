const express = require('express');
const router = express.Router();
const passport = require('passport');
const { saveRedirectUrl } = require('../middleware.js');
const ReviewController = require('./../controllers/user.js');

router.route("/signup")
.get(ReviewController.renderSignup)
.post(ReviewController.signup);

router.route("/login")
.get((req,res)=>{
    res.render('users/login.ejs');
})
.post(saveRedirectUrl, passport.authenticate('local', 
{ failureRedirect: '/login', failureFlash: true}) ,ReviewController.login);

router.get("/logout", ReviewController.logout);

module.exports = router;