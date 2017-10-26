const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
var db = mongoose.createConnection("mongodb://dafear:sidney12@ds115035.mlab.com:15035/underthehood");




module.exports = db; 











