'use strict';

/**
 * @ngdoc service
 * @name angularGeneratorYoApp.httpBlog
 * @description
 * # httpBlog
 * Service in the angularGeneratorYoApp.
 */
angular.module('cookingBlog')
  .service('time', [function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var time = {};

    time.unixToYYYYMMDD = function (unixTime) {
        return moment(unixTime, "X").format("YYYY-MM-DD");
    };

    time.unixToYYYYMMDDHHMM = function (unixTime) {
        return moment(unixTime, "X").format("YYYY-MM-DD HH:mm")
    }

    return time;
  }]);
