exports.parse = (date) => {
  if (date.indexOf('/') === -1) {
    date = new Date(parseInt(date, 10), 0, 1);
    date.hasMonth = false;
  } else {
    date = date.split('/');
    date = new Date(parseInt(date[1], 10), parseInt(date[0], 10)-1, 1);
    date.hasMonth = true;
  }

  return date;
};

exports.formatMonth = function(num) {
  num = parseInt(num, 10);

  return num >= 10 ? num : '0' + num;
};