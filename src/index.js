// Requires
const express = require("express");
const app = express();
const helmet = require("helmet");
const {connectDB} = require("./misc/connectDB")
const {taskRoute} = require("./routes")
const {
    PORT,
    DB_URI
} = require("./config/config");


app.use(express.json())
app.use(helmet());

connectDB(app, PORT, DB_URI);

app.use('/task', taskRoute);