angular.module('AtlanticHistory').controller('BlogIndexController', function(Blog, $scope) {
  // $scope.tagline = 'This is my blogging page!';
  $scope.blogs = Blog.query();
  console.log($scope.blogs);
});