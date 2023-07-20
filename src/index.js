const express = require("express");
require("dotenv").config();

const config = require("./config/config");

// Instance
const app = express();

app.listen(config.value.PORT, () => {
    console.log(`- Server are listening on port: ${config.value.PORT}`);
});