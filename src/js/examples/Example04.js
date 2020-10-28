// Friendly maintenance
// Correctness

export const getTotalCourts = (availableTimes) => {
  const { hours } = availableTimes;
  if (typeof hours == 'undefined') {
    return 0;
  } else {
    let totalCourts = 0;
    const hoursList = Object.values(hours);
    hoursList.forEach((val) => {
      const courtsLength = Object.values(val.courts).length;
      totalCourts += courtsLength;
    });
    return totalCourts;
  }
};

export const getRemainCourts = (availableTimes) => {
  const { hours } = availableTimes;
  if (typeof hours == 'undefined') {
    return 0;
  } else {
    let totalCourts = 0;
    const hoursList = Object.values(hours);
    hoursList.forEach((val) => {
      const courtsVal = Object.values(val.courts);
      const freeCourts = courtsVal.filter((courtData) => {
        return courtData.status === 'available';
      });
      totalCourts += parseInt(freeCourts.length);
    });
    return totalCourts;
  }
};
