import moment from "moment";
import _ from "lodash";

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
