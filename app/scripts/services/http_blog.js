'use strict';

/**
 * @ngdoc service
 * @name angularGeneratorYoApp.httpBlog
 * @description
 * # httpBlog
 * Service in the angularGeneratorYoApp.
 */
angular.module('cookingBlog')
  .service('http_blog', ["$http", function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var http_blog = {};

    http_blog.getBlogList = function (blogListParams) {
        $http({
            method: "GET",
            url: "to be set",
            params: {
                key: "",
                limit: blogListParams.limit,
                offset: blogListParams.offset
            }
        })
        .then(function (data) {
            return data.result;
        })
    }

    return http_blog;
  }]);
