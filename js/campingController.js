var campingInfoController = angular.module('campingInfoController', []);

campingInfoController.controller('campingController', ['$scope', function($scope) {
    this.submitReservationSuccess = false;

    $scope.onSubmitReservation = function() {
      this.submitReservationSuccess = true;
    }
}]);
