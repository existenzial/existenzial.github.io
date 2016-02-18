var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://127.0.0.1/pbrandsite');
var db = mongoose.connection;

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

db.on('error', console.error.bind(console, 'whoops! no connection'));

db.once('open', function(){
    console.log('db connected!');
    
    var postSchema = new Schema({
        title: String,
        body: String,
        date: {
            type: Date,
            default: Date.now
        },
        comments: [{ body: String, date: Date }],
        hidden: Boolean,
        meta: {
            votes: Number,
            favs:  Number
        },
    });

    var Post = mongoose.model('Post', postSchema);
    
    var post = new Post({
        title: 'The Beginning of an Era',
        body: '<span class="post-img"><img class="post"  src="https://jazzedaboutcoding.files.wordpress.com/2015/10/20150905_1926271.jpg?w=508&h=286"></span>'

                    + "<blockquote><p>A lesson learned in remembering to breathe. A firehose of information shoots recursive blasts without base cases at my face, and I am reminded to leave a note for my future self: “A month ago you didn’t even know how to write a simple for loop, and now look at how far you’ve come.”</p></blockquote>"

                    + "<p>As the end of week 2 of my time at Telegraph Academy comes to a close, I find myself filled with gratitude. I am thankful for the opportunity to continue to pursue the technical training necessary to emerge a competitive force in the ever-changing job market and thankful to be surrounded by individuals who will stop at nothing to make that possible. Under their empathic tutelage I can see my knowledge transforming into applicable methodology. The road ahead will be incredible. I can’t wait to see what they throw at us next.</p>"
                + "</div>",
        date: new Date("Oct 21, 2015"),
        hidden: false,
        meta: {
            votes: 0,
            favs:  0
        }
        
    });
    
    post.save(function(err,data){
        console.log("promise saved", data);
        if (err) return console.error(err);
        return data;
        })
        .then(function(data){
        db.Post.find().then(function(data){
            console.log("this is post data", data);
        });
    });
    
});