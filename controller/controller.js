const members = require('../models/members_array');


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