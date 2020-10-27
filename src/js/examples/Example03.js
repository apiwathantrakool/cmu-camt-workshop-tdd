import _ from "lodash";

export const getStatusBackgroundColor = (remainHours, totalHours) => {
  const hoursPercentage = _.toInteger(
    getHoursPercentage(remainHours, totalHours)
  );
  if (hoursPercentage > 40) {
    return "blue";
  } else if (hoursPercentage <= 40 && hoursPercentage > 0) {
    return "yellow";
  } else {
    return "red";
  }
};

export const getHoursPercentage = (hours, totalHours) => {
  const hoursPercentage = (
    (_.toInteger(hours) / _.toInteger(totalHours)) *
    100
  ).toFixed(0);
  return hoursPercentage;
};
