'use strict';

/**
 * @ngdoc function
 * @name angularGeneratorYoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGeneratorYoApp
 */
angular.module('cookingBlog')
  .controller('AdminEditCtrl', ["$scope", "http_admin", "$sce", 
    function ($scope, http_admin, $sce) {

    tinymce.init({ 
        selector:'textarea',
        plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table contextmenu paste code'],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
    });

    http_admin.getBlogList().then(function (data){
      $scope.blogList = data.result
    });

    $scope.blog_params = {};

    $scope.getBlogDetail = function(blog) {
      http_admin.getBlogDetail(blog).then(function(data){
        $scope.blog_params = data.result[0]
        tinyMCE.activeEditor.setContent($scope.blog_params.body);
      })
    }

    $scope.post = function(blog_params){
       tinyMCE.triggerSave();
       blog_params.body = tinyMCE.activeEditor.getContent();
       http_admin.postBlog(blog_params).then(function(result){
        $scope.result = result;
        if(result.data.message_code == 200) {
          $scope.post_success = true;
        };
       });
    };


  }]);