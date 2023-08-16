const express = require("express");
const cors = require("cors");

const routes = require("./routes");
const CustomApiError = require("./utilities/CustomApiError");
const { errorConverter, errorHandler } = require("./middlewares/error_handler.middleware");
const { morganHandlerError, morganHandlerSucces } = require("./config/morgan");

// Instance
const app = express();

// Body Parser
app.use(express.json());

//CORS
app.use(cors());

// Morgan
app.use(morganHandlerSucces);
app.use(morganHandlerError);

// Routes
app.use("/", routes);

// Error Handling
app.use((req, res, next) => {
    next(new CustomApiError(404, "Not found"));
});
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;