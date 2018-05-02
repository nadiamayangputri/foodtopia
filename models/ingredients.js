var mongoose = require('mongoose');
var ingredientSchema = mongoose.Schema(
    {
        "name":String,
        "category":String,
        "img":String,
        "kinds":Array,
        "origin":String,
        "facts":Array
    }
);
mongoose.model('ingredients',ingredientSchema);
