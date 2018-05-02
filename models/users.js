var mongoose = require('mongoose');

// create a schema
var userSchema = mongoose.Schema({
    "username":String,
    "password": String,
    "admin": Boolean,
    "photo":String
});
mongoose.model('users', userSchema);