var mongoose = require('mongoose');
var ingredients = mongoose.model('ingredients');
var findAllIngredients = function(req,res){
    ingredients.find(function(err,ingredients){
        if(!err){
            res.send(ingredients);
        }else{
            res.sendStatus(404);
        }
    });
};

var findIngredientByName = function(req, res){
    var ingredientName = req.params.name;
    ingredients.find({name:ingredientName},function(err,ingredientName){
        if(!err){
            res.send(ingredientName);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.findIngredientByName = findIngredientByName;
module.exports.findAllIngredients = findAllIngredients;