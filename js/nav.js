var nav = angular.module('nav', []);

nav.directive('myNav', function() {
  return {
      restrict: "E",
      controller: 'navController',
      scope: true,
      templateUrl: "partials/nav.html"
  }
});

nav.controller('navController', ['$scope', function($scope) {
    this.view = 0;

    this.setView = function(newView) {
        this.view = newView;
    };

    this.isView = function(viewNum) {
        return this.view == viewNum;
    };
}]);
