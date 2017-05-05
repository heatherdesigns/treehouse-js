var expect = require('chai').expect;

// test suite
//sanity check
describe('Mocha', function () {
  // Test spec (unit test)
  it('should run our tests using npm', function() {
    // function containing an expectation
    expect(true).to.be.ok; // test if some value is truthy
  });
});
