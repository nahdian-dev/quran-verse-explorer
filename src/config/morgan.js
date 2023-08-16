const morgan = require("morgan");

const config = require("./config");
const logger = require("./logger");

const morganFormat = config.value.NODE_ENV === "production" ? "combined" : "dev";

const morganHandlerSucces = morgan(morganFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: {
        write: (m) => logger.info(m.trim())
    }
});

const morganHandlerError = morgan(morganFormat, {
    skip: (req, res) => res.statusCode < 400,

    stream: {
        write: (m) => logger.error(m.trim())
    }
});

module.exports = { morganHandlerError, morganHandlerSucces };