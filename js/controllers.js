angular.module('myApp.controllers', [])
.controller('MainController', [ '$scope', 'RedditService', function($scope, RedditService) {
  // RedditService.fetchArticles();
  console.log(RedditService.articles);
}])
.controller('SettingsController', ['$scope', function($scope) {

}])
.controller('ArticleController', ['$scope', function($scope) {

  $scope.votes = 0;

  $scope.voteUp = function() {
    $scope.votes++;
  };

  $scope.voteDown = function() {
    $scope.votes--;
  };

}]);