'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('MainCtrl', ["$scope", "$location", "$anchorScroll", function ($scope, $location, $anchorScroll) {

    $scope.toAbout = function () {
        $location.hash("About");
        $anchorScroll();
    }

    $scope.toTop = function () {
        $location.hash("Top");
        $anchorScroll();
    }

  }]);
