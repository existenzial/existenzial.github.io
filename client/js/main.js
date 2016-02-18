$(function (){
	//cache the posts(save in a variable e.g.: $blogposts) you want to display for reference later, so you only have to check/query the DOM once
	var $blogPosts = $('#blog-posts');

	//////input fields from HTML for adding posts are cached below//////
	var $postTitle = $('#post-title');
	var $postDate = $('#post-date');
	var $postContent = $('#post-content');

	//create a function to ADD a POST
	var addPost = function(post){
		$blogPosts.append('' + '<li>' + '\n<h1>' + post.title+'</h1>' + '\n<h3>'+ post.date + '</h3>' + '\n<p>' + post.content + '</p>' '\n</li>');
	};

	$.ajax({
		//an object of OPTIONS for the request
		type: 'GET',
		url: '/_posts',
		success: function(postdata){
			$.each(postdata, function(index, post){
			//iterate through each post item in the postdata array and perform a callback that takes in the index of the post and the post content
				addPost(post);
			});
			console.log('GET request for _posts successful', data);
		},
		error: function(){
			console.log('Hmm...an error');
		}
	});

	$('#add-post').on('click', function(){
	//when the add-post button is clicked, add the post to the database	
	
	//BUILD a POST OBJECT so it can get added in the POST request
		var post = {
			title: $postTitle.val(),
			date: $postDate.val(),
			content: $postContent.val()
		};

		$.ajax({
			type: 'POST',
			url: '/_posts',
			data: post, //pass our POST OBJECT to data field
			success: function(newPost){
				addPost(newPost);
			},
			error: function(){
				console.log('Whoops! An error adding your post to the blog');
			}
		});

	});

	$posts.delegate('.remove', 'click', function(){
	//using .delegate instead of .on 'click' allows other request types to finish prior to trying to remove the post

		//cache the CLOSEST PARENT <li> so you can delete the item from the page and see the change instantly instead of page refresh first
		var $li  $(this).closest('li');

		$.ajax({
			type: 'DELETE',
			url: '/_posts' + $(this).attr('data-id'),
			success: function(){
				$li.fadeOut(300, function(){
					$(this).remove();
				});
			},
			error: function(){
				console.log('Error deleting post');
			}
		});

	});

});