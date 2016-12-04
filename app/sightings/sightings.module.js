'use strict';

var sightings = angular.module('sightings', []);

sightings.controller('sightingsController', ['$scope', function($scope) {
  $scope.alerts = [];
  var nextAlertID = 0;
  $scope.Types = {
    ANIMAL: false,
    PLANT: true
  };
  $scope.type = $scope.Types.ANIMAL;

  $scope.sighting = {
    lat: 44.4270,
    lng: -110.5880,
    message: "Drag me to the sighting location",
    focus: true,
    draggable: true
  };

  $scope.markers = [$scope.sighting];

  $scope.mapCenter = {
    lat: $scope.sighting.lat,
    lng: $scope.sighting.lng,
    zoom: 10
  };

  $scope.onSubmitSighting = function() {
    var msg;
    var type;
    if (nextAlertID % 2 == 0) {
      msg = "Sighting successfully submitted!";
      type = "success";
    } else {
      msg = "Sighting submission failed. Please try again later.";
      type = "danger";
    }
    $scope.alerts = [{id: nextAlertID, type: type, msg: msg}];
    nextAlertID++;
  };

  $scope.onCloseAlert = function(alertID) {
    $scope.alerts = $scope.alerts.filter(function(alert) {
      return alert.id != alertID;
    });
  };
}]);
