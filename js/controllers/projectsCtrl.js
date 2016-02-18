angular
    .module("app")
    .controller("projectsCtrl", ["$scope", function($scope){
        $scope.title = "Past Projects";
        $scope.projects = ["Project #1", "Project #2", "Project #3"];
    }])