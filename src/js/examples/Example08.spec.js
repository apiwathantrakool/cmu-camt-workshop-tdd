import { getOpenCloseHours } from "./Example08";

describe("get open and close hours of specific date from provider data", () => {
  const mockOpeningTimes = {
    Sunday: { openingTime: "13:00", closingTime: "00:00" },
    Monday: { openingTime: "14:00", closingTime: "00:00" },
    Tuesday: { openingTime: "15:00", closingTime: "00:00" },
    Wednesday: { openingTime: "16:00", closingTime: "00:00" },
    Thursday: { openingTime: "17:00", closingTime: "00:00" },
    Friday: { openingTime: "18:00", closingTime: "00:00" },
    Saturday: { openingTime: "19:00", closingTime: "00:00" },
  };
  it("case: normal", () => {
    const openingTimes = mockOpeningTimes;
    const dateFormat = "2020-06-26";
    expect(getOpenCloseHours(openingTimes, dateFormat)).toEqual({
      openingTime: "18:00",
      closingTime: "00:00",
    });
  });
  it("case: exception", () => {
    const openingTimes = mockOpeningTimes;
    const dateFormat = "";
    expect(getOpenCloseHours(openingTimes, dateFormat)).toEqual({
      openingTime: null,
      closingTime: null,
    });
  });
});
