// Requirements: create a function to convert list of IDs to text number.
// 1. Receive array of IDs.
// 2. Remove character "c" then plus +1 for each ID.
// 3. Join the IDs together by "-" sign.

// Example:
// input: ["c00", "c01", "c02"]
// output: 1-2-3

// Example:
// input: ["c00"]
// output: 1

export const getTxtCourtNumberFromCourtList = (courtList) => {
  if (courtList === undefined || courtList.length === 0) {
    return "";
  } else {
    const integerNumberCourtArr = courtList.map((val) => {
      const result = val.replace("c", "");
      return parseInt(result) + 1;
    });
    const txtCourtNumber = integerNumberCourtArr.join("-");
    return txtCourtNumber;
  }
};
