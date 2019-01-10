import { DateChecker } from "../src/date-checker.js";

describe ('DateChecker', function() {

  let goodDate;
  let badDate;
  let leapYearDate;

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

  })

  it('should check if dates are valid', function (){
    expect(goodDate.isInputValid()).toEqual(true);
    expect(badDate.isInputValid()).toEqual(false);
  });

  it('should check if a DateChecker object\'s year is a leap year', function (){
    expect(goodDate.isLeapYear()).toEqual(false);
    expect(leapYearDate.isLeapYear()).toEqual(true);
  });

  

})
