import { getTotalCourts, getRemainCourts } from './Example04';

const mockAvailableTimes = {
  hours: {
    '13:00': {
      courts: {
        c00: {
          status: 'available',
        },
        c01: {
          status: 'unavailable',
        },
      },
    },
    '14:00': {
      courts: {
        c00: {
          status: 'available',
        },
        c01: {
          status: 'available',
        },
      },
    },
  },
};

describe('get total courts', () => {
  it('case: normal', () => {
    // Arrange
    const availableTimes = mockAvailableTimes;
    // Act
    const result = getTotalCourts(availableTimes);
    // Assert
    const expectResult = 4;
    expect(result).toEqual(expectResult);
  });

  it('case: exception', () => {
    // Arrange
    const availableTimes = {};
    // Act
    const result = getTotalCourts(availableTimes);
    // Assert
    const expectResult = 0;
    expect(result).toEqual(expectResult);
  });
});

describe('get remain courts', () => {
  it('case: normal', () => {
    // Arrange
    const availableTimes = mockAvailableTimes;
    // Act
    const result = getRemainCourts(availableTimes);
    // Assert
    const expectResult = 3;
    expect(result).toEqual(expectResult);
  });

  it('case: exception', () => {
    // Arrange
    const availableTimes = {};
    // Act
    const result = getRemainCourts(availableTimes);
    // Assert
    const expectResult = 0;
    expect(result).toEqual(expectResult);
  });
});
