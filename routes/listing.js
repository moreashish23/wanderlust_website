const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError");
const wrapAsync = require("../utils/wrapAsync");
const flash = require("connect-flash");
const {isLoggedIn} = require("./middleware.js");

// ✅ Middleware for validation
const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errMsg = error.details.map(el => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// 🏡 INDEX Route → show all listings
router.get("/", wrapAsync(async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
}));

// ➕ NEW Route → show form to create a new listing
router.get("/new", isLoggedIn, (req, res) => {
  res.render("listings/new.ejs");
});

// ✅ CREATE Route → handle new listing form submission
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  req.flash("success", "New Listing Created!");
  console.log("✅ New listing saved:", newListing);
  res.redirect(`/listings`);
}));

// 👁️ SHOW Route → show details of one listing
router.get("/:id", wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id).populate("reviews");
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings"); // ✅ Added return to prevent double response
  }
  res.render("listings/show.ejs", { listing });
}));

// ✏️ EDIT Route → show edit form
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
}));

// 🔁 UPDATE Route → handle form submission for edit
router.put("/:id", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    return res.redirect("/listings"); // ✅ Added return to prevent second response
  }
  console.log("✅ Listing updated:", id);
  req.flash("success", "Updated Listing!");
  res.redirect(`/listings/${id}`);
}));

// ❌ DELETE Route → delete listing
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  console.log("❌ Listing deleted:", id);
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
}));

module.exports = router;
