import _ from "lodash";

// Correctness
export const getInitialSelectionCourtList = (
  courtList,
  prevSelectedCourtList
) => {
  _.forEach(courtList, (val, key) => {
    const isPrevSelected = _.get(prevSelectedCourtList, key) ? true : false;
    const isAnotherBooking = _.get(val, "bookingId") ? true : false;
    const courtStatus = _.get(val, "status", "");
    const isCourtClosed = _.isEqual("closed", courtStatus) ? true : false;
    const isDisabled = isAnotherBooking || isCourtClosed;
    courtList[key] = {
      ...val,
      isSelected: isPrevSelected,
      isDisabled: isDisabled,
    };
  });
  return courtList;
};
