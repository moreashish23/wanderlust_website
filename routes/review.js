const express = require("express");
const router = express.Router({ mergeParams: true });
const wrayAsync = require("../utils/wrapAsync");

const {validateReview, isLoggedIn, isReviewAuthor} = require("../routes/middleware")

const reviewController = require("../controllers/review")


//  Add Review
router.post("/", validateReview, isLoggedIn,wrayAsync(reviewController.createReview));

//  Delete Review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrayAsync(reviewController.destroyReview));

module.exports = router;
