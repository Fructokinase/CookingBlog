'use strict';

describe('Service: httpBlog', function () {

  // load the service's module
  beforeEach(module('angularGeneratorYoApp'));

  // instantiate service
  var httpBlog;
  beforeEach(inject(function (_httpBlog_) {
    httpBlog = _httpBlog_;
  }));

  it('should do something', function () {
    expect(!!httpBlog).toBe(true);
  });

});
