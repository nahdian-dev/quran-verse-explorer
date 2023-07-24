const _ = require("lodash");

const surahServices = require("../services/surah.services");

// @desc Surah
// @route GET - http://localhost:5000/surah,
// @access public
const getSurahByQuery = (req, res) => {
    const queryObj = Object.entries(req.query).length;

    if (queryObj === 0) {
        return res.send("ALL SURAH");
    }

    const keysQuery = Object.keys(req.query);
    const allowedQuery = ["t", "r", "v"];
    const differentArray = _.difference(keysQuery, allowedQuery);
    const isContainingValue = differentArray.length === 0;

    if (!isContainingValue) {
        return res.send("Parameter is not available, check the allowed parameters again in the main menu!");
    }

    const hasDuplicates = _.some(req.query, _.isArray);
    if (hasDuplicates) {
        return res.send("Parameter is duplicate!");
    }

    const getSurahByQuery = surahServices.getSurahByQuery(req.query.t, req.query.r, req.query.v);
    return res.send(getSurahByQuery);
};

module.exports = { getSurahByQuery };