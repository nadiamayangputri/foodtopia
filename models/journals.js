var mongoose = require('mongoose');
var journalSchema = mongoose.Schema(
    {
        "date": String,
        "user": String,
        "meal":String,
        "ingredients":Array,
        "comments":String
    }
);
mongoose.model('journals',journalSchema);
