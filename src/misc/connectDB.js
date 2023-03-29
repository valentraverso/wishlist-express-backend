const mongoose = require("mongoose")

function connectDB(app, port, db){
    mongoose.connect(db)
        .then(() => {
            app.listen(port, () => {
                console.log(`|--- Connected in the wishlist server ---|
                PORT: ${port}`)
            })
        })
        .catch(err => {
            console.error(`Server connect failed`);
            new Error(err);
        })
}

module.exports = {
    connectDB
}