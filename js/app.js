angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {
  // $routeProvider
  //   .when('/', {
  //     templateUrl: 'templates/home.html'
  //   })
  //   .when('/settings', {
  //     templateUrl: '../templates/settings.html',
  //     controller: 'SettingsController'
  //   })
  //   .otherwise(console.log("fuckso"));
  $routeProvider.otherwise(console.log("blah"));
}]);