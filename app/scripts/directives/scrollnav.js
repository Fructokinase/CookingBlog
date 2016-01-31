'use strict';

/**
 * @ngdoc directive
 * @name cookingBlog.directive:scrollnav
 * @description
 * # scrollnav
 */
angular.module('cookingBlog')
  .directive('scrollnav', ["$window", function ($window) {
     var $win = angular.element($window); // wrap window object as jQuery object
     console.log($window)

    return {
        restrict: 'A',
        link: function (scope, element, attrs)
        {
            $win.bind('scroll', function(event){
                if ($win[0].pageYOffset >= 50) {
                    scope.boolChangeClass = true;
                    scope.navbarNavRight = false;
                    console.log("AOOOO")
                } else {
                    scope.boolChangeClass = false;
                    scope.navbarNavRight = true;
                    console.log("not scorlled")
                }
                scope.$apply()
            })
            // var topClass = attrs.setClassWhenAtTop, // get CSS class from directive's attribute value
            //     topPadding = parseInt(attrs.paddingWhenAtTop, 10),
            //     offsetTop = element.prop('offsetTop'); // get element's offset top relative to document


            // $win.on('scroll', function (e) {
            //     if ($window.pageYOffset >= 50) {
            //         console.log("abc")
            //     } else {
            //         element.removeClass(topClass);
            //     }
            //     $scope.$apply();
            // });
        }
    };
  }]);
