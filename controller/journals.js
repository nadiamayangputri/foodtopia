
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
    console.log('user in journal session: ' + req.session.userId);

    if (req.body.meal && req.body.ingredients) {
        var newEntry;
        newEntry = new journals({

            "date": new Date(),
            // "user" : req.app.get('currentuser').id,
            //need actual user
            "user" : req.session.userId,
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
                console.log('New entry successfully saved.');
                return res.redirect('/profile');
            }
        });
    } else {
        console.log('please fill in fields');
    }
};

module.exports.findAll = function(userID, callback){
    journals.find({user:userID}, function(err,entries){
        if(!err){
            // console.log('entries found in journal.js  '+entries);
            callback(entries);
        }else{
            res.sendStatus(404);
        }
    });
};