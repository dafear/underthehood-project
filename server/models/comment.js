const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    lat: String,
    lng: String,
    comment: String,
    user: String
});

module.exports = mongoose.model('Comment', CommentSchema);
