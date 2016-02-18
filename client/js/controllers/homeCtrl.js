angular
    .module("app")
    .controller("homeCtrl", ["$scope", function($scope){
        $scope.title = "Play Time";
        $scope.games = ["Game #1", "Game #2", "Game #3"];
    }])