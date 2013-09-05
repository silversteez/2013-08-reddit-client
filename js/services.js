angular.module('myApp.services', [])
  .factory('RedditService', ['$http', function($http) {
    console.log("making RedditService");

    var service = {
      fetchArticles: function(successFunc) {
        console.log('fetching articles!');
        $http({
          method: 'JSONP',
          url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
        })
        .success(successFunc)
        .error(function(data, status, headers, config) {
          console.log('error ', status);
        });
      },
    };

    return service;

  }]);