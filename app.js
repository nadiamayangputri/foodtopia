const express = require('express');
const app = express();

const router =  require('./routes/home.js')

app.set('view engine', 'ejs');
app.use(router);
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/views/js'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Express listening on port ${PORT}`);
});