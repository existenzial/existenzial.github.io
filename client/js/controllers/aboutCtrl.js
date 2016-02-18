angular
    .module("app")
    .controller("aboutCtrl", ["$scope", function($scope){
        $scope.title = "About Jazz";
        $scope.bio = "I began my unconventional journey into the world of software engineering after a full life of adventure. Photography and creativity underlined every point of action. Celebrating the company of Cirque du Soleil performers and world-renowned photographer, Peter Lik, I have always been filled with vibrant exploits into the unknown and reinvented the world through creative solutions. Inspired to extend that principle, I set off to teach myself a new set of skills that has helped me actualize my passion for ideation into visual platforms that touch and engage a multitude of people. Learning Javascript, HTML/CSS, D3 and other programming concepts has helped me adapt my inner dreamer into a materialized reality. I look to the future to usher in a new era of development both personally and professionally.";
        $scope.quote = "“It always seems impossible until it’s done.” -Nelson Mandela";
    }]);