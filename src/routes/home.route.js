const express = require("express");
const Homecontroller = require("../controllers/home.controller");

// Instance
const router = express.Router();

router.get("/", Homecontroller.home);

module.exports = router;