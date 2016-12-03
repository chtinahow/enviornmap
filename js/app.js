var myApp = angular.module('environmap', [
  'ngRoute',
  'homeController',
  'parkSightingsController',
  'campingInfoController',
  'parkEventsController',
  'parkMapController',
  'nature',
  'nav'
])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/park', {
      templateUrl: 'partials/park.html',
      controller: 'parkController as park',
      activeSection: 'park'
    })
    .when('/map', {
      templateUrl: 'partials/map.html',
      controller: 'mapController as map',
      activeSection: 'map'
    })
    .when('/camping', {
      templateUrl: 'partials/camping.html',
      controller: 'campingController as camping',
      activeSection: 'camping'  
    })
    .when('/nature', {
      redirectTo: '/nature/animals'
    })
    .when('/nature/animals', {
      templateUrl: 'partials/nature_animals.html',
      controller: 'natureAnimalsController as controller',
      activeSection: 'nature-animals'
    })
    .when('/nature/plants', {
      templateUrl: 'partials/nature_plants.html',
      controller: 'naturePlantsController as controller',
      activeSection: 'nature-plants'
    })
    .when('/nature/landmarks', {
      templateUrl: 'partials/nature_landmarks.html',
      controller: 'natureLandmarksController as controller',
      activeSection: 'nature-landmarks'
    })
    .when('/events', {
      templateUrl: 'partials/events.html',
      controller: 'eventsController as events',
      activeSection: 'events'
    })
    .when('/sightings', {
      templateUrl: 'partials/sightings.html',
      controller: 'sightingsController as sightings',
      activeSection: 'sightings'
    }).
    otherwise({
      redirectTo: '/park'
    });
}]);
