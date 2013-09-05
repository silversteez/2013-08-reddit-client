angular.module('myApp.services', [])
  .factory('RedditService', ['$http', function($http) {
    console.log("making RedditService");

    var cachedData = {
      timeStamp: null,
      data: null
    };

    var service = {
      //fetches new articles unless there is a recent cache
      fetchArticles: function(successFunc) {
        console.log('fetching articles!');

        var timeStamp = new Date().getTime();

        if (cachedData.timeStamp && timeStamp - cachedData.timeStamp < 30000) {
          successFunc(cachedData.data);

        } else {
          $http({
            method: 'JSONP',
            url: 'http://api.reddit.com/new?jsonp=JSON_CALLBACK'
          })
          .success(function(data, status) {

            cachedData.timeStamp = timeStamp;
            cachedData.data = data;

            successFunc(data);
          })
          .error(function(data, status, headers, config) {
            console.log('error ', status);
          });
        }
      },
    };

    return service;

  }]);