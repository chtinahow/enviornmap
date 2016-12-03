'use strict';

var nav = angular.module('nav', []);

nav.directive('myNav', function() {
  return {
    restrict: "E",
    controller: 'navController',
    scope: true,
    templateUrl: "partials/nav.html"
  }
});

nav.controller('navController', ['$scope', '$route', function($scope, $route) {
  $scope.isActiveSection = function(activeSection) {
    return $route.current.activeSection == activeSection;
  }

  $scope.isActiveSectionPrefix = function(activeSectionPrefix) {
    var activeSection = $route.current.activeSection;
    return activeSection && activeSection.startsWith(activeSectionPrefix);
  }
}]);
