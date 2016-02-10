'use strict';

/**
 * @ngdoc service
 * @name cookingBlog.httpComments
 * @description
 * # httpComments
 * Service in the cookingBlog.
 */
angular.module('cookingBlog')
  .service('http_comments', ["$http", "$rootScope", function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var http_comments = {};

    http_comments.urlEncodedHeader = {'Content-Type': 'application/x-www-form-urlencoded'};
    http_comments.transformFunction = function(obj) {
        var str = [];
        for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&")
    }; 

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
    };

    http_comments.postComment = function(comment_params) {
        return $http({
            method: "POST",
            url: $rootScope.baseUrl + "postComment",
            headers: http_comments.urlEncodedHeader,
            transformRequest: http_comments.transformFunction,
            data: {
                blog_id: comment_params.blog_id,
                commenter_name: comment_params.commenter_name,
                comment: comment_params.comment,
            }
        })
    };

    http_comments.likeComment = function (comment_params) {
        return $http({
            method: "PUT",
            url: $rootScope.baseUrl +  "likeComment",
            headers: http_comments.urlEncodedHeader,
            transformRequest: http_comments.transformFunction,
            params: {
                id: comment_params.id
            }
        })
    };

    return http_comments;
  }]);
