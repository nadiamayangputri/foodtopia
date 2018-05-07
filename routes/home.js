const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const userController = require('../controller/users');
const ingredientController = require('../controller/ingredients');

router.get('/', controller.home);
router.get('/profile', controller.profile);

router.post('/user/new',userController.createUser);// Create new user

router.get('/games', controller.games);
router.get('/games/match', controller.match_game);
router.get('/games/wordsearch', controller.wordsearch);

router.get('/lookup', ingredientController.allIngredients);

router.get('/lookup/searchresult', controller.searchresult);


router.get('/lookup/category/:category', ingredientController.searchIngredientByCategory);
router.get('/information', controller.information);

router.get('/ingredients',ingredientController.findAllIngredients);
router.get('/ingredients/name/:name',ingredientController.findIngredientByName);
router.get('/ingredients/category/:category',ingredientController.findIngredientByCategory);


module.exports = router;