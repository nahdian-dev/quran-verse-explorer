/* eslint-disable no-unused-vars */
const quran = require("../data/quran-api-id.json");

exports.getSurahByQuery = (t, q) => {
    // t = (typeof t !== "undefined") ? t : "";

    const listSurah = quran.map(({ ayahs, bismilllah, ...rest }) => rest);
    const listTranslation = quran.map(({ ayahs, bismilllah, ...rest }) => rest.translation);

    console.log(q);

    return listTranslation;
};