// Correctness
export const calculateBookingRevenueWithStatus = (bookingList, status) => {
  let revenue = 0;
  Object.values(bookingList).forEach((bookingData) => {
    const bookingStatus = bookingData.status;
    if (status === bookingStatus) {
      const orderPrice = bookingData.totalPrice;
      revenue += orderPrice;
    } else {
      revenue += 0;
    }
  });
  return revenue;
};
