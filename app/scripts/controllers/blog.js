'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', ["$scope", "http_blog", "time", "$timeout", "http_comments",
    function ($scope, http_blog, time, $timeout, http_comments) {

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
            blogContent.commentsOpen = false;
        });
    });

    $scope.changeCommentStatus = function (blog_id) {
        http_comments.getComments({
            blog_id: blog_id,
            limit: 10,
            offset: 0
        })
        .then(function(data){
            $scope.currentBlogComments = data.result;
            $scope.currentBlogComments.map(function (blogComment) {
                blogComment.posted_on = time.unixToYYYYMMDDHHMM(blogComment.posted_on);
            })
            $scope.blogContents[blog_id].commentsOpen = !$scope.blogContents[blog_id].commentsOpen;
        });
    };

    $scope.postComment = function (comment_params) {
    }

  }]);
