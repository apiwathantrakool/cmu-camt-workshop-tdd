import { getStatusBackgroundColor } from "./Example03";

describe("get backgroundColor style value for status bar by percentage", () => {
  it("case: percentage > 40", () => {
    // Arrange
    const remainHours = 90;
    const totalHours = 100;
    // Act
    const actualResult = getStatusBackgroundColor(remainHours, totalHours);
    // Assert
    const expectResult = "blue";
    expect(actualResult).toEqual(expectResult);
  });

  it("case: percentage === 40", () => {
    // Arrange
    const remainHours = 40;
    const totalHours = 100;
    // Act
    const actualResult = getStatusBackgroundColor(remainHours, totalHours);
    // Assert
    const expectResult = "yellow";
    expect(actualResult).toEqual(expectResult);
  });

  it("case: percentage < 40", () => {
    // Arrange
    const remainHours = 39;
    const totalHours = 100;
    // Act
    const actualResult = getStatusBackgroundColor(remainHours, totalHours);
    // Assert
    const expectResult = "yellow";
    expect(actualResult).toEqual(expectResult);
  });

  it("case: percentage === 0", () => {
    // Arrange
    const remainHours = 39;
    const totalHours = 100;
    // Act
    const actualResult = getStatusBackgroundColor(remainHours, totalHours);
    // Assert
    const expectResult = "yellow";
    expect(actualResult).toEqual(expectResult);
  });

  it("case: percentage < 0", () => {
    // Arrange
    const remainHours = -1;
    const totalHours = 100;
    // Act
    const actualResult = getStatusBackgroundColor(remainHours, totalHours);
    // Assert
    const expectResult = "red";
    expect(actualResult).toEqual(expectResult);
  });
});
