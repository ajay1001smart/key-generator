var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var KeySchema = new Schema({
    key: String,
    available: Boolean,
    block: Boolean
});
module.exports = mongoose.model('Key', KeySchema);