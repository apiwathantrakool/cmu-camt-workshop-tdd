import { getDateListFromFilter } from "./Exercise03";

describe("getDateListFromFilter", () => {
  it("get list of date start from inputting start date and filter type: case today", () => {
    const result = getDateListFromFilter("today", "2020-10-26");
    const expectResult = ["2020-10-26"];
    expect(result).toEqual(expectResult);
  });

  it("get list of date start from inputting start date and filter type: case seven days ago", () => {
    const result = getDateListFromFilter("sevenDays", "2020-10-26");
    const expectResult = [
      "2020-10-25",
      "2020-10-24",
      "2020-10-23",
      "2020-10-22",
      "2020-10-21",
      "2020-10-20",
      "2020-10-19",
    ];
    expect(result).toEqual(expectResult);
    expect(result.length).toEqual(7);
  });

  it("get list of date start from inputting start date and filter type: case thirty days ago", () => {
    const result = getDateListFromFilter("thirtyDays", "2020-10-26");
    const expectResult = [
      "2020-10-25",
      "2020-10-24",
      "2020-10-23",
      "2020-10-22",
      "2020-10-21",
      "2020-10-20",
      "2020-10-19",
      "2020-10-18",
      "2020-10-17",
      "2020-10-16",
      "2020-10-15",
      "2020-10-14",
      "2020-10-13",
      "2020-10-12",
      "2020-10-11",
      "2020-10-10",
      "2020-10-09",
      "2020-10-08",
      "2020-10-07",
      "2020-10-06",
      "2020-10-05",
      "2020-10-04",
      "2020-10-03",
      "2020-10-02",
      "2020-10-01",
      "2020-09-30",
      "2020-09-29",
      "2020-09-28",
      "2020-09-27",
      "2020-09-26",
    ];
    expect(result).toEqual(expectResult);
    expect(result.length).toEqual(30);
  });

  it("get list of date start from inputting start date and filter type: case default", () => {
    const result = getDateListFromFilter(null, "2020-10-26");
    const expectResult = [];
    expect(result).toEqual(expectResult);
    expect(result.length).toEqual(0);
  });
});
