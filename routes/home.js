const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
const userController = require('../controller/users');
const journalController = require('../controller/journals');
const ingredientController = require('../controller/ingredients');


const bodyParser = require('body-parser');
express().use(bodyParser.json()); // for parsing application/json
var urlencodedParser = express().use(bodyParser.urlencoded({ extended: false }));
// for parsing application/x-www-form-urlencoded

router.get('/', controller.home);
router.get('/profile', userController.profile);

router.post('/profile',urlencodedParser,userController.validate);// Create new user
router.get('/profile', userController.profile);
router.get('/logout', userController.logout);

router.post('/journal',urlencodedParser,journalController.createEntry); //create journal entry
// router.get('/journal',journalController.findAll);
router.get('/games', controller.games);
router.get('/games/match', controller.match_game);
router.get('/games/wordsearch', controller.wordsearch);

router.get('/lookup', ingredientController.allIngredients);
router.get('/lookup/category/:category', ingredientController.searchIngredientByCategory);
router.get('/lookup/:name',ingredientController.findIngredientByName);

module.exports = router;