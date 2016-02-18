angular
    .module("app")
    .controller("homeCtrl", ["$scope", function($scope){
        $scope.title = "Play Time";
        $scope.games = ["Mini-Game #1", "Mini-Game #2", "Mini-Game #3"];
        $scope.message = "Mini-Games Coming Soon!"
    }])