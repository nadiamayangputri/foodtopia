const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/', controller.home);
router.get('/games', controller.games);
router.get('/games/match', controller.match_game);
router.get('/games/wordsearch', controller.wordsearch);
router.get('/lookup', controller.lookup);

module.exports = router;