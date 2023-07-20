const express = require("express");
const homeRoute = require("./home.route");

// Instance
const router = express.Router();

const routes = [
    {
        path: "/",
        route: homeRoute,
    }
];

routes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;