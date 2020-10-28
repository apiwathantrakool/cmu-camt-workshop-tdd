import { getCourtListDataFromAvailability } from "./RealExample01";

const mockAvailabilityTimeList = {
  "2020-05-12": {
    day: "2020-05-12",
    hours: {
      "13:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_c00_01",
            isClosedAll: false,
            reason: "closedId_c00_01",
          },
          c01: {},
        },
      },
      "14:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_c00_01",
            isClosedAll: false,
            reason: "closedId_c00_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_c01_01",
            isClosedAll: false,
            reason: "closedId_c01_01",
          },
        },
      },
      "15:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_c00_02",
            isClosedAll: false,
            reason: "closedId_c00_02",
          },
          c01: {},
        },
      },
      "20:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
        },
      },
      "21:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
        },
      },
    },
  },
  "2020-05-13": {
    day: "2020-05-13",
    hours: {
      "13:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_c00_01",
            isClosedAll: false,
            reason: "closedId_c00_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_c01_02",
            isClosedAll: false,
            reason: "closedId_c01_02",
          },
        },
      },
      "14:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_c00_01",
            isClosedAll: false,
            reason: "closedId_c00_01",
          },
          c01: {},
        },
      },
      "20:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
        },
      },
      "21:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_all_01",
            isClosedAll: true,
            reason: "closedId_all_01",
          },
        },
      },
    },
  },
  "2020-05-14": {
    day: "2020-05-14",
    hours: {
      "15:00": {
        courts: {
          c00: {
            status: "Closed",
            closedId: "closedId_all_02",
            isClosedAll: true,
            reason: "closedId_all_02",
          },
          c01: {
            status: "Closed",
            closedId: "closedId_all_02",
            isClosedAll: true,
            reason: "closedId_all_02",
          },
        },
      },
    },
  },
};

const mockClosedTimeListData = {
  all: {
    timeList: {
      closedId_all_01: {
        dayRange: ["2020-05-12", "2020-05-13"],
        hourRange: ["20:00", "21:00"],
        reason: "closedId_all_01",
        closedId: "closedId_all_01",
        isClosedAll: true,
        isCloseAllDay: false,
      },
      closedId_all_02: {
        dayRange: ["2020-05-14"],
        hourRange: ["15:00"],
        reason: "closedId_all_02",
        closedId: "closedId_all_02",
        isClosedAll: true,
        isCloseAllDay: false,
      },
    },
  },
  c00: {
    timeList: {
      closedId_c00_01: {
        dayRange: ["2020-05-12", "2020-05-13"],
        hourRange: ["13:00", "14:00"],
        reason: "closedId_c00_01",
        closedId: "closedId_c00_01",
        isClosedAll: false,
        isCloseAllDay: false,
      },
      closedId_c00_02: {
        dayRange: ["2020-05-12"],
        hourRange: ["15:00"],
        reason: "closedId_c00_02",
        closedId: "closedId_c00_02",
        isClosedAll: false,
        isCloseAllDay: false,
      },
      closedId_all_01: {
        dayRange: ["2020-05-12", "2020-05-13"],
        hourRange: ["20:00", "21:00"],
        reason: "closedId_all_01",
        closedId: "closedId_all_01",
        isClosedAll: true,
        isCloseAllDay: false,
      },
      closedId_all_02: {
        dayRange: ["2020-05-14"],
        hourRange: ["15:00"],
        reason: "closedId_all_02",
        closedId: "closedId_all_02",
        isClosedAll: true,
        isCloseAllDay: false,
      },
    },
  },
  c01: {
    timeList: {
      closedId_c01_01: {
        dayRange: ["2020-05-12"],
        hourRange: ["14:00"],
        reason: "closedId_c01_01",
        isClosedAll: false,
        closedId: "closedId_c01_01",
        isCloseAllDay: false,
      },
      closedId_c01_02: {
        dayRange: ["2020-05-13"],
        hourRange: ["13:00"],
        reason: "closedId_c01_02",
        isClosedAll: false,
        closedId: "closedId_c01_02",
        isCloseAllDay: false,
      },
      closedId_all_01: {
        dayRange: ["2020-05-12", "2020-05-13"],
        hourRange: ["20:00", "21:00"],
        reason: "closedId_all_01",
        closedId: "closedId_all_01",
        isClosedAll: true,
        isCloseAllDay: false,
      },
      closedId_all_02: {
        dayRange: ["2020-05-14"],
        hourRange: ["15:00"],
        reason: "closedId_all_02",
        closedId: "closedId_all_02",
        isClosedAll: true,
        isCloseAllDay: false,
      },
    },
  },
};

describe("getCourtListDataFromAvailability", () => {
  it('get court list object which contain status "Closed" from availability', () => {
    const result = getCourtListDataFromAvailability(
      mockAvailabilityTimeList,
      12
    );
    expect(result).toEqual(mockClosedTimeListData);
  });
});
