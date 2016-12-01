var parkMapController = angular.module('parkMapController', ['ui-leaflet']);

parkMapController.controller('mapController', ['$scope', function($scope) {
    $scope.view = 0;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }

    var abstractDefaultIcon = {
      iconSize: [32,37]
    };

    var animalIcon = angular.copy(abstractDefaultIcon);
    animalIcon.iconUrl = "icons/deer.png";

    var animalMarkers = {
      lat: 44.4270,
      lng: -110.5880,
      focus: true,
      message: "Mule Deer",
      icon: animalIcon
    };

    angular.extend($scope, {
      mapCenter: {
        lat: 44.4280,
        lng: -110.5885,
        zoom: 10
      },
      markers: {
	  mainMarker: angular.copy(animalMarkers)
      }
    });
}]);
