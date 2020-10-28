// Requirements: refactor function "getDateListFromFilter".
// 1. Replace switch case logic with object logic.
// 2. Run the test without update anything.
// 3. Optional, create uni test for "getPreviousDateList".
// ref: https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals

import moment from 'moment';

const getDateFormat = (date) => {
  return moment(date).format('YYYY-MM-DD');
};

export const getPreviousDateList = (numberOfDate, startDate) => {
  const dateList = [];
  for (let i = 1; i <= numberOfDate; i++) {
    var date = moment(startDate).subtract(i, 'days');
    const dateFormat = getDateFormat(moment(date));
    dateList.push(dateFormat);
  }
  return dateList;
};

export const getDateListFromFilter = (filterId, startDate) => {
  switch (filterId) {
    case 'today':
      return [startDate];
    case 'sevenDays':
      return getPreviousDateList(7, startDate);
    case 'thirtyDays':
      return getPreviousDateList(30, startDate);
    default:
      return [];
  }
};
