
var mongoose = require('mongoose');
mongoose.set('debug', true);

//User database
var journals = mongoose.model('journals');

// returns a formatted date for journal
function formatDate(date) {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    var dayNames = [
      "Monday", "Tuesday", "Wednesday", "Thursday",
      "Friday", "Saturday", "Sunday"
    ];

    var dayIndex = date.getDay();
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return dayNames[dayIndex] + ", " + day + ' ' + monthNames[monthIndex] + ' ' + year;
}

module.exports.createEntry = function (req, res, next) {
    console.log(req.body);
    console.log('user in journal session: ' + req.session.userId);

    if (req.body.meal && req.body.ingredients) {
        var newEntry;
        var dateString = formatDate(new Date());
        newEntry = new journals({

            "date": dateString,
            "user" : req.session.userId,
                "meal": req.body.meal,
            "ingredients": req.body.ingredients,
            "comments": req.body.comments
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