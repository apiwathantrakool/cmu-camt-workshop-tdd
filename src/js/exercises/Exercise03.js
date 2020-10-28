// Requirements: create a function to return color value following percentage range.
// 1. Receive remain hours and total hours.
// 2. Calculate percentage from remain hours and total hours.
// 3. Add condition to return color value following:
// 3.1 More than or equal 80% = 'green'
// 3.2 79% to 60% = 'blue'
// 3.3 59% to 30% = 'yellow'
// 3.4 Less than or equal 29% = 'red'

// Optional: create a function to calculate percentage and unit test

export const getColorByHoursPercentage = (remainHours, totalHours) => {
  const hoursPercentage = parseInt(getHoursPercentage(remainHours, totalHours));
  if (hoursPercentage >= 80) {
    return 'green';
  } else if (hoursPercentage < 80 && hoursPercentage >= 60) {
    return 'blue';
  } else if (hoursPercentage < 60 && hoursPercentage >= 30) {
    return 'yellow';
  } else if (hoursPercentage <= 29) {
    return 'red';
  }
};

export const getHoursPercentage = (hours, totalHours) => {
  const hoursPercentage = (parseInt(hours) / parseInt(totalHours)) * 100;
  return hoursPercentage;
};
