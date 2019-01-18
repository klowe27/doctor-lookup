import $ from 'jquery';

export function buildSpecialtyDropdown(results) {
  results.data.forEach(function(specialty){
    $('#specialty').append(`<option value="${specialty.uid}">${specialty.name}</option>`);
  });
}

export function buildDoctorList(results) {
  $('#results').show();
  (results.data.length > 0) ? $('#resultsSummary').text(`We found ${results.data.length} doctor(s) in Portland, OR`) : $('#resultsSummary').text(`0 results found. Try again with broader search criteria`);

  let doctorList = "";
  results.data.forEach(function(doctor){
    doctorList += `<div class="doctor">`;
    doctorList += `<img src="${doctor.profile.image_url}">`;
    doctorList += `<h3>Dr. ${doctor.profile.first_name} ${doctor.profile.first_name}</h3>`;
    doctor.practices.forEach(function(practice){
      doctorList += `<h4>Practice: ${practice.name}</h4>`;
      doctorList += `<p>Accepting new patients: `;
      (practice.accepts_new_patients) ?  doctorList += `Yes</p>` : doctorList += `No</p>`;
      doctorList += `<p>Website: ${practice.website}</p>`;
      doctorList += `<p>Phone: ${practice.phones[0].number} (${practice.phones[0].type})</p>`;
      doctorList += `<p>Address: ${practice.visit_address.street}, ${practice.visit_address.street2}, ${practice.visit_address.city}, ${practice.visit_address.state} ${practice.visit_address.zip}</p>`;
    });
    doctorList += `Specialties:</p><ul>`
    doctor.specialties.forEach(function(specialty){
      doctorList += `<li>${specialty.name}</li>`
    })
    doctorList += `</ul></div>`
  });
  $('#doctorList').append(doctorList);
  console.log(results);
}
