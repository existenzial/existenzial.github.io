angular
    .module("app")
    .controller("blogCtrl", ["$scope","$http", function($scope, $http){
        
        $scope.fetchAllBlogPosts = function(){
            return $http.get('/blog').then(function(res){
                console.log('got blog data from back end');
                return res.data; 
            });
        };
        
        $scope.fetchAllBlogPosts();
        
        $scope.title = "Jazzed About Coding";
        $scope.subtitle = "Diversity, Life, and the Secrets Beyond the Script"
    }])