const express = require("express");
const GenerateKey = require("../controllers/generate_key.controller");

// Instance
const router = express.Router();

router.get("/special-key", GenerateKey.generateSpecialKey);

router.get("/:special-key");

module.exports = router;