const express = require('express');
const app = express();

var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var flash = require('connect-flash');

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

app.use(flash());
// app.set('currentuser',app.locals.user );

app.use(function(req,res,next){
    var user = app.locals.user;

  // if there's a flash message in the session request, make it available in the response, then delete it
    res.locals.sessionFlash = req.session.sessionFlash;
    // console.log(req.session.sessionFlash);
    delete req.session.sessionFlash;

    if (app.locals.user) {
     //   console.log('app session user '+ req.session.username);
        //app.set('currentuser',app.locals.user );
        res.locals.user = app.locals.user;
    }else{
        // app.set('currentuser',null);
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
