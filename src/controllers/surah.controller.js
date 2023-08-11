const _ = require("lodash");

const quran = require("../data/quran-api-id.json");
const surahServices = require("../services/surah.services");
const CustomApiError = require("../utilities/CustomApiError");

// @desc Surah
// @route GET - http://localhost:5000/surah,
// @access public
/* eslint-disable no-unused-vars */
const getSurah = (req, res) => {
    // CHECK IF PARAMETER IS NOT EXIST RETURN ALL SURAH
    const queryObj = Object.entries(req.query).length;
    if (queryObj === 0) {
        const listSurah = quran.map(({ ayahs, bismillah, audio, ...rest }) => rest);
        return res.send(listSurah);
    }

    // CHECK ALLOWED PARAMETER
    const keysQuery = Object.keys(req.query);
    const allowedQuery = ["t", "r", "v"];
    const differentArray = _.difference(keysQuery, allowedQuery);
    const isContainingParam = differentArray.length === 0;
    if (!isContainingParam) {
        return res.send("Parameter is not available, check the allowed parameters again in the main menu!");
    }

    // CHECK DUPLICATE PARAMETER
    const hasDuplicates = _.some(req.query, _.isArray);
    if (hasDuplicates) {
        return res.send("Parameter is duplicate!");
    }

    // GET SURAH BY PARAMETER
    const surahResult = surahServices.getSurahByQuery(req.query.t, req.query.r, req.query.v);
    if (surahResult.length === 0) {
        throw new CustomApiError(404, "Could't found surah!");
    }

    return res.send(surahResult);
};

module.exports = { getSurah };