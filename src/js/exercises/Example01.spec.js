import { getTxtCourtNumberFromCourtList } from "./Example01";

describe("get text of court number from array list of court numbers", () => {
  it("case: normal", () => {
    // Arrange
    const courtList = ["c00", "c01", "c02"];
    // Act
    const actualResult = getTxtCourtNumberFromCourtList(courtList);
    // Assert
    const expectResult = "1-2-3";
    expect(actualResult).toEqual(expectResult);
  });
  it("case: empty list", () => {
    // Arrange
    const courtList = [];
    // Act
    const actualResult = getTxtCourtNumberFromCourtList(courtList);
    // Assert
    const expectResult = "";
    expect(actualResult).toEqual(expectResult);
  });
});
