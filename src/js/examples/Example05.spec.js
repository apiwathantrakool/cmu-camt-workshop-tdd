import {
  getNewDateFormat,
  getNextDateList,
  getDateListFromDateRange,
} from './Example05';
import moment from 'moment';

describe('get new date format', () => {
  it('case: changing date format from DD MMM YYYY to YYYY-MM-DD', () => {
    const dateFormat = '07 May 2020';
    const newFormat = 'YYYY-MM-DD';
    const result = getNewDateFormat(dateFormat, newFormat);
    const expectResult = '2020-05-07';
    expect(result).toEqual(expectResult);
  });

  it('case: changing date format from moment() type to DD MMM YYYY', () => {
    const dateFormat = moment('2020-05-07');
    const newFormat = 'DD MMM YYYY';
    const result = getNewDateFormat(dateFormat, newFormat);
    const expectResult = '07 May 2020';
    expect(result).toEqual(expectResult);
  });
});

describe('getNextDateList', () => {
  it('get list of date start from inputting start date', () => {
    const date = moment('2020-05-05');
    const result = getNextDateList(2, date);
    const expectResult = ['2020-05-05', '2020-05-06', '2020-05-07'];
    expect(result).toEqual(expectResult);
  });

  it('get list of date start from inputting start date: Case across month', () => {
    const date = moment('2020-05-31');
    const result = getNextDateList(2, date);
    const expectResult = ['2020-05-31', '2020-06-01', '2020-06-02'];
    expect(result).toEqual(expectResult);
  });
});

describe('getDateListFromDateRange', () => {
  it('get date list from array of start date and end date', () => {
    const startDate = new Date('2020-05-05');
    const endDate = new Date('2020-05-10');
    const dateRange = [startDate, endDate];
    const expectResult = [
      '2020-05-05',
      '2020-05-06',
      '2020-05-07',
      '2020-05-08',
      '2020-05-09',
      '2020-05-10',
    ];
    const result = getDateListFromDateRange(dateRange);
    expect(result).toEqual(expectResult);
  });

  it('get date list from array of start date and end date: case select one date', () => {
    const startDate = new Date('2020-05-05');
    const dateRange = [startDate];
    const expectResult = ['2020-05-05'];
    const result = getDateListFromDateRange(dateRange);
    expect(result).toEqual(expectResult);
  });

  it('get date list from array of start date and end date: case across the month and year', () => {
    const startDate = new Date('2020-12-30');
    const endDate = new Date('2021-01-05');
    const dateRange = [startDate, endDate];
    const expectResult = [
      '2020-12-30',
      '2020-12-31',
      '2021-01-01',
      '2021-01-02',
      '2021-01-03',
      '2021-01-04',
      '2021-01-05',
    ];
    const result = getDateListFromDateRange(dateRange);
    expect(result).toEqual(expectResult);
  });
});
