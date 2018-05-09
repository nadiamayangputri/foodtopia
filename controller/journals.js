
var mongoose = require('mongoose');
mongoose.set('debug', true);
// var alertModel = mongoose.model('Alert');
// alertModel.find().exec(function (err, docs) {
//     if(!err)
//         console.log(docs);
// });
//User database
var journals = mongoose.model('journals');

module.exports.createEntry = function (req, res, next) {
    console.log(req.body);
    console.log('user in req : ' + req.app.locals.user);
    if (req.body.meal && req.body.ingredients) {
        var newEntry;
        newEntry = new journals({

            "date": new Date(),
            // "user" : req.app.get('currentuser').id,
            //need actual user
            "user" : "temp",
                "meal": req.body.meal,
            "ingredients": req.body.ingredients,
            "comments": req.body.comments,
            //need to fix rating
            "rating": req.body.rating

        });

        newEntry.save(function (err, entry) {
            if (err) {
                console.log('New entry failed to save.');
                res.sendStatus(400);
            } else {
                return res.redirect('/profile');
                console.log('New entry successfully saved.');
            }
        });
    } else {
        console.log('please fill in fields');
    }
};

module.exports.findall = function (userID) {

    journals.find({user: userID},function (err, entries) {
        if (!err) {
            return entries;
        } else {
            console.log('error getting all the journals');
        }
    });
};