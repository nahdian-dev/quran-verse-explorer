const express = require("express");
const cors = require("cors");

const config = require("./config/config");
const routes = require("./routes");
const CustomApiError = require("./utilities/CustomApiError");
const { errorConverter, errorHandler } = require("./middlewares/error_handler.middleware");

// Instance
const app = express();

// Body Parser
app.use(express.json());

//CORS
app.use(cors());

// Routes
app.use("/", routes);

// Error Handling
app.use((req, res, next) => {
    next(new CustomApiError(404, "Not found"));
});
app.use(errorConverter);
app.use(errorHandler);

app.listen(config.value.PORT, () => {
    console.log(`- Server are listening on port: ${config.value.PORT}`);
});