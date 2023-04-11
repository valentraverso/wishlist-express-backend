// Requires
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const {connectDB} = require("./misc/connectDB")
const {taskRoute} = require("./routes")
const {
    PORT,
    DB_URI
} = require("./config/config");
const jwtCheck = require("./misc/authz")

app.use(cors());
app.use(express.json())
app.use(helmet());
app.use(jwtCheck)

connectDB(app, PORT, DB_URI);

app.use('/task', taskRoute);