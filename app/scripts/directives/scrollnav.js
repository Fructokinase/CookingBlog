'use strict';

/**
 * @ngdoc directive
 * @name cookingBlog.directive:scrollnav
 * @description
 * # scrollnav
 */
angular.module('cookingBlog')
  .directive('scrollnav', ["$window", "$document", function ($window, $document) {

    var $win = (angular.element($window))[0]

    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            var scrollElement = angular.element(element)
            $document.bind('scroll', function(event){
                if ($win.scrollY > ($win.screen.availHeight -60) ){
                    scope.scrolledToBlog = true;
                } else {
                    scope.scrolledToBlog = false;
                }
                scope.$apply();
            })
        }
    };
  }]);
