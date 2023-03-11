const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now,
    },
    games: [{
    }]
});

module.exports = mongoose.model("User", UserSchema);


