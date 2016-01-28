'use strict';

describe('Service: http', function () {

  // load the service's module
  beforeEach(module('cookingBlog'));

  // instantiate service
  var http;
  beforeEach(inject(function (_http_) {
    http = _http_;
  }));

  it('should do something', function () {
    expect(!!http).toBe(true);
  });

});
