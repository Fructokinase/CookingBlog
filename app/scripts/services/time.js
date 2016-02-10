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

    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "October", "November", "December"
    ];

    time.unixToYYYYMMDD = function (unixTime) {
        return moment(unixTime, "X").format("YYYY-MM-DD");
    };

    time.unixToMMDD = function (unixTime) {
        return moment(unixTime, "X").format("MMM DD")
    }

    return time;
  }]);
