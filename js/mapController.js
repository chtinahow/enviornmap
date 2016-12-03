var parkMapController = angular.module('parkMapController', ['ui-leaflet']);

parkMapController.controller('mapController', ['$scope', function($scope) {
    var abstractDefaultIcon = {
      iconSize: [32,37]
    };

    var animalIcon = angular.extend({ iconUrl: "icons/deer.png" }, abstractDefaultIcon);
    var grassIcon = angular.extend({ iconUrl: "icons/grass.png" }, abstractDefaultIcon);

    var deerMarker1 = {
      layer: "animals",
      lat: 44.4270,
      lng: -110.5880,
      message: "Mule Deer",
      icon: animalIcon
    };

    var deerMarker2 = {
      layer: "animals",
      lat: 44.3560,
      lng: -110.3700,
      message: "Mule Deer",
      icon: animalIcon
    };

    var rossBentGrassMarker1 = {
      layer: "plants",
      lat: 44.2000,
      lng: -110.1000,
      message: "Ross Bent Grass",
      icon: grassIcon
    };

    var rossBentGrassMarker2 = {
      layer: "plants",
      lat: 44.1800,
      lng: -110.1500,
      message: "Ross Bent Grass",
      icon: grassIcon
    };

    $scope.mapCenter = {
        lat: 44.4280,
        lng: -110.5885,
        zoom: 10
    };

    $scope.layers = {
      baselayers: {
        openStreetMap: {
          name: 'OpenStreetMap',
          type: 'xyz',
          url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }
      },
      overlays: {
	animals: {
	  type: "group",
	  name: "Animals",
	  visible: true
	},
	plants: {
	  type: "group",
	  name: "Plants",
	  visible: true
	},
      }
    };

    $scope.markers = [deerMarker1, deerMarker2, rossBentGrassMarker1, rossBentGrassMarker2];
}]);
