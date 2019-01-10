import { DateChecker } from './date-checker.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {

  $("#dateInput").submit(function(event) {
    event.preventDefault();

    let month = parseInt($("#inputMonth").val());
    let day = parseInt($("#inputDay").val());
    let year = parseInt($("#inputYear").val());

    let datechecker = new DateChecker(year, month, day);

    if (datechecker.isInputValid()) {
      $("#outputDay").text(datechecker.getWeekday());

    } else  {
      $("#outputDay").text("Please enter a vaid date!");
    }


  });
});
