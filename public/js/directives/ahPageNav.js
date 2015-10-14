angular.module('AtlanticHistory').directive('ahPageNav', function() {
  return {
    replace: true,
    restrict: 'E',
    templateUrl: 'templates/directives/ahPageNav.html',
    controller: function($scope) {
      $scope.tagline = ("Hey scooter!");
    }
  }
});