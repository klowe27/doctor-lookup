import $ from 'jquery';

export function buildSpecialtyDropdown(results) {
  results.data.forEach(function(specialty){
    $('#specialty').append(`<option>${specialty.name}</option>`)

  });
  console.log(results);
}
