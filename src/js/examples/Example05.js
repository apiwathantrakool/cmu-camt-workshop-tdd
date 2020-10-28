import _ from "lodash";

export const separateBookingDate = (bookingList) => {
  const bookingListCreateDateGroup = _.groupBy(bookingList, "createDate");
  const bookingListCreateDateGroupData = _.map(
    bookingListCreateDateGroup,
    (data, id) => {
      return { id, data };
    }
  );
  return bookingListCreateDateGroupData;
};
