var mongoose = require('mongoose');
var journalSchema = mongoose.Schema(
    {
        "date": String,
        "user": String,
        "meal":String,
        "ingredients":String,
        "comments":String,
    }
);
mongoose.model('journals',journalSchema);
