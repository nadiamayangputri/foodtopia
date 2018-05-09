var mongoose = require('mongoose');
var journalSchema = mongoose.Schema(
    {
        "date": Date,
        "user": String,
        "meal":String,
        "ingredients":String,
        "comments":String,
        "rating": Number
    }
);
mongoose.model('journals',journalSchema);
