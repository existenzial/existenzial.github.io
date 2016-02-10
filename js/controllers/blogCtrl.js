angular
    .module("app")
    .controller("blogCtrl", ["$scope", function($scope){
        $scope.title = "Jazzed About Coding";
        $scope.subtitle = "Diversity, Life, and the Secrets Beyond the Script"
    }])