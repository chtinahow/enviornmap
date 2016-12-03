'use strict';

var events = angular.module('events', []);

events.controller('eventsController', ['$scope', '$http', function($scope, $http) {
  var realEventController = this;

  realEventController.specialEvents = [];
  realEventController.regularEvents = [];

  $http.get('content/events/regularEvents.json')
    .then(function(response) { realEventController.regularEvents = response.data; console.log("GET regularEvents.json complete."); console.log(realEventController.regularEvents); })
    .catch(function(response) { console.log("Failed to get regularEvents.json."); });
  $http.get('content/events/specialEvents.json')
    .then(function(response) { realEventController.specialEvents = response.data; console.log("GET regularEvents.json complete."); console.log(realEventController.regularEvents); })
    .catch(function(response) { console.log("Failed to get specialEvents.json."); });
}]);
