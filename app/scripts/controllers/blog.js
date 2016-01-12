'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', ["$scope", "http_blog", function ($scope, http_blog) {

    var placeholderDate = moment().format("YYYY-MM-DD");

    $scope.blogContents  = [
    {id: 1, date: placeholderDate, title: "some title 1", body: " testing some body 1"+ 
    "testing some body 1 ar far away, behind the word mountains, far from. testing some body 1"+
    "Pointing has no control about the blind texts it is an almost unorthographic tent 1"+
    " Pityful a rethoric question ran over her cheek, then 1"},
    {id: 2, date: placeholderDate, title: "some title 2", body: " testing some body 2" +
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"},
    {id: 3, date: placeholderDate, title: "some title 3", body: " testing some body 3" + 
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"}];

    var bloglist_params = {
        limit: 100,
        offset: 0
    };

    http_blog.getBlogList(bloglist_params).then(function(data){
        $scope.blogContents = data.result;
    });

  }]);
