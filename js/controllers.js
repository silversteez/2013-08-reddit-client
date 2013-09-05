angular.module('myApp.controllers', [])
.controller('MainController', [ '$scope', '$http', function($scope, $http) {

  $http({
    method: 'JSONP',
    url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
  })
  .success(function(data, status, headers, config) {
    $scope.articles = data.data.children;
  })
  .error(function(data, status, headers, config) {
    console.log('error ', status);
  });

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