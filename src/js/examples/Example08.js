import moment from "moment";
import _ from "lodash";

// Refactoring
const EVERY_DAYS_OF_WEEK = "dddd";
const DEFAULT_LOCALE = "en";

export const getOpenCloseHours = (openingHours, dateFormat) => {
  const dayOfWeek = moment(dateFormat)
    .locale(DEFAULT_LOCALE)
    .format(EVERY_DAYS_OF_WEEK);
  const openingTime = _.get(openingHours, [dayOfWeek, "openingTime"], null);
  const closingTime = _.get(openingHours, [dayOfWeek, "closingTime"], null);
  return { openingTime, closingTime };
};

export const getDateTimePrice = (priceList, dateFormat, hour) => {
  const dayOfWeek = moment(dateFormat)
    .locale(DEFAULT_LOCALE)
    .format(EVERY_DAYS_OF_WEEK);
  const price = _.get(priceList, [dayOfWeek, hour], 0);
  return price;
};

// export const getDateTimePrice = (priceList, dateFormat, hour) => {
//   const dayOfWeek = getDayOfWeek(dateFormat);
//   const price = _.get(priceList, [dayOfWeek, hour], 0);
//   return price;
// };

export const getDayOfWeek = (dateFormat) => {
  return moment(dateFormat).locale(DEFAULT_LOCALE).format(EVERY_DAYS_OF_WEEK);
};
