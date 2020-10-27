export const separateBookingDate = (
  bookingList: Object,
  maxDateFormat: string
) => {
  const bookingListWithCreateAt = {};
  _.forEach(bookingList, (val, key) => {
    const createAt = _.get(val, KEY_CREATE_AT, 0);
    const createAtDateFormat = getDateFormatFromMilliseconds(
      createAt,
      DEFAULT_DATE_FORMAT
    );
    bookingListWithCreateAt[key] = { ...val, createAtDateFormat };
  });
  const bookingDataDateGroup = _.groupBy(
    bookingListWithCreateAt,
    KEY_CREATE_AT_DATE_FORMAT
  );
  const separatedBookingDate = _.reduce(
    bookingDataDateGroup,
    (result, val, key) => {
      if (key <= maxDateFormat) {
        result[key] = {
          id: key,
          data: val,
        };
      }
      return result;
    },
    {}
  );
  const separatedBookingDateSort = _.reverse(
    _.sortBy(separatedBookingDate, (o) => {
      return o.id;
    })
  );
  return separatedBookingDateSort;
};
