var React = require('react');

var date = require('./date');

module.exports = React.createClass({
  propTypes: {
    datum: React.PropTypes.object.isRequired,
    widthMonth: React.PropTypes.number.isRequired,
    min: React.PropTypes.number.isRequired
  },

  getStartOffset() {
    return (this.props.widthMonth / 12) * (12 * (this.props.datum.start.getFullYear() - this.props.min) + this.props.datum.start.getMonth());
  },

  // TODO: rename 'count'
  // TODO: format operators
  getFullYears() {
    return ((this.props.datum.end && this.props.datum.end.getFullYear()) || this.start.getFullYear()) - this.props.datum.start.getFullYear();
  },

  getMonths() {
    var fullYears = this.getFullYears();
    var months = 0;

    if (!this.props.datum.end) {
      months += !this.props.datum.start.hasMonth ? 12 : 1;
    } else {
      if (!this.props.datum.end.hasMonth) {
        months += 12 - (this.props.datum.start.hasMonth ? this.props.datum.start.getMonth() : 0);
        months += 12 * (fullYears-1 > 0 ? fullYears-1 : 0);
      } else {
        months += this.props.datum.end.getMonth() + 1;
        months += 12 - (this.props.datum.start.hasMonth ? this.props.datum.start.getMonth() : 0);
        months += 12 * (fullYears-1);
      }
    }

    return months;
  },

  getWidth() {
    return (this.props.widthMonth / 12) * this.getMonths();
  },

  getDateLabel() {
    return [
      (this.props.datum.start.hasMonth ? date.formatMonth(this.props.datum.start.getMonth() + 1) + '/' : '' ) + this.props.datum.start.getFullYear(),
      (this.props.datum.end ? '-' + ((this.props.datum.end.hasMonth ? date.formatMonth(this.props.datum.end.getMonth() + 1) + '/' : '' ) + this.props.datum.end.getFullYear()) : '')
    ].join('');
  },

  render() {
    var style = {
      marginLeft: `${this.getStartOffset()}px`,
      width: `${this.getWidth()}px`
    };
    var className = "bubble bubble-" + (this.props.datum.type || 'default');
    return (
      <li>
        <span style={style} className={className}></span>
        <span className="date">{this.getDateLabel()}</span>
        <span className="label">{this.props.datum.label}</span>
      </li>
    );
  }

});