const config = require("../config/config");

const endpoints = [
    {
        description: "API Mencari Surah Berdasarkan Optional Parameter yang Diizinkan",
        parameter: [
            "t",
            "r",
            "v"
        ],
        description_paramter: [
            "t = untuk mencari surah berdasarkan translation/arti",
            "r = untuk mencari surah berdasarkan revelation/diturunkan (hanya string: makkiyah, madaniyah)",
            "v = untuk mencari surah berdasarkan jumlah ayat",
            "tanpa parameter = menampilkan data surah Al-Quran"
        ],
        example: `${config.value.BASE_URL}/surah?t=pembukaan&r=makkiyah&v=7`
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