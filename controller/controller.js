const members = require('../models/members_array');


module.exports.home = function (req, res) {
    res.render('ejs/home');
};
module.exports.games = function (req, res) {
    res.render('ejs/games');
};

module.exports.profile = function (req, res) {
    res.render('ejs/profile');
}

module.exports.lookup = function (req, res) {
    res.render('ejs/lookup');
};

module.exports.searchresult = function (req,res) {
    res.render('ejs/searchresult');
};

module.exports.information = function (req,res) {
    res.render('ejs/information');
};

module.exports.wordsearch = function (req,res) {
    res.render('ejs/wordsearch');
};
module.exports.match_game = function (req,res) {
    res.render('ejs/game_match');

};
module.exports.signup = function (req,res) {
    res.render('ejs/signup');

};