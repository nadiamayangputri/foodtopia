//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://qianqian:foodtopia19@ds163294.mlab.com:63294/foodtopia';

mongoose.connect(mongoDB,function (err) {
    if (err) {
        console.log('fail to connect to mongo.');
    }else{

        console.log('successfully connected to mongo.');
    }
});
// require('./users');
require('./ingredients.js');