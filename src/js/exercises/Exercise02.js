export const getTxtCourtNumberFromCourtList = (courtList) => {
  if (courtList === undefined || courtList.length === 0) {
    return "";
  } else {
    const integerNumberCourtArr = courtList.map((val) => {
      return getTxtCourtNumberFromCourtId(val);
    });
    const txtCourtNumber = integerNumberCourtArr.join("-");
    return txtCourtNumber;
  }
};

export const getTxtCourtNumberFromCourtId = (courtId) => {
  const result = courtId.replace("c", "");
  return parseInt(result) + 1;
};
