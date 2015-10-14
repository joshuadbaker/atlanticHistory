angular.module('AtlanticHistory').config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  }).otherwise({ redirectTo: '/' })
  .when('/blogs', {
    templateUrl: 'templates/blogs/index.html',
    controller: 'BlogIndexController'
  })
  .when('/blogs/new', {
    templateUrl: "templates/blogs/new.html",
    controller: "BlogCreateController"
  })
  .when('/blogs/:id', {
    templateUrl: "templates/blogs/show.html",
    controller: "BlogShowController"
  })
  .when('/blogs/:id/edit', {
    templateUrl: "templates/blogs/edit.html",
    controller: "BlogEditController"
  })
  .when('/about', {
    templateUrl: "templates/about/about.html",
    controller: "AboutController"
  })
  .when('/ian_aebel', {
    templateUrl: "templates/ian_aebel/ian_aebel.html",
    controller: "IanController"
  })
  .when('/publications', {
    templateUrl: "templates/publications/publications.html",
    controller: "PublicationsController"
  });

  $locationProvider.html5Mode(true);
});