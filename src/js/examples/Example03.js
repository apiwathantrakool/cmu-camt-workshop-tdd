// unit test boundary

export const getStatusBackgroundColor = (remainHours, totalHours) => {
  const hoursPercentage = parseInt(getHoursPercentage(remainHours, totalHours));
  if (hoursPercentage > 40) {
    return 'blue';
  } else if (hoursPercentage <= 40 && hoursPercentage > 0) {
    return 'yellow';
  } else {
    return 'red';
  }
};

export const getHoursPercentage = (hours, totalHours) => {
  const hoursPercentage = (parseInt(hours) / parseInt(totalHours)) * 100;
  return hoursPercentage;
};
