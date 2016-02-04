'use strict';

/**
 * @ngdoc directive
 * @name cookingBlog.directive:scrollnav
 * @description
 * # scrollnav
 */
angular.module('cookingBlog')
  .directive('windowsize', ["$window", "$document", function ($window, $document) {

    return {
        link: function (scope, element, attrs)
        {
            var $win = angular.element($window);
            scope.w_height = $win[0].screen.availHeight;
            scope.w_width = $win[0].screen.availWidth;
        }
    };
  }]);
