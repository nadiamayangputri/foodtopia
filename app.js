const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//User database
require('./models/db.js');

require('./models/db.js');
const router =  require('./routes/home.js');

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname + '/views'));
<<<<<<< HEAD

=======
app.use(express.static(__dirname + '/views/js'));
// app.use('/static', express.static(__dirname + '/icon/KR_Fruity'));
>>>>>>> f6e6f357f343ef5f288d851b8fe6daa8daf26a71

const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log('Express listening on port ${PORT}');
});