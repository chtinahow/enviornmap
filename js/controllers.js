var environmapController = angular.module('environmapController', []);

environmapController.controller('parkController', ['$scope', function($scope) {
    $scope.view = 0;

    this.setView = function(newView){
        $scope.view = newView;
    },

    this.isView = function(viewNum){
        return $scope.view == viewNum;
    }
}]);

environmapController.controller('natureInfoAnimalsController', ['$scope', function($scope) {
    this.animals = [
        {
            "name": "Mule Deer",
            "images": [ { "url": "content/nature_info/mule_deer_male.jpg", "src_url": "https://en.wikipedia.org/wiki/File:2012-mule-deer-male.jpg" },
                        { "url": "content/nature_info/mule_deer_female.jpg", "src_url": "https://en.wikipedia.org/wiki/File:2012-mule-deer-female.jpg" } ]
        },
        {
            "name": "Yellow-Bellied Marmot",
            "images": [ { "url": "content/nature_info/yellow_bellied_marmot.jpg", "src_url": "https://en.wikipedia.org/wiki/File:Marmota_flaviventris_%28Yellow_Bellied_Marmot%29,_Yosemite_NP_-_Diliff.jpg" } ]
        }
    ];
  }
]);
