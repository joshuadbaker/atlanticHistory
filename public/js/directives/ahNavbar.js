angular.module('AtlanticHistory').directive('ahNavbar', function() {
  return {
    replace: true,
    restrict: 'E',
    controller: function($scope) {
      $scope.navCollapsed = function() {
        if($(window).width() <= 768) {
          console.log('hiding navbar');
          $scope.navCollapsed = true;
        }
      };
    }
  }
});