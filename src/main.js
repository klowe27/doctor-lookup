import { DoctorSearch } from './doctor-search.js';
import { buildSpecialtyDropdown } from './user-interface.js'
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const doctorSearch = new DoctorSearch();
  const promiseSpecialties = doctorSearch.getSpecialties();

  promiseSpecialties.then(function(response) {
    let results = JSON.parse(response);
    buildSpecialtyDropdown(results);
  }, function(error) {
    $('.showErrors').text(`There was an error processing your request: ${error.message}`);
  });

});
