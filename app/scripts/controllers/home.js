'use strict';

/**
 * @ngdoc function
 * @name cookingBlog.controller:HomectrlCtrl
 * @description
 * # HomectrlCtrl
 * Controller of the cookingBlog
 */
angular.module('cookingBlog')
  .controller('HomeCtrl',["$scope", "http_image", function ($scope, http_image) {

    $scope.image_params = {
        limit: 9,
        offset: 0
    }

    http_image.getFeaturedImages($scope.image_params).then(function (data) {
        $scope.image_list = data.result;
        for(var i in $scope.image_list) {
            $scope.image_list[i].delay = i/5 + 1.2 + 's';
        }
    });


  }]);
