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
  .module('cookingBlog', [
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
        templateUrl: 'views/blog.html',
        controller: 'BlogCtrl',
        controllerAs: 'blog'
      })
      .otherwise({
        redirectTo: '/'
      });
  });