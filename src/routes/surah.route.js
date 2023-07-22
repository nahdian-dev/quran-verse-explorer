const express = require("express");
const SurahController = require("../controllers/surah.controller");

// Instance
const router = express.Router();

router.get("/", SurahController.surah);

module.exports = router;