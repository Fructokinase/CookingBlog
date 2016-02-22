'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', ["$scope", "http_blog", "time", "$timeout", "http_comments", "$rootScope", "$stateParams",
    function ($scope, http_blog, time, $timeout, http_comments, $rootScope, $stateParams) {

    $scope.blogContents = [];
    $scope.commentsOpen = false;

    var bloglist_params = {
        limit: 100,
        offset: 0,
        created_on: moment($stateParams.blogmonth,"YYYY-MM").format("X")
    };

    http_blog.getBlogList(bloglist_params).then(function (data) {
        $scope.blogContents = data.result;
        $scope.blogContents.map(function (blogContent){
            blogContent.unixDate = blogContent.created_on;
            blogContent.created_on = time.unixToYYYYMMDD(blogContent.created_on);
            blogContent.commentsOpen = false;
            blogContent.fetchedComments = false;
        });
        console.log($scope.blogContents)
    });

    $scope.changeCommentStatus = function (index, blog_id) {
         $scope.blogContents[index].commentsOpen = !$scope.blogContents[index].commentsOpen;
         if ($scope.blogContents[index].fetchedComments == false) {
            http_comments.getComments({
                blog_id: blog_id,
                limit: 10,
                offset: 0
            })
            .then(function(data){
                $scope.currentBlogComments = data.result;
                $scope.currentBlogComments.map(function (blogComment) {
                    blogComment.posted_on = time.unixToMMDD(blogComment.posted_on);
                })
                $scope.blogContents[index].fetchedComments = true;
            });
        }
    };

    $scope.postComment = function (blog_id, comment_params) {
        comment_params.blog_id = blog_id;
        http_comments.postComment(comment_params)
        .then(function(data){
            if (data.status == 200) {
                $scope.commentPostSuccess = true;
                $scope.currentBlogComments.push(comment_params);
                $scope.comment_params = {};
            };
        });
    };

    $scope.likeComment = function(index, comment_id) {
        http_comments.likeComment({ id: comment_id})
        .then(function (data) {
            if (data.status == 200) {
                $scope.like_success = true;
                $scope.currentBlogComments[index].likes+=1;

            } else {
                console.log("like couldn't be processed")
            }
        });
    };

    $scope.fb_feed = function (){
        $rootScope.fb_feed();
    };

    $scope.enlarge = function(){
        console.log("should nelarge")
    }

  }]);
