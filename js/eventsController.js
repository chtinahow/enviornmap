var parkEventsController = angular.module('parkEventsController', []);

parkEventsController.controller('eventsController',
  ['$scope', '$http', function($scope, $http) {
  $scope.view = 0;
  this.setView = function(newView){
      $scope.view = newView;
  },

  this.isView = function(viewNum){
      return $scope.view == viewNum;
  }

  var realEventController = this;

  realEventController.specialEvents = [];
  realEventController.regularEvents = [];

  $http.get('content/events/regularEvents.json')
       .then(function(response) { realEventController.regularEvents = response.data; console.log("GET regularEvents.json complete."); console.log(realEventController.regularEvents); })
       .catch(function(response) { console.log("Failed to get events.json."); });

}]);
