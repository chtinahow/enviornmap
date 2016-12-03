var parkMapController = angular.module('parkMapController', ['ui-leaflet']);

parkMapController.controller('mapController', ['$scope', function($scope) {
    var abstractDefaultIcon = {
      iconSize: [32,37]
    };

    var animalIcon = angular.extend({ iconUrl: "icons/deer.png" }, abstractDefaultIcon);

    var deerMarker1 = {
      lat: 44.4270,
      lng: -110.5880,
      message: "Mule Deer",
      icon: animalIcon
    };

    var deerMarker2 = {
      lat: 44.3560,
      lng: -110.3700,
      message: "Mule Deer",
      icon: animalIcon
    };

    angular.extend($scope, {
      mapCenter: {
        lat: 44.4280,
        lng: -110.5885,
        zoom: 10
      },
      markers: [deerMarker1, deerMarker2]
    });
}]);
