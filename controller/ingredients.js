var mongoose = require('mongoose');
var unirest = require('unirest');
var ingredients = mongoose.model('ingredients');
var users = mongoose.model('users');


var findIngredientByName = function(req, res){
    var ingredientName = req.params.name;
    ingredients.find({name: ingredientName}, function (err, ingredients) {
        if (!err) {
            var str1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
            var str2 = ingredientName;
            var str3 = "&limitLicense=false&number=5&ranking=1";
            var url = str1.concat(str2, str3);
            unirest.get(url)
                .header("X-Mashape-Key", "Pc0JAnEGJnmshFERnSOKuLobbeqLp1YmLLrjsnvnWBFpsIX6eZ")
                .header("Accept", "application/json")
                .end(function (result) {
                    var url1 = "https://spoonacular.com/" + result.body[0].title.replace(/\s+/g, '-').toLowerCase() + "-" + result.body[0].id;
                    var url2 = "https://spoonacular.com/" + result.body[1].title.replace(/\s+/g, '-').toLowerCase() + "-" + result.body[1].id;
                    var url3 = "https://spoonacular.com/" + result.body[4].title.replace(/\s+/g, '-').toLowerCase() + "-" + result.body[4].id;
                    res.render("ejs/dictionary/information", {
                        ingredients: ingredients[0],
                        recipe1: result.body,
                        url1: url1,
                        url2: url2,
                        url3: url3
                    });
                });
        } else {
            res.sendStatus(404);
        }
    })
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
    if (!err) {
        res.render('ejs/dictionary/lookup', {ingredients: ingredients});
    } else {
        res.sendStatus(404);
        }
    });

};

module.exports.findIngredientByName = findIngredientByName;
module.exports.searchIngredientByCategory = searchIngredientByCategory;
module.exports.allIngredients = allIngredients;