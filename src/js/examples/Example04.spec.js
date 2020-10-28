import { calculateBookingRevenueWithStatus } from './Example04';

describe('return revenue from calculating booking list with specific status', () => {
  const bookingList = {
    b001: { status: 'Confirmed', totalPrice: 1200 },
    b002: { status: 'Verifying', totalPrice: 1000 },
    b003: { status: 'Confirmed', totalPrice: 1100 },
  };
  it('case: normal', () => {
    const result = calculateBookingRevenueWithStatus(bookingList, 'Confirmed');
    expect(result).toEqual(2300);
  });
  it('case: undefined', () => {
    const result = calculateBookingRevenueWithStatus(bookingList, 'Canceled');
    expect(result).toEqual(0);
  });
});
