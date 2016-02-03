'use strict';

/**
 * @ngdoc directive
 * @name cookingBlog.directive:scrollnav
 * @description
 * # scrollnav
 */
angular.module('cookingBlog')
  .directive('scrollnav', ["$window", function ($window) {

    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            var scrollElement = angular.element(element)
            console.log(scrollElement[0])
            scrollElement.bind('scroll', function(event){
                console.log(angular.element(element))
                // if ($win[0].pageYOffset >= 50) {
                //     scope.boolChangeClass = true;
                //     scope.navbarNavRight = false;
                //     scope.fadeTest = true;
                //     console.log("AOOOO")
                // } else {
                //     scope.boolChangeClass = false;
                //     scope.navbarNavRight = true;
                //     scope.fadeTest = false;
                //     console.log("not scorlled")
                // }
                scope.$apply()
            })
        }
    };
  }]);
