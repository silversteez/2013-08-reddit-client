angular.module('myApp.directives', [])
.directive('mySweetDirective', function() {
  return {
    templateUrl: 'templates/articles.html',
    link: function($scope, $ele, $attr) {
    }
  };
});