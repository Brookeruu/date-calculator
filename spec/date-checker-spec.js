import { DateChecker } from "../src/date-checker.js";

describe ('DateChecker', function() {

  let goodDate;
  let badDate;

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

  })

  it('should check if dates are valid', function (){
    expect(goodDate.isInputValid()).toEqual(true);
    expect(badDate.isInputValid()).toEqual(false);
  });


})
