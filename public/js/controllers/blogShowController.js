angular.module('AtlanticHistory').controller('BlogShowController', function(Blog, $scope, $routeParams, $location) {
  $scope.blog = Blog.get({id: $routeParams.id});
  console.log($scope.blog);

  $scope.deleteBlog = function(blog) {
    blog.$remove().then(function() {
      // $location.path("/blogs");
      console.log("blog deleted!")

    });
  };
});