const mongoose = require("mongoose")

//   create schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//  create & export collection
module.exports = mongoose.model("Posts", PostSchema)