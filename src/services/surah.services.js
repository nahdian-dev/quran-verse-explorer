const _ = require("lodash");

const quran = require("../data/quran-api-id.json");
const CustomApiError = require("../utilities/CustomApiError");

/* eslint-disable no-unused-vars */
exports.getSurahByQuery = (t, q) => {
    const listSurah = quran.map(({ ayahs, bismilllah, ...rest }) => rest);
    const listTranslation = quran.map(({ ayahs, bismilllah, ...rest }) => rest.translation);

    let indexOfTranslation;

    listTranslation.forEach((element, index) => {
        if (element.toLowerCase() === t.toLowerCase()) {
            indexOfTranslation = index;
        }
    });

    if ((typeof indexOfTranslation == "undefined")) {
        throw new CustomApiError(404, "Could't found surah!");
    }

    return listSurah[indexOfTranslation];
};