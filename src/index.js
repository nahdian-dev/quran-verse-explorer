const express = require("express");
const cors = require("cors");

const config = require("./config/config");
const routes = require("./routes");

// Instance
const app = express();

// Body Parser
app.use(express.json());

//CORS
app.use(cors());

app.use("/", routes);

app.listen(config.value.PORT, () => {
    console.log(`- Server are listening on port: ${config.value.PORT}`);
});