import { DateChecker } from "../src/date-checker.js";

describe ('DateChecker', function() {

  let goodDate;
  let badDate;
  let leapYearDate;
  let ancientYearDate;
  let ancientYearDate2;

  beforeEach(function() {
    goodDate = new DateChecker(
                      2019,
                      1,
                      10
    );

    badDate = new DateChecker(
                      2019,
                      1,
                      32
    );

    leapYearDate = new DateChecker(
                      2020,
                      7,
                      31
    );

    ancientYearDate = new DateChecker(
                      12,
                      11,
                      15
    );

    ancientYearDate2 = new DateChecker(
                      320,
                      11,
                      15
    );

  })

  it('should check if dates are valid', function (){
    expect(goodDate.isInputValid()).toEqual(true);
    expect(badDate.isInputValid()).toEqual(false);
  });

  it('should check if a DateChecker object\'s year is a leap year', function (){
    expect(goodDate.isLeapYear()).toEqual(false);
    expect(leapYearDate.isLeapYear()).toEqual(true);
  });

  it('should determine the difference in years between input year and base year', function (){
    expect(goodDate.yearsDifference()).toEqual(2018);
  });

  it('should determine the difference in months between input month and base month', function (){
    expect(goodDate.monthsDifference()).toEqual(0);
  });

  it('should determine the difference in days between input day and base day NOT including leap years', function (){
    expect(leapYearDate.daysDifference()).toEqual(737147);
    expect(goodDate.daysDifference()).toEqual(736580);

  });

  it('should return the count of leap years between base-year through input', function (){
    expect(ancientYearDate.countLeapYears()).toEqual(3);
    expect(ancientYearDate2.countLeapYears()).toEqual(77);

  });

})
