// Requirements: Separate sub function from Exercise01.
// 1. Copy the code from Exercise01.
// 2. Separate step of "Remove character "c" then plus +1 for each ID" to another function.
// 3. Copy the test from Exercise01.
// 4. Run the test then the result should be the same.
// 5. Add unit test for separated function(sub-function).

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
