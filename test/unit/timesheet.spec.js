var range = require('lodash-node/modern/utility/range');
var React = require('react/addons');
var should = require('should');

var Timesheet = React.createFactory(require('../../lib/timesheet'));

var TestUtils = React.addons.TestUtils;

describe('Timesheet', function () {

  describe('basics', function () {
    var timesheet;
    beforeEach(function () {
      timesheet = TestUtils.renderIntoDocument(Timesheet());
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

  });

  describe('scale', function () {

    var min = 2002;
    var max = 2020;
    var timesheet;
    beforeEach(function () {
      timesheet = TestUtils.renderIntoDocument(Timesheet({
        min: min,
        max: max
      }));
    });

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

    it('renders a key on each child', function () {
      var scale = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'scale');
      var withKey = scale.props.children.filter(function (child) {
        return child.key
      });
      withKey.length.should.eql(scale.props.children.length);
    });

    it('defaults to the min/max year of the data');

  });

  describe('data', function () {

    var min = 2000;
    var max = 2010;
    var data = [
      [ '01/2000', '12/2000', 'Activity #1', 'myClass' ],
      [ '01/2002', '06/2004', 'Activity #2', 'myClass2' ],
    ];
    var timesheet;
    beforeEach(function () {
      timesheet = TestUtils.renderIntoDocument(Timesheet({
        min: min,
        max: max,
        data: data
      }));
    });

    it('takes a data prop', function () {
      timesheet.props.data.should.eql(data);
    });

    it('renders a container with data className', function () {
      var ul = TestUtils.findRenderedDOMComponentWithClass(timesheet, 'data');
      should.exist(ul);
    });

    it('renders a bubble for each datum', function () {
      timesheet.refs.data.props.children.length.should.eql(data.length);
    })

    it('renders a key on each child', function () {
      var withKey = timesheet.refs.data.props.children.filter(function (child) {
        return child.key
      });
      withKey.length.should.eql(timesheet.refs.data.props.children.length);
    });
  });

});