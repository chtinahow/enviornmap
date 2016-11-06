var parkSightingsController = angular.module('parkSightingsController', []);

parkSightingsController.controller('sightingsController', ['$scope', function($scope) {
    $scope.view = 0;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }
}]);
