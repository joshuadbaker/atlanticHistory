angular.module('BlogCtrl', []).controller('BlogController', function($scope) {
  $scope.tagline = 'This is my blogging page!';
  scope.blogs = Blog.query();
  console.log($scope.Blogs);
});