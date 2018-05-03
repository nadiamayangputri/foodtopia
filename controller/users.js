const mongoose = require('mongoose');
//User database
var users = mongoose.model('users');


module.exports.createUser = function (req, res) {
    console.log('Controller - New user.');
    var newUser = new users({
        "username":req.body.username,
        "password":req.body.password,
        "admin":req.body.admin,
        "photo":req.body.photo
    });
    newUser.save(function(err, user) {
        if (err) {
            console.log('New user failed to save.');
            res.sendStatus(400);
        }else{
            res.send(user);
            console.log('New user successfully saved.');
        }
    })
};


module.exports.findUserByName = function(req, res){
    var username = req.params.name;
    users.find({name:username},function(err, ){
        if(!err){
            res.send(ingredientName);
        }else{
            res.sendStatus(404);
        }
    });
};