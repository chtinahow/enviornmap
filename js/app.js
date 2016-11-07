var myApp = angular.module('environmap', [
  'ngRoute',
  'homeController',
  'parkSightingsController',
  'campingInfoController',
  'parkEventsController',
  'parkMapController',
  'parkNatureController',
  'directives'
])


myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/park', {
    templateUrl: 'partials/park.html',
    controller: 'parkController as park'
  })
  .when('/map', {
    templateUrl: 'partials/map.html',
    controller: 'mapController as map'
  })
  .when('/camping', {
    templateUrl: 'partials/camping.html',
    controller: 'campingController as camping'
  })
  .when('/nature', {
    templateUrl: 'partials/nature.html',
    controller: 'natureController as nature'
  })
  .when('/events', {
    templateUrl: 'partials/events.html',
    controller: 'eventsController as events'
  })
  .when('/sightings', {
    templateUrl: 'partials/sightings.html',
    controller: 'sightingsController as sightings'
  }).
  otherwise({
    redirectTo: '/park'
  });
}]);
