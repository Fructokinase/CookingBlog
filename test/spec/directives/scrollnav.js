'use strict';

describe('Directive: scrollnav', function () {

  // load the directive's module
  beforeEach(module('cookingBlog'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scrollnav></scrollnav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scrollnav directive');
  }));
});
