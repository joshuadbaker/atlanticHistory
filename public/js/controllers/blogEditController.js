angular.module('AtlanticHistory').controller('BlogEditController', function($scope, Blog, $routeParams, $location) {
  $scope.blog = Blog.get({id: $routeParams.id});
  $scope.isSubmitting = false;

  $scope.saveBlog = function(blog) {
    $scope.isSubmitting = true;

    blog.$update().finally(function() {
      $scope.isSubmitting = false;
      $location.path("/blogs/" + blog._id);
      console.log('blog updated!');
    });
  }
});