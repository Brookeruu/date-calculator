import { DateChecker } from './date-checker.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#result").hide();

  $("#dateInput").submit(function(event) {
    event.preventDefault();

    let month = parseInt($("#inputMonth").val());
    let day = parseInt($("#inputDay").val());
    let year = parseInt($("#inputYear").val());

    let datechecker = new DateChecker(year, month, day);

    if (datechecker.isInputValid()) {
      $("#outputDay").text(datechecker.getWeekday());
      $("#inputDate").text((`${month}-${day}-${year}`));
      $("#result").show();

    } else  {
      $("#outputDay").text("Please enter a valid date!");
      $("#inputDate").text((`${month}-${day}-${year}`));
      $("#result").show();
    }

  });
});
