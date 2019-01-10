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

  identifyLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
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

  yearsDifference(){
    return this.year - this.baseYear;
  }

  countLeapYears(){
    let count = 0;
    for (let i = 1; i < this.year; i++){
      this.identifyLeapYear(i) ? count++ : null;
    }

    if (this.isLeapYear() && (this.month > 2 || (this.month ==2 && this.day == 29))) {
      count++;
    }

    return count;
  }


  monthsDifference(){
    return this.month - this.baseMonth;
  }

  daysDifference(){
    const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
    let daysContributedByMonths = 0;
    for (let i = 0; i < this.monthsDifference(); i++) {
      daysContributedByMonths += daysInMonth[i];
    }

    // add function to calculate number of occured leap years
    let numberLeapDays = this.countLeapYears();

    return (this.yearsDifference() * 365) + (daysContributedByMonths) + this.day + numberLeapDays
  }

  // getWeekday() {
  //
  // }

}
