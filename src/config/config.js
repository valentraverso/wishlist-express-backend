require("dotenv").config()

// Database
const PORT = process.env.PORT || 4000;
const DB_URI = process.env.MONG_URI;

module.exports = {
    PORT,
    DB_URI
}