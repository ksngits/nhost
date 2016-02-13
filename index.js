//File Name: handlebars_demo.js
var express = require('express');

//NPM Module to integrate Handlerbars UI template engine with Express
var exphbs  = require('express-handlebars');

var app = express();

//Declaring Express to use Handlerbars template engine with main.handlebars as
//the default layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  //Use hello.handlebars template with the JSON data passed as another argument
  res.render("hello", {name : "Sanaulla"});
});

app.listen(3000, function(){
  console.log('Server up: http://localhost:3000');
});