var mongoose = require('mongoose');
mongoose.set('debug', true);
// create a schema
var userSchema = mongoose.Schema({
    "username":String,
    "password": String,
    "admin": Boolean,
    "points": Number,
    "Badges" : Boolean,
    "login" : Boolean
});

mongoose.model('users', userSchema);