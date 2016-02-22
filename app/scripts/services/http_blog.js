'use strict';

/**
 * @ngdoc service
 * @name angularGeneratorYoApp.httpBlog
 * @description
 * # httpBlog
 * Service in the angularGeneratorYoApp.
 */
angular.module('cookingBlog')
  .service('http_blog', ["$http", "$rootScope", function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var http_blog = {};

    http_blog.getBlogList = function (blogListParams) {
        return $http({
            method: "GET",
            url: $rootScope.baseUrl + "getBlogList",
            params: {
                created_on: blogListParams.created_on,
                limit: blogListParams.limit,
                offset: blogListParams.offset,
                show_on_blog: true
            }
        })
        .then(function (result) {
            return result.data;
        })
    }

    return http_blog;
  }]);
