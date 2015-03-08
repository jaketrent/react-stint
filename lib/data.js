var date = require('./date');

exports.parse = function(data) {
  return data.map(function (datum) {
    var start = date.parse(datum[0]);
    var end = datum.length === 4 ? date.parse(datum[1]) : null;
    var label = datum.length === 4 ? datum[2] : datum[1];
    var type = datum.length === 4 ? datum[3] : datum.length === 3 ? datum[2] : 'default';

    return {
      start: start,
      end: end,
      label: label,
      type: type
    };
  });
};