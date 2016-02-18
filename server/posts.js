var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ObjectId = Schema.ObjectId;

var Comment = new Schema({
    body: String,
    date: {
        type: Date,
        default: Date.now
    }
});

var postSchema = new Schema({
    user: {
        type: ObjectId,
        ref: 'users'
          },
    date: {
        type: Date,
        default: Date.now
    },
    title: String,
    content: String,
    comments: [Comment],
});

mongoose.model('posts', postSchema);

var findUserPosts = function(req, res){
    mongoose.model('posts').find(function(err, posts){
        res.send(posts);
    });
};