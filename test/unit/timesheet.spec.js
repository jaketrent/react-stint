var React = require('react/addons');
var should = require('should');

var Timesheet = require('../../lib/timesheet');

var TestUtils = React.addons.TestUtils;

describe('awesome', function () {

  it('is a function', function () {
    Timesheet.should.be.an.instanceOf(Function);
  });
  var timesheet;
  beforeEach(function () {
    timesheet = TestUtils.renderIntoDocument(Timesheet())
  });

  it('renders', function () {
    timesheet.isMounted().should.be.true;
  });

  it('is contained in .timesheet', function () {
    var div = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'timesheet');
    should.exist(div);
  });

});