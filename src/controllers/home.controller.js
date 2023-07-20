const config = require("../config/config");

const endpoints = [
    {
        description: "API Mencari Surah Berdasarkan Optional Parameter yang Diizinkan",
        parameter: [
            "translation",
            "revelation",
            "verse",
            "verse_less_than",
            "verse_more_than",
            "number_of_surah"
        ],
        example: `${config.value.BASE_URL}/surah?translation=pembukaan&revelation=makkiyah&verse=7`
    }
];

// @desc Halaman Utama
// @route GET - http://localhost:5000,
// @access public
const home = (req, res) => {
    res.json({
        endpoints,
        maintainer: "Nahdian - nahdian.dev@gmail.com",
        source: "https://github.com/nahdian-dev/quran-verse-explorer.git",
    });
};

module.exports = { home };