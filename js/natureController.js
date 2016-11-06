var parkNatureController = angular.module('parkNatureController', []);

parkNatureController.controller('natureController', ['$scope', function($scope) {
    $scope.view = 0;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }
}]);

parkNatureController.controller('natureInfoAnimalsController', ['$scope', '$http', function($scope, $http) {
    var animalsController = this;

    animalsController.animals = [];

    $http.get('/content/nature_info/animals.json')
         .then(function(response) { animalsController.animals = response.data; })
         .catch(function(response) { console.log("Failed to get animals.json."); });
  }
]);
