import moment from "moment";

const getDateFormat = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const getPreviousDateList = (numberOfDate, startDate) => {
  const dateList = [];
  for (let i = 1; i <= numberOfDate; i++) {
    var date = moment(startDate).subtract(i, "days");
    const dateFormat = getDateFormat(moment(date));
    dateList.push(dateFormat);
  }
  return dateList;
};

// export const getDateListFromFilter = (filterId, startDate) => {
//   const dateList = {
//     today: [startDate],
//     sevenDays: getPreviousDateList(7, startDate),
//     thirtyDays: getPreviousDateList(30, startDate),
//     default: [],
//   };
//   return dateList[filterId] || dateList["default"];
// };

export const getDateListFromFilter = (filterId, startDate) => {
  switch (filterId) {
    case "today":
      return [startDate];
    case "sevenDays":
      return getPreviousDateList(7, startDate);
    case "thirtyDays":
      return getPreviousDateList(30, startDate);
    default:
      return [];
  }
};
