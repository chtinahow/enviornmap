var parkMapController = angular.module('parkMapController', ['ui-leaflet']);

parkMapController.controller('mapController', ['$scope', function($scope) {
    angular.extend($scope, {
      mapCenter: {
        lat: 44.4280,
        lng: -110.5885,
        zoom: 10
      }
    });
}]);
