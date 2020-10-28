import { getColorByHoursPercentage, getHoursPercentage } from './Exercise03';

describe('get color value following percentage range', () => {
  it('case: percentage > 80', () => {
    // Arrange
    const remainHours = 100;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'green';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 80', () => {
    // Arrange
    const remainHours = 80;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'green';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 79', () => {
    // Arrange
    const remainHours = 79;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'blue';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage < 79 and percentage > 60', () => {
    // Arrange
    const remainHours = 70;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'blue';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 60', () => {
    // Arrange
    const remainHours = 60;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'blue';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 59', () => {
    // Arrange
    const remainHours = 59;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'yellow';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage < 59 and percentage > 30', () => {
    // Arrange
    const remainHours = 50;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'yellow';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 30', () => {
    // Arrange
    const remainHours = 30;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'yellow';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage === 29', () => {
    // Arrange
    const remainHours = 29;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'red';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: percentage < 29', () => {
    // Arrange
    const remainHours = 20;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'red';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: zero', () => {
    // Arrange
    const remainHours = 0;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'red';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: negative', () => {
    // Arrange
    const remainHours = -1;
    const totalHours = 100;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = 'red';
    expect(actualResult).toEqual(expectResult);
  });

  it('case: default', () => {
    // Arrange
    const remainHours = null;
    const totalHours = null;
    // Act
    const actualResult = getColorByHoursPercentage(remainHours, totalHours);
    // Assert
    const expectResult = null;
    expect(actualResult).toEqual(expectResult);
  });
});

describe('get percentage from hours and total hours', () => {
  it('case: normal', () => {
    // Arrange
    const hours = 12;
    const totalHours = 24;
    // Act
    const result = getHoursPercentage(hours, totalHours);
    // Assert
    const expectResult = 50;
    expect(result).toEqual(expectResult);
  });
});
