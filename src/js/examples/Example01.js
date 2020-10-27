export const getTxtCourtNumberFromCourtList = (courtList) => {
  if (courtList === undefined || courtList.length === 0) {
    return "";
  } else {
    const integerNumberCourtArr = courtList.map((val) => {
      const result = val.replace("c", "");
      return parseInt(result) + 1;
    });
    const txtCourtNumber = integerNumberCourtArr.join(",");
    return txtCourtNumber;
  }
};
