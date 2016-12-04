'use strict';

var environmap = angular.module('environmap', [
  'ngRoute',
  'park',
  'sightings',
  'camping',
  'events',
  'map',
  'nature',
  'nav'
]);

environmap.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/park', {
      templateUrl: 'park/park.template.html',
      controller: 'parkController as park',
      activeSection: 'park'
    })
    .when('/map', {
      templateUrl: 'map/map.template.html',
      controller: 'mapController as map',
      activeSection: 'map'
    })
    .when('/camping', {
      templateUrl: 'camping/camping.template.html',
      controller: 'campingController as camping',
      activeSection: 'camping'  
    })
    .when('/nature', {
      redirectTo: '/nature/animals'
    })
    .when('/nature/animals', {
      templateUrl: 'nature/nature.animals.template.html',
      controller: 'natureAnimalsController as controller',
      activeSection: 'nature-animals'
    })
    .when('/nature/plants', {
      templateUrl: 'nature/nature.plants.template.html',
      controller: 'naturePlantsController as controller',
      activeSection: 'nature-plants'
    })
    .when('/nature/landmarks', {
      templateUrl: 'nature/nature.landmarks.template.html',
      controller: 'natureLandmarksController as controller',
      activeSection: 'nature-landmarks'
    })
    .when('/events', {
      templateUrl: 'events/events.template.html',
      controller: 'eventsController as events',
      activeSection: 'events'
    })
    .when('/sightings', {
      templateUrl: 'sightings/sightings.template.html',
      controller: 'sightingsController as sightings',
      activeSection: 'sightings'
    }).
    otherwise({
      redirectTo: '/park'
    });
}]);
