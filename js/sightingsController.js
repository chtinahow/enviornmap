var parkSightingsController = angular.module('parkSightingsController', []);

parkSightingsController.controller('sightingsController', ['$scope', function($scope) {
    $scope.view = 0;
    $(document).ready(function() {
     $('#filer_input').filer({showThumbs:true});
});

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isAnimal = function(){
        if ($scope.view == 1){
          return true;
        }
        return false;
    }
}]);
