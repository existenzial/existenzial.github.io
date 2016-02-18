var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://127.0.0.1/blahblahz');
var db = mongoose.connection;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

db.on('error', console.error.bind(console, 'whoops! no connection'));

db.once('open', function(){
    console.log('db connected!');
    
    var postSchema = new Schema({
        user: {
            type: ObjectId,
            ref: 'blogposts'
              },
        date: {
            type: Date,
            default: Date.now
        },
        title: String,
        content: String,
        /*comments: [Comment],*/
    });

    var Post = mongoose.model('Post', postSchema);
    
    var post = new Post({title: 'My First Blog Post'});
    
    post.save(function(err,data){
        if (err) return console.error(err);
         console.log('promise saved', data);
        return data;
        })
        .then(function(data){
        post.find().then(function(data){
         console.log('this post data',data);
        })
    });
    
});

//for main app file, Sync ok if only loading model files on startup
/*fs.readdirSync(__dirname +'/models').forEach(function(filename){
    if(~filename.indexOf('.js')) require(__dirname + '/models/' + filename)
});*/

/*//for main app, routing
app.get('/blog', function(req, res){
    mongoose.model('users').find(function(err, users){
        res.send(users);
    });
});*/

/*app.get('/posts/:userId', function(req, res){
    mongoose.model('posts').find({user: req.params.userId}, function(err, posts){
        mongoose.model('posts').populate(posts, {paths: 'user'}, function(err, posts){
            res.send(posts);
        });
        //       res.send(posts);
    });
});*/