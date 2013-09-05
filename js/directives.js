angular.module('myApp.directives', [])
.directive('mySweetDirective', function() {
  return {
    restrict: 'A',
    // require: ['^ngModel'],
    // scope: {
    //   ngModel: '=',
    // },
    templateUrl: 'templates/home.html',
    link: function(scope, ele, attr) {
      // scope.votes = 5;
    }
  };
});