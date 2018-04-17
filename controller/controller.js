const members = require('../models/members_array');


module.exports.home = function (req, res) {
    res.render('ejs/home');
};
module.exports.games = function (req, res) {
    res.render('ejs/games');
};

module.exports.lookup = function (req, res) {
    res.render('ejs/lookup');
};

module.exports.wordsearch = function (req,res) {
    res.render('ejs/wordsearch')
};
module.exports.match_game = function (req,res) {
    res.render('ejs/game_match');

};
module.exports.signup = function (req,res) {
    res.render('ejs/signup');

};