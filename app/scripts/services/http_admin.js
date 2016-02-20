'use strict';

/**
 * @ngdoc service
 * @name cookingBlog.http
 * @description
 * # http
 * Service in the cookingBlog.
 */
angular.module('cookingBlog')
  .service('http_admin', ["$http", "$rootScope", function ($http, $rootScope) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var http_admin = {};

    http_admin.urlEncodedHeader = {'Content-Type': 'application/x-www-form-urlencoded'};
    http_admin.transformFunction = function(obj) {
        var str = [];
        for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&")
    }; 

    http_admin.postBlog = function (blog_params){
        return $http({
            method: "POST",
            url: $rootScope.baseUrl + "postBlog",
            headers: http_admin.urlEncodedHeader,
            transformRequest: http_admin.transformFunction,
            data: {
                title: blog_params.title,
                author: blog_params.author,
                body: blog_params.body,
                show_on_blog: blog_params.show_on_blog
            }
        })
    };

    http_admin.getBlogList = function(){
        return $http({
            method: "GET",
            url: $rootScope.baseUrl + "getBlogQuickList"
        }).then(function (result){
            return result.data
        })
    }

    http_admin.getBlogDetail = function(blog_params){
        return $http({
            method: "GET",
            url: $rootScope.baseUrl + "getBlogDetail",
            params: {
                id: blog_params.id
            }
        }).then(function (result){
            return result.data;
        })
    };

    return http_admin;

  }]);
