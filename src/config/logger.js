const winston = require("winston");

const config = require("./config");

const logger = winston.createLogger({
    level: config.value.NODE_ENV === "development" ? "debug" : "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} - ${level} - ${message}`;
        }),
    ),
    transports: [
        new winston.transports.Console(),
    ],
});

module.exports = logger;