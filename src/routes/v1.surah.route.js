const express = require("express");
const SurahControllerV1 = require("../controllers/v1.surah.controller");

// Instance
const router = express.Router();

router.get("/", SurahControllerV1.getSurahByQuery);

module.exports = router;