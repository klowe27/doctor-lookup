import { DoctorSearch } from './doctor-search.js';
import { buildSpecialtyDropdown, buildDoctorList } from './user-interface.js'
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

  $('#search').submit(function(event){
    event.preventDefault();
    $('#alert').hide();
    $('#results').hide();
    let query = "";
    const issue = $("input#issue").val();
    $('#issue').val("");
    const name = $('input#name').val();
    $('#name').val("");
    const specialty = $('#specialty option:selected').val();

    if (!name && !issue && !specialty) {
      $('#alert').show();
    }  else {
      (name) ? query += `name=${name}&` : null;
      (issue) ? query += `query=${issue}&` : null;
      (specialty) ? query += `query=${specialty}&` : null;

      const promiseDoctors = doctorSearch.getDoctors(query);

      promiseDoctors.then(function(response) {
        let results = JSON.parse(response);
        buildDoctorList(results);
      }, function(error) {
        $('.showErrors').text(`There was an error processing your request: ${error.message}`);
      });
    }
  });
});
