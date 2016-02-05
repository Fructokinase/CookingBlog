'use strict';

describe('Service: httpComments', function () {

  // load the service's module
  beforeEach(module('cookingBlog'));

  // instantiate service
  var httpComments;
  beforeEach(inject(function (_httpComments_) {
    httpComments = _httpComments_;
  }));

  it('should do something', function () {
    expect(!!httpComments).toBe(true);
  });

});
