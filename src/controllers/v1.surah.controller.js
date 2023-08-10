const _ = require("lodash");

const surahServicesV1 = require("../services/v1.surah.services");
const quran = require("../data/quran-api-id.json");
const CustomApiError = require("../utilities/CustomApiError");

// @desc Surah
// @route GET - http://localhost:5000/surah,
// @access public
/* eslint-disable no-unused-vars */
const getSurahByQuery = (req, res) => {
    const queryObj = Object.entries(req.query).length;

    if (queryObj === 0) {
        const listSurah = quran.map(({ ayahs, bismillah, audio, ...rest }) => rest);
        return res.send(listSurah);
    }

    // CHECK PARAMETER
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

    const getSurahByQuery = surahServicesV1.getSurahByQuery(req.query.t, req.query.r, req.query.v);

    if (getSurahByQuery.length === 0) {
        throw new CustomApiError(404, "Could't found surah!");
    }

    return res.send(getSurahByQuery);
};

module.exports = { getSurahByQuery };