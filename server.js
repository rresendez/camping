var express = require('express');
var transactions = require('./transaction');
var bodyParser = require('body-parser');

var app= express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/',transactions);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//app.use(express.static(path.join(__dirname, 'public')));
//app.set('view engine', 'html');

app.listen(3000);
