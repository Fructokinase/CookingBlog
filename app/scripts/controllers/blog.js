'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', ["$scope", "http_blog", "time", "$timeout", function ($scope, http_blog, time, $timeout) {

    $scope.blogContents = [];
    $scope.commentsOpen = false;

    var bloglist_params = {
        limit: 100,
        offset: 0
    };

    http_blog.getBlogList(bloglist_params).then(function (data) {
        $scope.blogContents = data.result;
        $scope.blogContents.map(function (blogContent){
            blogContent.unixDate = blogContent.created_on;
            blogContent.created_on = time.unixToYYYYMMDD(blogContent.created_on);
        });
    });

    $scope.changeCommentStatus = function () {
        $scope.commentsOpen = !$scope.commentsOpen;
    }
  }]);
