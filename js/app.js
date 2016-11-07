var myApp = angular.module('environmap', [
  'ngRoute',
  'homeController',
  'parkSightingsController',
  'campingInfoController',
  'parkEventsController',
  'parkMapController',
  'nature',
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
    redirectTo: '/nature/animals'
  })
  .when('/nature/animals', {
    templateUrl: 'partials/nature_animals.html',
    controller: 'natureAnimalsController as controller'
  })
  .when('/nature/plants', {
    templateUrl: 'partials/nature_plants.html',
    controller: 'naturePlantsController as controller'
  })
  .when('/nature/landmarks', {
    templateUrl: 'partials/nature_landmarks.html',
    controller: 'natureLandmarksController as controller'
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
