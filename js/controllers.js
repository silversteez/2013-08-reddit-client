angular.module('myApp.controllers', [])
.controller('MainController', [ '$scope', 'RedditService', function($scope, RedditService) {

  var fetchSuccess = function(data, status) {
    $scope.articles = data.data.children;
  };

  $scope.voteUp = function(article) {
    if (article.votes === undefined) {
      article.votes = 0;
    }
    article.votes++;
  };

  $scope.voteDown = function(article) {
    if (article.votes === undefined) {
      article.votes = 0;
    }
    article.votes--;
  };

  RedditService.fetchArticles(fetchSuccess);

}])
.controller('SettingsController', ['$scope', function($scope) {

  $scope.setting = "initiated!";

}]);