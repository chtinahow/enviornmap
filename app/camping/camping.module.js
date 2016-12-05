'use strict';

var camping = angular.module('camping', []);

camping.controller('campingController', ['$scope', function($scope) {
  $scope.alerts = [];
  var nextAlertID = 0;
  this.submitReservationSuccess = false;

  $scope.campSiteMarkers = [
    {
      lat: 44.4270,
      lng: -110.4900,
      message: "Madison Junction - 1",
      optionValue: "A-1",
      focus: false
    },
    {
      lat: 44.6000,
      lng: -110.4000,
      message: "Madison Junction - 2",
      optionValue: "A-2",
      focus: false
    },
    {
      lat: 44.4900,
      lng: -110.2700,
      message: "Madison Junction - 5",
      optionValue: "A-5",
      focus: false
    },
    {
      lat: 44.3000,
      lng: -110.6000,
      message: "Lewis Lake - 7",
      optionValue: "B-7",
      focus: false
    }
  ];

  var defaultCampSiteMarker = $scope.campSiteMarkers[0];
  defaultCampSiteMarker.focus = true;
  $scope.campSite = defaultCampSiteMarker.optionValue;

  $scope.mapCenter = angular.extend({ zoom: 10 }, defaultCampSiteMarker);

  $scope.onCampSiteChange = function() {
    for (var i = 0; i < $scope.campSiteMarkers.length; i++) {
      var camp = $scope.campSiteMarkers[i];
      camp.focus = (camp.optionValue === $scope.campSite);
    }
  };

  // Set $scope.campSite when a marker is clicked (focused) on the map.
  $scope.$on("leafletDirectiveMarker.popupopen", function(event, args) {
    for (var i = 0; i < $scope.campSiteMarkers.length; i++) {
      var camp = $scope.campSiteMarkers[i];
      if (camp.focus) {
	$scope.campSite = camp.optionValue;
	return;
      }
    }
  });

  $scope.onSubmitReservation = function() {
    var msg;
    var type;
    if (nextAlertID % 2 == 0) {
      msg = "Camping reservation confirmed!";
      type = "success";
    } else {
      msg = "Failed to make a camping reservation. Please try again later.";
      type = "danger";
    }

    $scope.alerts = [{id: nextAlertID, type: type, msg: msg}];
    nextAlertID++;
  }

  $scope.onCloseAlert = function(alertID) {
    $scope.alerts = $scope.alerts.filter(function(alert) {
      return alert.id != alertID;
    });
  };
}]);
