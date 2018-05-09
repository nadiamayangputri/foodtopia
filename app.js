const express = require('express');
const app = express();

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


// database

var db = require('./models/db.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
//use sessions for tracking logins

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: db
    })
}));
app.use(function(req,res,next){
    var user = app.locals.user;
    console.log('what is req.user',app.locals.user);

    if (app.locals.user) {
        res.locals.user = app.locals.user;
    }else{
        res.locals.user = null;
    }

    next();
});
const router =  require('./routes/home.js');

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/js'));
// app.use('/static', express.static(__dirname + '/icon/KR_Fruity'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('Express listening on port ${PORT}');
});