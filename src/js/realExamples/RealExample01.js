import _ from "lodash";

export const getCourtListDataFromAvailability = (
  availabilityTimeList,
  numberOfHours
) => {
  const courtListData = _.reduce(
    availabilityTimeList,
    (result, date, dateId) => {
      const hours = _.get(date, "hours", {});
      _.forEach(hours, (hour, hourId) => {
        const courts = _.get(hour, "courts", {});
        _.forEach(courts, (court, courtId) => {
          const status = _.get(court, "status");
          const closedId = _.get(court, "closedId");
          const reason = _.get(court, "reason");
          const isClosedAll = _.get(court, "isClosedAll");
          if (_.isEqual(status, "Closed")) {
            const preClosedIds = _.get(result, [courtId, "timeList"], {});
            const preDates = _.get(
              result,
              [courtId, "timeList", closedId, "dayRange"],
              []
            );
            const preHours = _.get(
              result,
              [courtId, "timeList", closedId, "hourRange"],
              []
            );
            const dayRange = _.uniq([...preDates, dateId]);
            const hourRange = _.uniq([...preHours, hourId]);
            const isCloseAllDay = _.size(hourRange) === numberOfHours;
            const assignData = {
              dayRange,
              hourRange,
              reason,
              isClosedAll,
              closedId,
              isCloseAllDay,
            };
            result[courtId] = {
              timeList: {
                ...preClosedIds,
                [closedId]: assignData,
              },
            };
            if (isClosedAll) {
              const preClosedAllIds = _.get(result, ["all", "timeList"], {});
              result["all"] = {
                timeList: {
                  ...preClosedAllIds,
                  [closedId]: assignData,
                },
              };
            }
          }
        });
      });
      return result;
    },
    {}
  );
  return courtListData;
};
