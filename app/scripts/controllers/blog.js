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

    //comments needs id, name, like,

    $scope.comments = [];
    $scope.comments[1] = [{id:1,name: "Alex", comment: "This" }, {id:2,name: "Alex", comment: "looks"}, {id:3,name: "Alex", comment: "awesome!"}];
    $scope.comments[2] = [{id:1,name: "Alex", comment: "That" }, {id:3,name: "Alex", comment: "awesome!!"}];
    $scope.comments[3] = [{id:2,name: "Alex", comment: "look"}, {id:3,name: "Alex", comment: "awesome!!!"}];

    $scope.blogContents  = [
    {id: 1, title: "some title 1", body: " testing some body 1"+ 
    "testing some body 1 ar far away, behind the word mountains, far from. testing some body 1"+
    "Pointing has no control about the blind texts it is an almost unorthographic tent 1"+
    " Pityful a rethoric question ran over her cheek, then 1",
    date: "2015-10-15"},
    {id: 2, title: "some title 2", body: " testing some body 2" +
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2"+
    "testing some body 2 testing some body 2 testing some body 2 testing some body 2",
    date: "2015-10-14"},
    {id: 3, title: "some title 3", body: " testing some body 3" + 
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3"+
    "testing some body 3 testing some body 3 testing some body 3 testing some body 3",
    date: "2015-10-13"}];

    $scope.addComment = function (blogContent_id, name, comment) {
        $scope.comments[blogContent_id].push({
            id: $scope.comments[blogContent_id].length + 1,
            name: name,
            comment:comment
        })
    }

    $scope.showComments = false;

  });
