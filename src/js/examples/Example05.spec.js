import { separateBookingDate } from "./Example05";

describe("return booking array object group by createDate", () => {
  it("case: normal", () => {
    const bookingData = {
      b001: {
        createDate: "2020-07-03",
        bookingId: "b001",
        totalPrice: 100,
      },
      b002: {
        createDate: "2020-07-08",
        bookingId: "b002",
        totalPrice: 200,
      },
      b003: {
        createDate: "2020-07-08",
        bookingId: "b003",
        totalPrice: 300,
      },
      b004: {
        createDate: "2020-07-03",
        bookingId: "b004",
        totalPrice: 400,
      },
    };
    const result = separateBookingDate(bookingData);
    const expectResult = [
      {
        id: "2020-07-03",
        data: [
          { createDate: "2020-07-03", bookingId: "b001", totalPrice: 100 },
          { createDate: "2020-07-03", bookingId: "b004", totalPrice: 400 },
        ],
      },
      {
        id: "2020-07-08",
        data: [
          { createDate: "2020-07-08", bookingId: "b002", totalPrice: 200 },
          { createDate: "2020-07-08", bookingId: "b003", totalPrice: 300 },
        ],
      },
    ];
    expect(result).toEqual(expectResult);
  });
});
