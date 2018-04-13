const members = require('../models/members_array');


module.exports.home = function (req, res) {
    res.render('ejs/home');
}

module.exports.match_game = function (req,res) {
    res.render('ejs/game_match');

};