var mongoose = require('mongoose');
mongoose.set('debug', true);
//User database
var users = mongoose.model('users');
var ingredients = mongoose.model('ingredients');

const journalController = require('../controller/journals');

module.exports.validate = function (req, res, next) {
    var newname = req.body.username;
    var newpassword = req.body.password;
    //log in
    if (req.body.username && req.body.password && !(req.body.passwordConf)) {
        users.findOne({username: newname, password: newpassword}, function (err, user) {

            if (!user) {
                console.log('wrong details');

                req.session.errormsg = "Login Error: Invalid username or password";
                return res.redirect('back');
            }else{
                req.session.userId = user._id;
                req.session.username = user.username;
                req.session.errormsg = null;
                return res.redirect('/profile');
            }
        });
        //sign up
    } else if (req.body.username && req.body.password && req.body.passwordConf) {
        if (req.body.password !== req.body.passwordConf) {
            // var err = new Error('Passwords do not match.');
            // err.status = 400;
            // res.send("passwords dont match");
            // return next(err);
            req.session.errormsg = "Signup Error: Passwords dont match";
            return res.redirect('back');


        }
        var newUser;
        users.findOne({username: newname}, function (err, user) {

            if (!user) {
                newUser = new users({
                    "username": req.body.username,
                    "password": req.body.password,
                    "points": 0,
                    "badges": 0,
                    "journal": 0,
                    "ingredient-collection": [],
                    "admin": false,
                    "login": false
                });

                newUser.save(function (err, user) {
                    if (err) {
                        console.log('New user failed to save.');
                        res.sendStatus(400);
                    } else {
                        req.session.errormsg = null;
                        console.log('New user successfully saved.');
                        req.session.userId = user._id;
                        return res.redirect('/profile');
                    }
                });


            } else {
                console.log(user + 'name exists already');
                req.session.errormsg ="Signup Error: Username "+ req.body.username + " has been taken :(";
                return res.redirect('back');

            }
        });
    }
};
// GET route after registering
module.exports.profile = function (req, res, next) {
    users.findById(req.session.userId)
        .exec(function (error, user) {
            if (error) {
                return next(error);
            } else {
                if (!user) {
                    return res.redirect('/');
                } else {
                    console.log('logged in');
                    req.app.locals.user = user;
                    users.update({'_id': req.session.userId}, {$set: {'login': 'true'}});

                    var username = req.session.userId;
                    journalController.findAll(username, function (entries) {
                        // gets all ingredients from the database
                        ingredients.find(function (err, ingredients) {
                            if (!err) {
                                return res.render('ejs/account/profile.ejs', {
                                    users: user,
                                    journals: entries,
                                    ingredients: ingredients
                                });
                            } else {
                                res.sendStatus(404);
                            }
                        });

                    });


                }
            }
        });
};

// GET for logout logout
module.exports.logout = function (req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                req.app.locals.user = null;

                console.log('logged out');
                return res.redirect('back');
                //return res.redirect('/');
            }
        });
    }
};
