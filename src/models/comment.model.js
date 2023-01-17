const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CommentSchema = new Schema({
    name: {
        type: String,
    },
    comment: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = Comment = mongoose.model("comment", CommentSchema);