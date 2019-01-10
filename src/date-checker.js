export class DateChecker {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.baseYear = 1;
    this.baseMonth = 1;
    this.baseDay = 1;

  }

  isLeapYear() {
    if (this.year % 4 === 0 && this.year % 100 !== 0) {
      return true;
    }
    else if (this.year % 100 === 0 && this.year % 400 === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isInputValid(){
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];


    if (this.year > 0) {
      if (this.month >= 1 && this.month <= 12) {
        if (this.day >= 1 && this.day <= daysInMonth[this.month-1]) {
          return true;
        }
        else {
          if ((this.isLeapYear(this.year)) && (this.day == 29)) {
            return true;
          }  else {
            return false;
          }
        }
      }
    }
    return false;
  }

}
