
module.exports.home = function (req, res) {
    res.render('ejs/home');
    // res.send(req.flash('info'))

};
module.exports.flash = function(req, res){
    // Set a flash message by passing the key, followed by the value, to req.flash().
    req.flash('info', 'Flash is back!')
    res.redirect('/');
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
module.exports.searchnotfond = function (req,res) {
    res.render('ejs/dictionary/404');
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
module.exports.aboutus = function (req,res) {
    res.render('ejs/about_us');

};