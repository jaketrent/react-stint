var range = require('lodash-node/modern/utility/range');
var React = require('react/addons');
var should = require('should');

var Timesheet = require('../../lib/timesheet');

var TestUtils = React.addons.TestUtils;

describe('awesome', function () {
  var min = 2002;
  var max = 2020;
  var timesheet;
  beforeEach(function () {
    timesheet = TestUtils.renderIntoDocument(Timesheet({
      min: min,
      max: max
    }));
  });

  it('is a function', function () {
    Timesheet.should.be.an.instanceOf(Function);
  });

  it('renders', function () {
    timesheet.isMounted().should.be.true;
  });

  it('is contained in .timesheet', function () {
    var div = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'timesheet');
    should.exist(div);
  });

  describe('scale', function () {
    it('takes a min year prop', function () {
      timesheet.props.min.should.eql(min);
    });

    it('takes a max year prop', function () {
      timesheet.props.max.should.eql(max);
    });

    it('renders a child for every year', function () {
      var scale = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'scale');
      should.exist(scale);
      scale.props.children.length.should.eql(max - min);
    });

    it('renders each year in order from min to max', function () {
      var scale = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'scale');
      var children = [].slice.call(scale.getDOMNode().children);
      var years = range(min, max);
      children.forEach(function (child, i) {
        child.innerText.should.eql(years[i].toString());
      });
    });
  });

});