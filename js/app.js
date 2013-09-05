angular.module('myApp', ['ngRoute', 'myApp.controllers', 'myApp.directives', 'myApp.services'])
.config(['$routeProvider', function($routeProvider) {

  console.log("routing!");

  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html'
    })
    .when('/settings', {
      templateUrl: '../templates/settings.html',
      controller: 'SettingsController'
    })
    .otherwise({ redirectTo: '/' });

}]);