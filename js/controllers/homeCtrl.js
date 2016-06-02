angular
    .module("app")
    .controller("homeCtrl", ["$scope", function($scope){
        $scope.title = "Play Time";
        $scope.games = ["Breakout", "nerdz"];
        $scope.message = "Mini-Games Coming Soon!"
    }])