'use strict';

var events = angular.module('events', []);

events.controller('eventsController', ['$scope', '$http', function($scope, $http) {
  var realEventController = this;

  realEventController.specialEvents = [];
  realEventController.regularEvents = [];

  $http.get('events/regular_events.json')
    .then(function(response) { realEventController.regularEvents = response.data; })
    .catch(function(response) { console.log("Failed to get regular_events.json."); });
  $http.get('events/special_events.json')
    .then(function(response) { realEventController.specialEvents = response.data; })
    .catch(function(response) { console.log("Failed to get special_events.json."); });
}]);
