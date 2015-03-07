const React = require('react');
const range = require('lodash-node/modern/utility/range');

module.exports = React.createClass({

  renderYears() {
    return range(this.props.min, this.props.max).map(function (year) {
      return <section>{year}</section>;
    });
  },

  render() {
    return (
      <div className="timesheet">
        <div className="scale">
          {this.renderYears()}
        </div>
      </div>
    )
  }
});