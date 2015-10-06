angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  // home page
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })

  // blogs page that will use the BlogController
  .when('/blogs', {
    templateUrl: 'views/blog.html',
    controller: 'BlogController'
  });

  $locationProvider.html5Mode(true);
}]);