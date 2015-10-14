'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('BlogCtrl', function ($scope) {

    $scope.blogContents  = [
    {title: "some title 1", body: " testing some body 1"+ 
    "testing some body 1 ar far away, behind the word mountains, far from. testing some body 1"+
    "Pointing has no control about the blind texts it is an almost unorthographic tent 1"+
    " Pityful a rethoric question ran over her cheek, then 1",
    date: "2015-10-15"},
    {title: "some title 2", body: " testing some body 2" +
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2",
    date: "2015-10-14"},
    {title: "some title 3", body: " testing some body 3" + 
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3",
    date: "2015-10-13"}];
  });
