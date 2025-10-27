const express = require("express");
const router = express.Router();


//GET Posts
router.get("/", (req, res) => {
    res.send("GET for Postss");
});

//GET Posts
router.get("/:id", (req, res) => {
    res.send("GET for Posts Id");
});

//POST Posts
router.post("/", (req, res) => {
    res.send("POST for Postss");
});

//DELETE Posts
router.delete("/:id", (req, res) => {
    res.send("DELETE for Postss");
});

module.exports = router;