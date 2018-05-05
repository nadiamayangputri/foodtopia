const members = require('../models/members_array');

var mongoose = require('mongoose');
var ingredients = mongoose.model('ingredients');
var users = mongoose.model('users');

module.exports.home = function (req, res) {
    res.render('ejs/home');
};
module.exports.games = function (req, res) {
    res.render('ejs/games/games');
};

module.exports.profile = function (req, res) {
    res.render('ejs/account/profile');
}

module.exports.lookup = function (req, res) {
    res.render('ejs/dictionary/lookup');
};

module.exports.searchresult = function (req,res) {
    res.render('ejs/dictionary/searchresult');
};

module.exports.information = function (req,res) {
    res.render('ejs/dictionary/information');
};

module.exports.wordsearch = function (req,res) {
    res.render('ejs/games/wordsearch');
};
module.exports.match_game = function (req,res) {
    res.render('ejs/games/game_match');

};
module.exports.signup = function (req,res) {
    res.render('ejs/account/signup');

};

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

var findAllIngredients = function(req,res){
    ingredients.find(function(err,ingredients){
        if(!err){
            res.send(ingredients);
        }else{
            res.sendStatus(404);
        }
    });
};

var findIngredientByName = function(req, res){
    var ingredientName = req.params.name;
    ingredients.find({name:ingredientName},function(err,ingredientName){
        if(!err){
            res.send(ingredientName);
        }else{
            res.sendStatus(404);
        }
    });
};

var findIngredientByCategory = function(req, res){
    var ingredientCategory = req.params.category;
    ingredients.find({category:ingredientCategory},function(err,ingredientCategory){
        if(!err){
            res.send(ingredientCategory);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.findIngredientByName = findIngredientByName;
module.exports.findIngredientByCategory = findIngredientByCategory;
module.exports.findAllIngredients = findAllIngredients;