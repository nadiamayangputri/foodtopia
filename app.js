const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// database
require('./models/db.js');

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