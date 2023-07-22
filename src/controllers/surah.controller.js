const surahServices = require("../services/surah.services");
const _ = require("lodash");

// @desc Surah
// @route GET - http://localhost:5000/surah,
// @access public
const getSurahByQuery = (req, res) => {
    const queryObj = Object.entries(req.query).length;

    if (queryObj === 0) {
        return res.send("ALL SURAH");
    }

    const keysQuery = Object.keys(req.query);
    const allowedQuery = ["t", "r"];
    const differentArray = _.difference(keysQuery, allowedQuery);
    const isContainingValue = differentArray.length === 0;

    if (!isContainingValue) {
        return res.send("Not found parameters");
    }

    const getSurahByQuery = surahServices.getSurahByQuery();
    return res.send(getSurahByQuery);
};

module.exports = { getSurahByQuery };