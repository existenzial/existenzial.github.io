angular
    .module("app", [
        "ui.router"
    ])
    .config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise("/"); 
        
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "/views/home.html",
                controller: "homeCtrl"
            })
            .state("about", {
                url: "/about",
                templateUrl: "views/about.html",
                controller: "aboutCtrl"
            })
            .state("blog", {
                url: "/blog",
                templateUrl: "views/blog.html",
                controller: "blogCtrl"
                /*resolve: {
                    posts: ["$http", function($http){
                        return $http.get("_posts/posts.json").then(function(response){
                            return response.data;
                        });
                    }]
                }*/
            })
            .state("projects", {
                url: "/projects",
                templateUrl: "views/projects.html",
                controller: "projectsCtrl"
            })
    }])