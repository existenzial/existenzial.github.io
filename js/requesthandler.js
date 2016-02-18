$.ajax({
    type: 'GET',
    url: '/',
    success: function(data){
        console.log('GET req successful to /', data);
    },
    error: function(){
        console.log('Hmm...an error');
    }
});

$.ajax({
    type: 'GET',
    url: '/blog',
    success: function(data){
        console.log('GET req successful to /', data);
    },
    error: function(){
        console.log('Hmm...an error');
    }
});