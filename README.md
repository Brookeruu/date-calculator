## Planning

1. Configuration/dependencies
  * Webpack, Karma, Jasmine, ESLint, Bootstrap, Popper (for bootstrap), jQuery, CSS-Loader, Uglify, Style-Loader


2. Specs
  * Get a date
  * Establish base date (0) with month, day, year, day of week
  * Apply rules for Gregorian Calendar
    * Leap year
      * Every 4th year
      * If % 4 != 0, then not leap year
      * Except 100s years % 400 !== 0
      * Except 100's that % 400 == 0
  * Date class
    * new CustomDate()
      * properties
        * year
        * month
        * day
        * originDate = 1-1-0
      * methods
        * constructor
        * calculateDays between origin and given date
          * daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]
          * use a leap year function to return the number of leap years between origin and given date
          * add # of leap years to total number of days


3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome
