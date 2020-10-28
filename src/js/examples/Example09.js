import moment from "moment";
import _ from "lodash";
export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";

export const getNewDateFormat = (dateFormat, newFormat) => {
  const newDateFormat = moment(dateFormat);
  return moment(newDateFormat).format(newFormat);
};

export const getNextDateList = (numberOfDate, startDate) => {
  const dateList = [];
  for (let i = 0; i <= numberOfDate; i++) {
    var date = moment(startDate).add(i, "days");
    const dateFormat = getNewDateFormat(moment(date), DEFAULT_DATE_FORMAT);
    dateList.push(dateFormat);
  }
  return dateList;
};

export const getDateListFromDateRange = (dateRange) => {
  const startDate = moment(dateRange[0]);
  const endDate = moment(dateRange[1]);
  const dayDuration = _.isUndefined(dateRange[1])
    ? 0
    : endDate.diff(startDate, "days");
  return getNextDateList(dayDuration, startDate);
};
