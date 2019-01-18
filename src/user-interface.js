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
    doctorList += `<h3>Dr. ${doctor.profile.first_name} ${doctor.profile.last_name}</h3>`;
    doctorList += `<h4>Practices</h4>`;
    doctor.practices.forEach(function(practice){
      doctorList += `<h6>${practice.name}</h6>`;
      doctorList += `<p><span class="label">Accepting new patients:</span> `;
      (practice.accepts_new_patients) ?  doctorList += `Yes</p>` : doctorList += `No</p>`;
      doctorList += `<p><span class="label">Website:</span> ${practice.website}</p>`;
      practice.phones.forEach(function(phone){
        doctorList += `<p><span class="label">Phone:</span> ${phone.number} (${phone.type})</p>`;
      });
      doctorList += `<p><span class="label">Address:</span> ${practice.visit_address.street}, `;
      (practice.visit_address.street2 === undefined) ? null : doctorList += `${practice.visit_address.street2}, `;
      doctorList += `${practice.visit_address.city}, ${practice.visit_address.state} ${practice.visit_address.zip}</p>`;
    });
    doctorList += `<h4>Specialties</h4><ul>`;
    doctor.specialties.forEach(function(specialty){
      doctorList += `<li>${specialty.name}</li>`;
    })
    doctorList += `</ul></div>`
  });
  $('#doctorList').append(doctorList);
}
