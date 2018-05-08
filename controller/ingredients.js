var mongoose = require('mongoose');
var unirest = require('unirest');
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
    var str1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
    var str2 = ingredientName;
    var str3 = "&limitLicense=false&number=5&ranking=1";
    var url = str1.concat(str2,str3);
    unirest.get(url)
        .header("X-Mashape-Key", "Pc0JAnEGJnmshFERnSOKuLobbeqLp1YmLLrjsnvnWBFpsIX6eZ")
        .header("Accept", "application/json")
        .end(function (result) {
            /*
            for (var i = 0; i < 3; i++) {
                var str1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
                var str2 = result.body[i]["id"];
                var str3 = "/information?includeNutrition=false";
                var url = str1.concat(str2, str3);
                unirest.get(url)
                    .header("X-Mashape-Key", "Pc0JAnEGJnmshFERnSOKuLobbeqLp1YmLLrjsnvnWBFpsIX6eZ")
                    .header("Accept", "application/json")
                    .end(function (result) {
                        */
            var url1 = "https://spoonacular.com/"+ result.body[0].title.replace(/\s+/g, '-').toLowerCase() + "-"+ result.body[0].id;
            var url2 = "https://spoonacular.com/"+ result.body[1].title.replace(/\s+/g, '-').toLowerCase() + "-"+ result.body[1].id;
            var url3 = "https://spoonacular.com/"+ result.body[4].title.replace(/\s+/g, '-').toLowerCase() + "-"+ result.body[4].id;
            ingredients.find({name: ingredientName}, function (err, ingredients) {
                            if (!err) {
                                res.render("ejs/dictionary/information", {
                                    ingredients: ingredients[0],
                                    recipe1: result.body,
                                    url1: url1,
                                    url2: url2,
                                    url3: url3
                                });
                            } else {
                                res.sendStatus(404);
                            }
                       // });
                    });
            //}
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
    if (!err) {
        res.render('ejs/dictionary/lookup', {ingredients: ingredients});
    } else {
        res.sendStatus(404);
        }
    });

};

function getrecipesbyFood(text) {
    var str1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=";
    var str2 = text;
    var str3 = "&limitLicense=false&number=5&ranking=1";
    var url = str1.concat(str2,str3);
    unirest.get(url)
        .header("X-Mashape-Key", "Pc0JAnEGJnmshFERnSOKuLobbeqLp1YmLLrjsnvnWBFpsIX6eZ")
        .header("Accept", "application/json")
        .end(function (result) {

            for (var i=0; i<3; i++){
                getrecipesbyID(result.body[i]["id"]);
            }
        });
}

function getrecipesbyID(text) {

    var str1 = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/";
    var str2 = text;
    var str3 = "/information?includeNutrition=false";
    var url = str1.concat(str2,str3);
    unirest.get(url)
        .header("X-Mashape-Key", "Pc0JAnEGJnmshFERnSOKuLobbeqLp1YmLLrjsnvnWBFpsIX6eZ")
        .header("Accept", "application/json")
        .end(function (result) {
            list.push(result.body["sourceUrl"]);
        });
    //console.log(recipesUrl);
}

module.exports.findIngredientByName = findIngredientByName;
module.exports.findAllIngredients = findAllIngredients;
module.exports.findIngredientByCategory = findIngredientByCategory;
module.exports.searchIngredientByCategory = searchIngredientByCategory;
module.exports.allIngredients = allIngredients;