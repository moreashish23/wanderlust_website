const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");

const {isLoggedIn, isOwner, validateListing} = require("../routes/middleware");

const listingController = require("../controllers/listing");

const multer = require("multer");
const{storage} = require("../cloudConfig");
const upload = multer({storage});

router.route("/")
     //  INDEX Route → show all listings
    .get(wrapAsync(listingController.index))
    //  CREATE Route → handle new listing form submission
    .post(isLoggedIn, validateListing, upload.single("listing[image]"),wrapAsync(listingController.createListing))


//  NEW Route → show form to create a new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
     // SHOW Route → show details of one listing
    .get(wrapAsync(listingController.showListings))
    //  UPDATE Route → handle form submission for edit
    .put(isLoggedIn, isOwner, validateListing, upload.single("listing[image]"),wrapAsync(listingController.updateListing))
    //  DELETE Route → delete listing
    .delete(isLoggedIn, isOwner,wrapAsync(listingController.destroyListing))

// EDIT Route → show edit form
router.get("/:id/edit", isLoggedIn, isOwner,wrapAsync(listingController.editForm));

module.exports = router;
