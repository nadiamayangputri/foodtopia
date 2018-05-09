var mongoose = require('mongoose');
mongoose.set('debug', true);
// var alertModel = mongoose.model('Alert');
// alertModel.find().exec(function (err, docs) {
//     if(!err)
//         console.log(docs);
// });
//User database
var users = mongoose.model('users');

module.exports.validate = function (req, res, next) {
    var newname = req.body.username;
    var newpassword = req.body.password;
    console.log(newname);
    console.log(newpassword);
    //log in
    if (req.body.username && req.body.password && !(req.body.passwordConf)) {
        users.findOne({username: newname, password: newpassword}, function (err, user) {

            if (!user) {
                console.log('wrong details')
            }else{
                req.session.userId = user._id;
                return res.redirect('/profile');
                // res.render('ejs/account/profile.ejs', {users: user});
            }


        });
        //sign up
    }else if (req.body.username && req.body.password && req.body.passwordConf) {
        if (req.body.password !== req.body.passwordConf) {
            var err = new Error('Passwords do not match.');
            err.status = 400;
            res.send("passwords dont match");
            return next(err);
        }
        var newUser;
        users.findOne({username: newname}, function (err, user) {

            if (!user) {
                newUser = new users({
                    "username": req.body.username,
                    "password": req.body.password,
                    "admin": false,
                    "login" : false
                });

                    newUser.save(function (err, user) {
                        if (err) {
                            console.log('New user failed to save.');
                            res.sendStatus(400);
                        } else {

                            console.log('New user successfully saved.');
                            // res.render('ejs/account/profile.ejs', {users: user});
                            req.session.userId = user._id;
                            return res.redirect('/profile');
                        }
                    });


            }else{
                console.log(user+'name exists already');
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
                if (user === null) {
                    var err = new Error('Not authorized! Go back!');
                    err.status = 400;
                    return next(err);
                } else {
                    console.log('logged in');
                    req.app.locals.user = user;
                    users.update({'_id':req.session.userId},{$set:{'login':'true'}});
                    return res.render('ejs/account/profile.ejs', {users: user}); }
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
                return res.redirect('/');
            }
        });
    }
};
module.exports.findall = function (req,res) {
    users.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};