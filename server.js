var express = require('express');
var app = express();
var moongose = require ("mongoose");
var port = process.env.PORT || 8080;

moongose.connect('mongodb://localhost:27017/cinema');

var db = moongose.connection;
db.on('error',console.error.bind(console, 'MongoDB connection error:'));

app.configure(function() {
	app.use(express.static (__dirname + '/'));
	app.use(express.logger('dev'));
	app.use(express.methodOverride());

} 
	);
var bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
require('./routes.js') (app);
app.listen(port);
console.log("APP por el puerto"+ port);
