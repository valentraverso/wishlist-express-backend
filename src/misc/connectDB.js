const mongoose = require("mongoose")

function connectDB(port, db){
    mongoose.connect(db)
        .then(() => {
            console.log(
                `|--- Connected in the wishlist server ---|
                PORT: ${port}`
            )
        })
        .catch(err => {
            throw new Error(err)
        })
}

module.exports = {
    connectDB
}