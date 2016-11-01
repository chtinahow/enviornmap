var myApp = angular.module('environmap', [
  'ngRoute',
  'environmapController'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/home', {
    templateUrl: 'partials/home.html',
    controller: 'parkController as park'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
