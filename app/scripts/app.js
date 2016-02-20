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
    'ui.bootstrap',
    'angular-loading-bar'
  ])
  .config(['$stateProvider', '$urlRouterProvider', "$httpProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider) {
     delete $httpProvider.defaults.headers.common['X-Requested-With'];

    $stateProvider
    .state('home',{
      url: '/home',
      templateUrl: "views/home.html",
      controller: "HomeCtrl"
    })
    .state('blog', {
      url: '/blog/:blogmonth',
      templateUrl: "views/blog.html",
      controller: "BlogCtrl"
    })
    .state('admin', {
      url: '/admin',
      templateUrl: "views/adminHome.html",
      controller: "AdminCtrl as admin"
    })
    .state('admin.post',{
      templateUrl: 'views/adminBlogPost.html',
      controller: 'AdminPostCtrl as adminpost'
    })
    .state('admin.edit', {
      templateUrl: "views/adminBlogEdit.html",
      controller: 'AdminEditCtrl as adminedit'
    })

    $urlRouterProvider.otherwise('/home');

  }]);

  app.run(["$rootScope", "$window", function($rootScope, $window){
    $rootScope.baseUrl = "http://trailandcook.mybluemix.net/";
    // $rootScope.baseUrl = "http://localhost:3000/";
    new WOW().init();

    (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

     $window.fbAsyncInit = function() {
      FB.init({
        appId      : '1687731904842331',
        cookie     : true,  // enable cookies to allow the server to access 
                        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.5' // use version 2.2
      })

      FB.getLoginStatus(function(response){
        if (response.status === 'connected') {
          console.log("connected")
        } else {
          console.log("not connected")
        }
      });

      $rootScope.fb_feed = function () {
        FB.ui({
          method: 'feed',
          link: 'http://trailandcook.com',
          caption: "Cooking: a college student's perspective"
        },function(response){
          if (response && !response.error_message){
              console.log("All good")
          } else {
            console.log("feed share failed")
          };
        });
      };

       $rootScope.fb_share = function () {
        FB.ui({
          method: 'share',
          href: 'http://trailandcook.com',
          caption: "Cooking: a college student's perspective"
        },function(response){
          if (response && !response.error_message){
            console.log("All good")
          } else {
            console.log("share failed")
          };
        });
      };

    };

  }]);


