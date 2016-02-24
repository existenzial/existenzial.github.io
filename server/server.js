var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var db = require('./mongoose.js');

var app = new express();
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + '/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    // console.log('hitting /');
    res.status(201).send("Serving up /");
});

app.get('/about', function(req, res){
    // console.log('hitting /about');
    res.status(201).send("Serving up /about");
});

app.get('/projects', function(req, res){
    // console.log('hitting /projects');
    res.status(201).send("Serving up /projects");
});

app.get('/blog', function(req, res){
    // console.log('hitting /blog');
    //retrieve all posts from mongoDB
    db.findUserPosts();
    res.status(201).send("blog hit points++");
});

app.listen('Listening on port ', app.get('port'));