const express = require("express");
const router = express.Router();


//GET User
router.get("/", (req, res) => {
    res.send("GET for users");
});

//GET User
router.get("/:id", (req, res) => {
    res.send("GET for user Id");
});

//POST User
router.post("/", (req, res) => {
    res.send("POST for users");
});

//DELETE User
router.delete("/:id", (req, res) => {
    res.send("DELETE for users");
});

module.exports = router;