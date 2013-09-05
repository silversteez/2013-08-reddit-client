angular.module('myApp.services', [])
  .factory('RedditService', ['$http', function($http) {
    console.log("making RedditService");
    var service = {
      // fetchArticles: function() {
      //   $http({
      //     method: 'JSONP',
      //     url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
      //   })
      //   .success(function(data, status, headers, config) {
      //     this.articles = data.data.children;
      //   })
      //   .error(function(data, status, headers, config) {
      //     console.log('error ', status);
      //   });
      // },
      articles: null
    };
    return service;

  }]);