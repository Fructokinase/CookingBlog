'use strict';

/**
 * @ngdoc service
 * @name cookingBlog.httpComments
 * @description
 * # httpComments
 * Service in the cookingBlog.
 */
angular.module('cookingBlog')
  .service('httpComments', ["$http", "$rootScope", function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var http_comments = {};

    http_comments.getComments = function (comment_params) {
        return $http({
            method: "GET",
            url: $rootScope.baseUrl + "getComments",
            params: {
                blog_id: comment_params.blog_id,
                limit: comment_params.limit,
                offset: comment_params.offset,
            }
        })
        .then(function (result) {
            return result.data;
        })
    }

    return http_comments;
  }]);
