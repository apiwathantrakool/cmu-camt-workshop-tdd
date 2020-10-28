import _ from "lodash";

// Friendly maintenance

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
