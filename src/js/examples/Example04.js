import _ from "lodash";

// Friendly maintenance

export const getTotalCourts = (availableTimes) => {
  const hours = _.get(availableTimes, ["hours"], {});
  if (_.isEmpty(hours)) {
    return 0;
  } else {
    let totalCourts = 0;
    _.forEach(hours, (val) => {
      const courts = _.get(val, "courts", {});
      totalCourts = _.toInteger(totalCourts) + _.size(courts);
    });
    return totalCourts;
  }
};

export const getRemainCourts = (availableTimes) => {
  const hours = _.get(availableTimes, ["hours"]);
  let remainCourts = 0;
  _.forEach(hours, (val) => {
    const courts = _.get(val, "courts", {});
    const freeCourts = _.filter(courts, (court) => {
      return _.isEqual(court.status, "available");
    });
    const numberOfFreeCourts = _.size(freeCourts);
    remainCourts = _.toInteger(remainCourts) + _.toInteger(numberOfFreeCourts);
  });
  return remainCourts;
};
