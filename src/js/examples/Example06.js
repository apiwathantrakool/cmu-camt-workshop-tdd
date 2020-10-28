import _ from "lodash";

export const calculateBookingRevenueWithStatus = (bookingList, status) => {
  const allTotalPrice = _.map(bookingList, (bookingData) => {
    const bookingStatus = _.get(bookingData, "status", 0);
    if (_.isEqual(status, bookingStatus)) {
      const orderPrice = _.get(bookingData, "totalPrice", 0);
      return orderPrice;
    } else {
      return 0;
    }
  });
  return _.sum(allTotalPrice);
};
