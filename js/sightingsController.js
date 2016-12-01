var parkSightingsController = angular.module('parkSightingsController', []);

parkSightingsController.controller('sightingsController', ['$scope', function($scope) {
<<<<<<< HEAD
    $scope.view = 0;
    $(document).ready(function() {
     $('#filer_input').filer({showThumbs:true});
});
=======
    $scope.alerts = [];
    var nextAlertID = 0;
>>>>>>> d681e4e38ddf0bbe22cf8c2f21f7d1d385169031

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

<<<<<<< HEAD
    this.isAnimal = function(){
        if ($scope.view == 1){
          return true;
        }
        return false;
=======
    $scope.onCloseAlert = function(alertID) {
      $scope.alerts = $scope.alerts.filter(function(alert) {
        return alert.id != alertID;
      });
>>>>>>> d681e4e38ddf0bbe22cf8c2f21f7d1d385169031
    }
}]);
