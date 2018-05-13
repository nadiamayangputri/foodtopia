var mongoose = require('mongoose');
mongoose.set('debug', true);
// create a schema
var userSchema = mongoose.Schema({
    "username":String,
    "password": String,
    "admin": Boolean,
    "points": Number,
    "badges" : Number,
    "journal": Number,
    "login" : Boolean
});

mongoose.model('users', userSchema);