function checkExpiredTime(time) {
    let now = new Date();
    let accessTime = new Date(time);

    const expired = accessTime.setHours(accessTime.getHours() + 2);

    if (expired < now) {
        return true;
    } else {
        return false;
    }
}

module.exports = { checkExpiredTime };