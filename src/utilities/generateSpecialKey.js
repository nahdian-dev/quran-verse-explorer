const crypto = require("crypto");

function generateSpecialKey() {
    const randomString = crypto.randomBytes(8).toString("hex");
    const currentTime = new Date().getTime();

    const specialKey = `${currentTime}_${randomString}`;

    return specialKey;
}

module.exports = { generateSpecialKey };