const _ = require("lodash");

const quran = require("../data/quran-api-id.json");
const CustomApiError = require("../utilities/CustomApiError");

/* eslint-disable no-unused-vars */
exports.getSurahByQuery = (t, r, v) => {
    t = (typeof t === "undefined") ? "" : t;
    r = (typeof r === "undefined") ? "" : r;
    v = (typeof v === "undefined") ? "" : v;

    const listSurah = quran.map(({ ayahs, bismillah, audio, ...rest }) => rest);

    let indexOfTranslation = [];
    let listIndexOfRevelation = [];
    let listIndexOfVerse = [];

    listSurah.forEach((element, index) => {
        if (element.translation.toLowerCase() === t.toLowerCase()) {
            indexOfTranslation.push(index);
        }
        if (element.revelation.toLowerCase() === r.toLowerCase()) {
            listIndexOfRevelation.push(index);
        }
        if (element.numberOfAyahs === parseInt(v)) {
            listIndexOfVerse.push(index);
        }
    });

    function notFoundSurah(t, r, v) {
        if (t !== "" && indexOfTranslation.length === 0) {
            throw new CustomApiError(404, "Could't found surah!");
        }
        if (r !== "" && listIndexOfRevelation.length === 0) {
            throw new CustomApiError(404, "Could't found surah!");
        }
        if (v !== "" && listIndexOfVerse.length === 0) {
            throw new CustomApiError(404, "Could't found surah!");
        }
    }
    notFoundSurah(t, r, v);

    const values = [];
    const mergeIndex = [];
    mergeIndex.push(indexOfTranslation, listIndexOfRevelation, listIndexOfVerse);
    mergeIndex.forEach((element) => {
        if (element.length !== 0) {
            values.push(element);
        }
    });

    let result = [];
    const commonValues = _.intersection(...values);
    commonValues.forEach((element) => {
        result.push(listSurah[element]);
    });

    return result;
};