angular
    .module("app")
    .controller("aboutCtrl", ["$scope", function($scope){
        $scope.title = "About Jazz";
        $scope.bio = "I'm a software engineer with a game available on the App Store and the Google Play Stores looking to take my existing skills in game development, frontend frameworks, databases, digital asset management and servers and contribute to a team where each engineer is dedicated to best practices and maintaining a fun working environment. I am tech-savvy, goal-driven and have a talent for new technology, problem-solving, interpersonal relations, negotiation and time-management.";
        $scope.quote = "“It always seems impossible until it’s done.” -Nelson Mandela";
    }]);