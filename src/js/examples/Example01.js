// unit test boundary

export const getColorByPercentage = (percentage) => {
  if (percentage > 40) {
    return 'blue';
  } else if (percentage <= 40 && percentage > 20) {
    return 'yellow';
  } else {
    return 'red';
  }
};
