const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const profileRoutes =
require("./routes/profileRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use("/api", profileRoutes);

module.exports = app;