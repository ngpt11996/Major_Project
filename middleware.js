const Listing = require("./models/listing");
const expenseError = require('./utils/ExpenseError.js');
const {reviewSchema} = require('./schema.js');
const {listingSchema} = require('./schema.js');
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req,res,next) =>{
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create Listing..");
        return res.redirect('/login');
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) =>{
    console.log(req);
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.validateListing = (req,res,next) =>{
    console.log(req.body);
    let {error} = listingSchema.validate(req.body);
    console.log(error);
    if(error){
        let errorMsg = error.details.map((el)=> el.message).join(",");
        throw new expenseError(400,errorMsg);
    }else{
        next();
    }
};

module.exports.validateReview = (req,res,next) =>{
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errorMsg = error.details.map((el)=> el.message).join(",");
        throw new expenseError(400,errorMsg);
    }else{
        next();
    }
};

module.exports.isOwner = async (req,res,next) =>{
    console.log(req.body);
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(res.locals.currUser && !res.locals.currUser._id.equals(listing.owner._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.isReviewAuthor = async (req,res,next) =>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};