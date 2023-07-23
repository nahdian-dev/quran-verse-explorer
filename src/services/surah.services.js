const _ = require("lodash");

const quran = require("../data/quran-api-id.json");
const CustomApiError = require("../utilities/CustomApiError");

/* eslint-disable no-unused-vars */
exports.getSurahByQuery = (t, r, v) => {
    t = (typeof t === "undefined") ? "" : t;
    r = (typeof r === "undefined") ? "" : r;
    v = (typeof v === "undefined") ? "" : v;

    const listSurah = quran.map(({ ayahs, bismillah, ...rest }) => rest);

    let result = [];

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

    const values = [];
    const mergeIndex = [];
    mergeIndex.push(indexOfTranslation, listIndexOfRevelation, listIndexOfVerse);
    mergeIndex.forEach((element, index) => {
        if (element.length !== 0) {
            values.push(element);
        }
    });

    const commonValues = _.intersection(...values);
    commonValues.forEach((element) => {
        result.push(listSurah[element]);
    });

    return result;
};