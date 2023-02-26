const { format, parseISO } = require('date-fns');

const formatDate = (date, dateformat) => format(parseISO(date), dateformat);

module.exports = formatDate;
