describe("separateBookingDate", () => {
  it("get booking list with separate dates", () => {
    const bookingData = {
      // 2020-07-03
      b001: {
        status: STATUS.VERIFYING,
        createAt: 1593739256789,
        bookingId: "b001",
        totalPrice: 100,
      },
      // 2020-07-08
      b002: {
        status: STATUS.CONFIRMED,
        createAt: 1594183318858,
        bookingId: "b002",
        totalPrice: 200,
      },
      // 2020-07-08
      b003: {
        status: STATUS.CANCELED,
        createAt: 1594183318858,
        bookingId: "b003",
        totalPrice: 300,
      },
      // 2020-07-03
      b004: {
        status: STATUS.CANCELED,
        createAt: 1593739256789,
        bookingId: "b004",
        totalPrice: 400,
      },
    };
    const today = "2020-07-08";
    const result = separateBookingDate(bookingData, today);
    const expectResult = [
      {
        data: [
          {
            status: STATUS.CONFIRMED,
            createAt: 1594183318858,
            bookingId: "b002",
            createAtDateFormat: "2020-07-08",
            totalPrice: 200,
          },
          {
            status: STATUS.CANCELED,
            createAt: 1594183318858,
            bookingId: "b003",
            createAtDateFormat: "2020-07-08",
            totalPrice: 300,
          },
        ],
        id: "2020-07-08",
      },
      {
        data: [
          {
            status: STATUS.VERIFYING,
            createAt: 1593739256789,
            bookingId: "b001",
            createAtDateFormat: "2020-07-03",
            totalPrice: 100,
          },
          {
            status: STATUS.CANCELED,
            createAt: 1593739256789,
            bookingId: "b004",
            createAtDateFormat: "2020-07-03",
            totalPrice: 400,
          },
        ],
        id: "2020-07-03",
      },
    ];
    expect(result).toEqual(expectResult);
  });
});
