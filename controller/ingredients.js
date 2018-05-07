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
        } else{
            res.sendStatus(404);
        }
    });
};


var findIngredientByCategory = function(req, res){
    var ingredientCategory = req.params.category;
    ingredients.find({category:ingredientCategory},function(err,ingredientCategory){
        if(!err){
            res.send(ingredientCategory);
        }else{
            res.sendStatus(404);
        }
    });
};

var searchIngredientByCategory = function(req, res){
    var ingredientCategory = req.params.category;
    ingredients.find({category:ingredientCategory},function(err, ingredientCategory){
        if(!err){
            res.render('ejs/dictionary/searchresult', {ingredientsCategory :ingredientCategory});
        }else{
            res.sendStatus(404);
        }
    });
};

var allIngredients = function(req, res){
    ingredients.find(function(err, ingredients){
        if(!err){
            res.render('ejs/dictionary/lookup', {ingredients:ingredients});
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.findIngredientByName = findIngredientByName;
module.exports.findAllIngredients = findAllIngredients;
module.exports.findIngredientByCategory = findIngredientByCategory;
module.exports.searchIngredientByCategory = searchIngredientByCategory;
module.exports.allIngredients = allIngredients;