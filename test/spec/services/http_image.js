'use strict';

describe('Service: httpImage', function () {

  // load the service's module
  beforeEach(module('cookingBlog'));

  // instantiate service
  var httpImage;
  beforeEach(inject(function (_httpImage_) {
    httpImage = _httpImage_;
  }));

  it('should do something', function () {
    expect(!!httpImage).toBe(true);
  });

});
