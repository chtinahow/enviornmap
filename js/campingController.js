'use strict';

var campingInfoController = angular.module('campingInfoController', []);

campingInfoController.controller('campingController', ['$scope', function($scope) {
  $scope.alerts = [];
  var nextAlertID = 0;
  this.submitReservationSuccess = false;

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
