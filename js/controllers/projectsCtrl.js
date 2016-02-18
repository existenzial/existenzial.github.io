angular
    .module("app")
    .controller("projectsCtrl", ["$scope", function($scope){
        $scope.title = "Past Projects";
        $scope.projects = [
            {name: "Dream Dash", url: "http://playdreamdash.com"}, 
            {name: "BBBasic", url: "https://www.npmjs.com/package/bbbasic"}, 
            {name: "Boot/ed", url: "http://booted.herokuapp.com"},
        ];
    }])