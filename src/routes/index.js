const express = require("express");
const homeRoute = require("./home.route");
const surahRouteV1 = require("./v1.surah.route");
const surahRouteV2 = require("./v2.surah.route");
const generateKey = require("./generate_key.route");

// Instance
const router = express.Router();

const routes = [
    {
        path: "/",
        route: homeRoute,
    },
    {
        path: "/v1/surah",
        route: surahRouteV1,
    },
    {
        path: "/generate-key",
        route: generateKey,
    },
    {
        path: "/v2/surah",
        route: surahRouteV2,
    }
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;