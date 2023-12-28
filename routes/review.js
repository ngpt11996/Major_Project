const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require('../utils/wrapAsync.js');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware.js');
const ReviewController = require('./../controllers/review.js');

router.post('/', isLoggedIn, validateReview, wrapAsync(ReviewController.addReview));


router.delete('/:reviewId',isLoggedIn, isReviewAuthor, wrapAsync(ReviewController.deleteReview));

// app.get("/testListings",async (req,res)=>{
//     //creating document
//     let sampleListing = new Listing({
//         title: "My new Villa",
//         description: "By the nature",
//         price: 1200,
//         location: "Calangute, Goa",
//         country: "India"
//     });
//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successful testing..");
// });

module.exports = router;