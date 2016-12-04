'use strict';

var nature = angular.module('nature', []);

nature.controller('natureAnimalsController', ['$scope', '$http', function($scope, $http) {
  var controller = this;

  controller.animals = [];

  $http.get('nature/animals/animals.json')
    .then(function(response) { controller.animals = response.data; })
    .catch(function(response) { console.log("Failed to get animals.json."); });
}]);

nature.controller('naturePlantsController', ['$scope', '$http', function($scope, $http) {
  var controller = this;

  controller.plants = [];

  $http.get('nature/plants/plants.json')
    .then(function(response) { controller.plants = response.data; })
    .catch(function(response) { console.log("Failed to get plants.json."); });
}]);

nature.controller('natureLandmarksController', ['$scope', '$http', function($scope, $http) {
  var controller = this;

  controller.landmarks = [];

  $http.get('nature/landmarks/landmarks.json')
    .then(function(response) { controller.landmarks = response.data; })
    .catch(function(response) { console.log("Failed to get landmarks.json."); });
}]);
