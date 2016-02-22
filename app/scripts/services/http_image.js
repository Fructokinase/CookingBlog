'use strict';

/**
 * @ngdoc service
 * @name cookingBlog.httpImage
 * @description
 * # httpImage
 * Service in the cookingBlog.
 */
angular.module('cookingBlog')
  .service('http_image', ["$http", "$rootScope", function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

   var http_image = {};

    http_image.urlEncodedHeader = {'Content-Type': 'application/x-www-form-urlencoded'};
    http_image.transformFunction = function(obj) {
        var str = [];
        for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&")
    }; 

    http_image.getFeaturedImages = function (image_params) {
        return $http({
            method: "GET",
            url: $rootScope.baseUrl + "getFeaturedImages",
            params: {
                limit: image_params.limit,
                offset: image_params.offset,
            }
        })
        .then(function (result) {
            return result.data;
        })
    };

    return http_image;

  }]);
