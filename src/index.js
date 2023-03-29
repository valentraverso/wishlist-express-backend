// Requires
const express = require("express");
const {
    PORT,
    DB_URI
} = require("./config/config");

const app = express();



app.listen(PORT, () => {
    console.log('Welcome to the server');
})