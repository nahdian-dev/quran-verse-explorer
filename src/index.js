const config = require("./config/config");
const app = require("./app");

const server = app.listen(config.value.PORT, () => {
    console.log(`- Server are listening on port: ${config.value.PORT}`);
});

const exitHandler = () => {
    if (server) {
        server.close(() => {
            process.exit(1);
        });
    } else {
        process.exit(1);
    }
};

const unexpectedErrorHandler = () => {
    exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
    if (server) {
        server.close();
    }
});

module.exports = server;