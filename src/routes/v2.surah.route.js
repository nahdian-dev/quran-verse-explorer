const express = require("express");
const SurahControllerV2 = require("../controllers/v2.surah.controller");

// Instance
const router = express.Router();

router.get("/", SurahControllerV2.getSurahByQuery);

module.exports = router;