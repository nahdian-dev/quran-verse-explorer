const logger = require("../src/config/logger");

const config = require("./config/config");
const app = require("./app");

if (config.value.NODE_ENV !== "test") {
    app.listen(config.value.PORT, () => {
        logger.info(`Server are listening on port: ${config.value.NODE_ENV}`);
    });
}

process
    .on("unhandledRejection", (reason, p) => {
        logger.error(reason, "Unhandled Rejection at Promise", p);
    })
    .on("uncaughtException", (error) => {
        logger.error(error, "Uncaught Exception thrown");
        process.exit(1);
    });