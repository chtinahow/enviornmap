var directives = angular.module('directives', []);


directives.directive('myNav', function() {
  Controller = function() {
    this.view = 0;

    this.setView = function(newView){
        this.view = newView;
    },

    this.isView = function(viewNum){
        return this.view == viewNum;
    }
  }
  return {
      restrict: "E",
      controller: Controller,
      controllerAs: 'nav',
      scope: true,
      templateUrl: "partials/nav.html"
  }
});
