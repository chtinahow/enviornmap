'use strict';

var map = angular.module('map', ['ui-leaflet']);

map.controller('mapController', ['$scope', function($scope) {
  var abstractDefaultIcon = {
    iconSize: [32,37]
  };

  var animalIcon = angular.extend({ iconUrl: "map/icons/deer.png" }, abstractDefaultIcon);
  var grassIcon = angular.extend({ iconUrl: "map/icons/grass.png" }, abstractDefaultIcon);
  var flowerIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/nature_marvels/flowers.png" }, abstractDefaultIcon);
  var hotSpringIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/nature_marvels/hotspring.png" }, abstractDefaultIcon);
  var waterfallIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/nature_marvels/waterfall-2.png" }, abstractDefaultIcon);
  var mountainIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/nature_marvels/mountains.png" }, abstractDefaultIcon);
  var geyserIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/nature_marvels/geyser-2.png" }, abstractDefaultIcon);
  var bearIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/animal/bear.png" }, abstractDefaultIcon);
  var catIcon = angular.extend({ iconUrl: "map/icons/map_icons_collection/animal/leopard_snow.png" }, abstractDefaultIcon);


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

  var bearMarker1 = {
    layer: "animals",
    lat: 44.1560,
    lng: -110.3700,
    message: "Grizzly Bear",
    icon: bearIcon
  };

  var bearMarker2 = {
    layer: "animals",
    lat: 44.5860,
    lng: -110.3700,
    message: "Grizzly Bear",
    icon: bearIcon
  };

  var bobCatMarker1 = {
    layer: "animals",
    lat: 44.5860,
    lng: -110.4700,
    message: "Bob Cat",
    icon: catIcon
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

  var flowerMarker1 =  {
    layer: "plants",
    lat: 44.3560,
    lng: -110.2199,
    message: "Yellow Stone Sand Verbena",
    icon: flowerIcon
  };

  var flowerMarker2 =  {
    layer: "plants",
    lat: 44.3460,
    lng: -110.2199,
    message: "Yellow Stone Sand Verbena",
    icon: flowerIcon
  };

  var hotSpringMarker1 =  {
    layer: "landmarks",
    lat: 44.4778,
    lng: -110.9476,
    message: "Grand Prismatic Hot Spring",
    icon: hotSpringIcon
  };

  var hotSpringMarker2 =  {
    layer: "landmarks",
    lat: 44.6849,
    lng: -110.7062,
    message: "Cistern Hot Spring",
    icon: hotSpringIcon
  };

  var waterFallMarker1 =  {
    layer: "landmarks",
    lat: 44.7180,
    lng: -110.4986,
    message: "Lower Falls of YellowStone",
    icon: waterfallIcon
  };

  var waterFallMarker2 =  {
    layer: "landmarks",
    lat: 44.7129,
    lng: -110.5019,
    message: "Upper Falls of YellowStone",
    icon: waterfallIcon
  };

  var waterFallMarker3 =  {
    layer: "landmarks",
    lat: 44.7180,
    lng: -110.5030,
    message: "Crystal Falls",
    icon: waterfallIcon
  };

  var mountainMarker1 =  {
    layer: "landmarks",
    lat: 44.7977,
    lng: -110.4365,
    message: "Mt. Washburn",
    icon: mountainIcon
  };

  var geyserMarker1 =  {
    layer: "landmarks",
    lat: 44.4309,
    lng: -110.8882,
    message: "Old Faithful",
    icon: geyserIcon
  };

  $scope.mapCenter = {
    lat: 44.3280,
    lng: -110.6085,
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
      landmarks: {
  type: "group",
  name: "Land marks",
  visible: true
      },
    }
  };

  $scope.markers = [deerMarker1, deerMarker2, rossBentGrassMarker1,
  rossBentGrassMarker2, flowerMarker1, flowerMarker2, hotSpringMarker1,
  hotSpringMarker2, waterFallMarker1, waterFallMarker2, waterFallMarker3,
  mountainMarker1, geyserMarker1, bearMarker1, bearMarker2, bobCatMarker1];
}]);
