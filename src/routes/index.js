const express = require("express");
const homeRoute = require("./home.route");
const surahRoute = require("./v1.surah.route");

// Instance
const router = express.Router();

const routes = [
    {
        path: "/",
        route: homeRoute,
    },
    {
        path: "/v1/surah",
        route: surahRoute,
    }
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;