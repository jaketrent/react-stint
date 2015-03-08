const range = require('lodash-node/modern/utility/range');
const React = require('react');

const Bubble = require('./bubble');
const dataUtil = require('./data');

module.exports = React.createClass({

  propTypes: {
    // TODO: eventually make min/max not required
    min: React.PropTypes.number.isRequired,
    max: React.PropTypes.number.isRequired,
    data: React.PropTypes.array.isRequired
  },

  getDefaultProps() {
    return {
      min: 0,
      max: 1,
      data: []
    };
  },

  getInitialState() {
    return {
      monthWidth: 50 // TODO: any better default?  or lazy render data?
    };
  },

  componentDidMount() {
    this.setState({
      monthWidth: this.calcMonthWidth()
    });
  },

  calcMonthWidth() {
    return this.getDOMNode().querySelector('.scale section').offsetWidth;
  },

  renderScale() {
    return (
      <div className="scale">
        {this.renderYears()}
      </div>
    );
  },

  renderYears() {
    return range(this.props.min, this.props.max).map(function (year) {
      return <section key={year}>{year}</section>;
    });
  },

  renderData() {
    return (
      <ul ref="data" className="data">
        {this.renderBubbles()}
      </ul>
    );
  },

  renderBubbles() {
    return dataUtil.parse(this.props.data).map((datum, i) => {
      return <Bubble key={i}
                     datum={datum}
                     widthMonth={this.state.monthWidth}
                     min={this.props.min} />;
    });
  },

  render() {
    return (
      <div className="timesheet color-scheme-default">
        {this.renderScale()}
        {this.renderData()}
      </div>
    );
  }
});