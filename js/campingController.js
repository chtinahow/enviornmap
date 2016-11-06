var campingInfoController = angular.module('campingInfoController', []);

campingInfoController.controller('campingController', ['$scope', function($scope) {
    $scope.view = 0;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }
}]);
