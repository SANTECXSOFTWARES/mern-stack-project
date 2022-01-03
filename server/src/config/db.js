const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log("Data base connected...")
});

module.exports = mongoose;