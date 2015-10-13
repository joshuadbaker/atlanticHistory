angular.module('AtlanticHistory').controller('BlogCreateController', function($scope, Blog, $location) {
  $scope.blog = new Blog();
  $scope.isSubmitting = false;

  $scope.saveBlog = function(blog) {
    $scope.isSubmitting = true;
    blog.$save().then(function() {
      $location.path("/blogs");
    })
    .catch(function(errors) {
      // validations
    })
    .finally(function() {
      $scope.isSubmitting = false;
    });
  };
})