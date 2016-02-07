'use strict';

/**
 * @ngdoc overview
 * @name angularGeneratorYoApp
 * @description
 * # angularGeneratorYoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('cookingBlog', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.tinymce',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', "$httpProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
     delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
    .state('blog', {
      url: '/',
      templateUrl: "views/blog.html",
      controller: "BlogCtrl"
    })
    .state('admin', {
      url: '/admin',
      templateUrl: "views/adminHome.html",
      controller: "AdminCtrl as admin",
    })

    $urlRouterProvider.otherwise('/');

  }]);

  app.run(["$rootScope", function($rootScope){
    $rootScope.baseUrl = "http://trailandcook.mybluemix.net/";
    new WOW().init();
  }]);