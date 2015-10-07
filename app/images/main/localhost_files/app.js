'use strict';

/**
 * @ngdoc overview
 * @name angularGeneratorYoApp
 * @description
 * # angularGeneratorYoApp
 *
 * Main module of the application.
 */
angular
  .module('angularGeneratorYoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/About', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'About'
      })
      .when('/blog', {
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
