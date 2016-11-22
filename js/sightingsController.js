var parkSightingsController = angular.module('parkSightingsController', []);

parkSightingsController.controller('sightingsController', ['$scope', function($scope) {
    $scope.alerts = [];
    var nextAlertID = 0;

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
    }
}]);
