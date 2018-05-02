const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/', controller.home);
router.get('/profile', controller.profile);

router.get('/games', controller.games);
router.get('/games/match', controller.match_game);
router.get('/games/wordsearch', controller.wordsearch);

router.get('/lookup', controller.lookup);
router.get('/lookup/searchresult', controller.searchresult);
router.get('/information', controller.information);

router.get('/:name',controller.findIngredientByName);
router.get('/api',controller.findAllIngredients);

module.exports = router;