const express = require('express');
const router = express.Router();
const wrapAsync = require('../utils/wrapAsync.js');
const {isLoggedIn, validateListing, isOwner} = require('../middleware.js');
const multer  = require('multer');
const {storage} = require('./../cloudConfig.js');
const upload = multer({ storage: storage });

const ListingController = require('./../controllers/listings.js');

router.route("/")
.get(wrapAsync(ListingController.index))
.post(isLoggedIn, upload.single('listing[image]'), validateListing,  wrapAsync(ListingController.addListing));

// New Route -> above show route else will,be think of as id = new .
router.get("/new",isLoggedIn,(req,res)=>{
    res.render("listings/new.ejs");
});

router.route("/filter/:category")
.get(wrapAsync(ListingController.showFilter));

router.route("/search")
.get(wrapAsync(ListingController.searchFilter));

router.route("/:id")
.get(wrapAsync(ListingController.showListings))
.put(upload.single('listing[image]'), validateListing, wrapAsync(ListingController.updateListing))
.delete(isOwner, wrapAsync(ListingController.destroyListing));

router.get("/:id/edit", isOwner, isLoggedIn, wrapAsync(ListingController.editListing));

module.exports = router;