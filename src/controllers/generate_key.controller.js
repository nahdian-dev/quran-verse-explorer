const { v4: uuidv4 } = require("uuid");

const { generateSpecialKey } = require("../utilities/generateSpecialKey");
const { convertUUID } = require("../utilities/convertUUID");
const { checkExpiredTime } = require("../utilities/checkExpiredTime");

const sendMail = (req, res) => {
    // UUID
    const uid = uuidv4();
    const id = convertUUID("encode", uid);

    // SPECIAL KEY
    const specialKey = generateSpecialKey();

    // CHECK EXPIRED
    const accessTime = specialKey.split("_")[0];
    const isExpired = checkExpiredTime(accessTime);

    if (isExpired) {
        console.log("Expired");
    }

    return console.log(`link: baseurl/generate-key?id=${id}&sk=${specialKey}`);
};

sendMail();

module.exports = { generateSpecialKey };