var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var db = require('./mongoose.js');

var app = new express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname + './../client/')));

//app.use(express.favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

var authUser = function(request, response, next){
    var user = {
        name: 'this.name',
        password: 'this.password',
        admin: true
    }
    
    request.user = user;
    next();
};

app.use(authUser);

app.get('/', function(request, response){
    db.
    response.send({
        key: 'val'
    });
});

/*app.use('/', function(request, response, next){
   //if user is logged in/authenticated
        //load the page
    //else
        //re-route user to login
    next();
});

app.param(['id', '/signin'], function(request, response, next, value){
    console.log('Called once with ', value);
    next();
});*/

app.get('/blog', function(req, res){
    console.log('hitting /blog');
    res.send(201, "YAY");
});

app.post('/userID', authUser, function(request, response){
    //add as many middleware funcs as necessary above prior to req
    response.send({
        key: request.params,
        isAdmin: request.user.admin
    });
});

app.listen(app.get('port'));