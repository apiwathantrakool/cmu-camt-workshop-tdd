// @flow
import { getInitialSelectionCourtList } from "./Example07";

describe("get list of selectable courts", () => {
  const courtList = {
    c00: {
      mockData: {},
      bookingId: "b01",
    },
    c01: {
      mockData: {},
    },
    c02: {
      mockData: {},
    },
    c03: {
      mockData: {},
      status: "closed",
    },
  };
  it("case: normal", () => {
    // Arrange
    const prevSelectedCourtList = {
      c01: {
        mockData: {},
      },
      c02: {
        mockData: {},
      },
    };
    // Act
    const actualResult = getInitialSelectionCourtList(
      courtList,
      prevSelectedCourtList
    );
    // Assert
    const expectResult = {
      c00: {
        isSelected: false,
        isDisabled: true,
        mockData: {},
        bookingId: "b01",
      },
      c01: {
        isSelected: true,
        isDisabled: false,
        mockData: {},
      },
      c02: {
        isSelected: true,
        isDisabled: false,
        mockData: {},
      },
      c03: {
        isSelected: false,
        isDisabled: true,
        mockData: {},
        status: "closed",
      },
    };
    expect(actualResult).toEqual(expectResult);
  });
});
