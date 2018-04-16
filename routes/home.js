const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');


router.get('/', controller.home);
router.get('/games/match', controller.match_game);
router.get('/lookup', controller.lookup);
router.get('/games/wordsearch', controller.wordsearch)
module.exports = router;