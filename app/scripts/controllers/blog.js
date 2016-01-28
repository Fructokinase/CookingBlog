'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', ["$scope", "http_blog", "time", function ($scope, http_blog, time) {

    $scope.blogContents = [];

    var placeholderDate = moment().format("YYYY-MM-DD");

    var bloglist_params = {
        limit: 100,
        offset: 0
    };

    http_blog.getBlogList(bloglist_params).then(function (data) {
        $scope.blogContents = data.result;
        $scope.blogContents.map(function (blogContent){
            blogContent.created_on = time.unixToYYYYMMDD(blogContent.created_on);
        });
    })

    

    

  }]);
